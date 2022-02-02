import apiConfig from "./apiConfig";

// Courier - GET
export const parcelPricingCalc = async (parcelPricing) => {
  console.log(parcelPricing);
  // Courier - GET
  const response = await apiConfig.post("ParcelPricing", parcelPricing);
  // Return Data []
  return response.data;
};
