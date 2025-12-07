export const formatPhoneNumber = (phoneNumber: string): string => {
  let formattedNumber = phoneNumber.trim();

  if (formattedNumber.startsWith('09')) {
    formattedNumber = '+98' + formattedNumber.substring(1);
  } else if (formattedNumber.startsWith('9')) {
    formattedNumber = '+98' + formattedNumber;
  } else if (!formattedNumber.startsWith('+98')) {
    formattedNumber = '+98' + formattedNumber;
  }

  return formattedNumber;
};

export const iranianMobileRegex = /^(\+98|0)?9\d{9}$/;