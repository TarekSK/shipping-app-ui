import apiConfig from "./apiConfig";

// ParcelDimensionsPricing - GET
export const parcelDimensionsPricingGet = async (courierId) => {
  // ParcelDimensionsPricing - GET
  const response = await apiConfig.get(`ParcelDimensionsPricing/ ${courierId}`);
  // Return Data []
  return response.data;
};

// ParcelDimensionsPricing - Create
export const parcelDimensionsPricingCreate = async (
  parcelDimensionsPricing
) => {
  // ParcelDimensionsPricing - Create
  const response = await apiConfig.post(
    "ParcelDimensionsPricing",
    parcelDimensionsPricing
  );

  return response.data;
};

// ParcelDimensionsPricing - Edit
export const parcelDimensionsPricingEdit = async (parcelDimensionsPricing) => {
  // ParcelDimensionsPricing - Edit
  const response = await apiConfig.put(
    `ParcelDimensionsPricing/ ${parcelDimensionsPricing.parcelDimensionsPricingId}`,
    parcelDimensionsPricing
  );

  return response.data;
};
