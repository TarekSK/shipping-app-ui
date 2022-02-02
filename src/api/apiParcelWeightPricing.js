import apiConfig from "./apiConfig";

// ParcelWeightPricing - GET
export const parcelWeightPricingGet = async (courierId) => {
  // ParcelWeightPricing - GET
  const response = await apiConfig.get(`ParcelWeightPricing/ ${courierId}`);
  console.log("GET:", courierId);
  // Return Data []
  return response.data;
};

// ParcelWeightPricing - Create
export const parcelWeightPricingCreate = async (parcelWeightPricing) => {
  console.log(parcelWeightPricing);
  // ParcelWeightPricing - Create
  const response = await apiConfig.post(
    "ParcelWeightPricing",
    parcelWeightPricing
  );

  return response.data;
};

// ParcelWeightPricing - Edit
export const parcelWeightPricingEdit = async (parcelWeightPricing) => {
  // ParcelWeightPricing - Edit
  const response = await apiConfig.put(
    `ParcelWeightPricing/ ${parcelWeightPricing.parcelWeightPricingId}`,
    parcelWeightPricing
  );

  return response.data;
};
