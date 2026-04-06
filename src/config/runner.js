const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const projectRoot = process.cwd();
const args = process.argv.slice(2);

function getArgValue(flag) {
  const inline = args.find((arg) => arg.startsWith(`${flag}=`));
  if (inline) {
    return inline.slice(flag.length + 1);
  }

  const index = args.indexOf(flag);
  if (index >= 0) {
    return args[index + 1];
  }

  return undefined;
}

function hasFlag(flag) {
  return args.includes(flag);
}

function resolveCommand(command) {
  return process.platform === 'win32' ? `${command}.cmd` : command;
}

function run(command, commandArgs, env) {
  const result = spawnSync(resolveCommand(command), commandArgs, {
    cwd: projectRoot,
    env,
    stdio: 'inherit',
  });

  if (typeof result.status === 'number' && result.status !== 0) {
    process.exit(result.status);
  }

  if (result.error) {
    throw result.error;
  }
}

function cleanGeneratedArtifacts() {
  ['.features-gen', 'cucumber-json', 'cucumber-report'].forEach((dir) => {
    fs.rmSync(path.join(projectRoot, dir), { recursive: true, force: true });
  });
}

const tagExpression = getArgValue('--tags') || process.env.BDD_TAGS;
const headed = hasFlag('--headed');
const sequential = hasFlag('--sequential');
const parallel = hasFlag('--parallel');
const workers = getArgValue('--workers');
const env = { ...process.env };

if (sequential && parallel) {
  throw new Error('Use either --sequential or --parallel, not both.');
}

if (tagExpression) {
  env.BDD_TAGS = tagExpression;
} else {
  delete env.BDD_TAGS;
}

if (sequential) {
  env.BDD_FULLY_PARALLEL = 'false';
  env.BDD_WORKERS = '1';
} else {
  env.BDD_FULLY_PARALLEL = 'true';

  if (workers) {
    env.BDD_WORKERS = workers;
  } else if (!env.BDD_WORKERS) {
    env.BDD_WORKERS = env.CI ? '4' : '2';
  }
}

cleanGeneratedArtifacts();
run('npx', ['bddgen'], env);
run('npx', ['playwright', 'test', ...(headed ? ['--headed', '--project=chromium'] : [])], env);
run('node', ['config/generate-cucumber-report.js'], env);
