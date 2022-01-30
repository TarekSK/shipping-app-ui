import apiConfig from "./apiConfig";

// ParcelDimensionsPricing - GET
export const parcelDimensionsPricingGet = async () => {
  // ParcelDimensionsPricing - GET
  const response = await apiConfig.get("ParcelDimensionsPricings");
  // Return Data []
  return response.data;
};

// ParcelDimensionsPricing - Create
export const parcelDimensionsPricingCreate = async (
  parcelDimensionsPricing
) => {
  // ParcelDimensionsPricing - Create
  const response = await apiConfig.post(
    "ParcelDimensionsPricings",
    parcelDimensionsPricing
  );

  return response.data;
};

// ParcelDimensionsPricing - Edit
export const parcelDimensionsPricingEdit = async (parcelDimensionsPricing) => {
  // ParcelDimensionsPricing - Edit
  const response = await apiConfig.put(
    `ParcelDimensionsPricings/ ${parcelDimensionsPricing.parcelDimensionsPricingId}`,
    parcelDimensionsPricing
  );

  return response.data;
};
