export type RegistrationDetails = {
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  email: string;
  password: string;
};

type RegistrationDetailsInput = Partial<Record<keyof RegistrationDetails, string>>;

const BLANK_VALUE = 'blank';

function normalizeValue(value: string | undefined): string {
  if (!value) {
    return '';
  }

  return value.trim().toLowerCase() === BLANK_VALUE ? '' : value.trim();
}

export function buildRegistrationDetails(
  input: RegistrationDetailsInput,
): RegistrationDetails {
  const firstName = normalizeValue(input.firstName);
  const lastName = normalizeValue(input.lastName);
  const phone = normalizeValue(input.phone);
  const country = normalizeValue(input.country);
  const email = normalizeValue(input.email);
  const password = normalizeValue(input.password);

  return {
    firstName,
    lastName,
    phone,
    country,
    email,
    password,
  };
}
