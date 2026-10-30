export const getPhoneHref = (phone: string) => {
  const digits = phone.replace(/\D/g, '');

  return `tel:+7${digits.slice(-10)}`;
};
