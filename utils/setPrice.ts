export const setPrice = (
  personal: number,
  business: number,
  enterprise: number,
  individual: number,
  company: number
) => {
  const price = Math.min(
    ...[personal, business, enterprise, individual, company].filter(
      (item) => item !== -1 && item !== undefined
    )
  );

  return price;
};
