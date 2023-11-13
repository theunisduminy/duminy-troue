export const normalizePhoneNumber = (phoneNumber: string) => {
  // Remove all non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  // Check if the number starts with a '0' and has exactly 10 digits
  if (/^0\d{9,}$/.test(digitsOnly)) {
    return digitsOnly; // It's already in the '0817267083' format
  }

  // Check if the number starts with a country code like '27'
  if (digitsOnly.startsWith('27') && digitsOnly.length >= 12) {
    return '0' + digitsOnly.slice(2); // Remove the country code and add '0'
  }

  // If none of the conditions match, add a '0' in front
  return '0' + digitsOnly;
};
