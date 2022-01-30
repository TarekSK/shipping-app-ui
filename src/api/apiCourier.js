import apiConfig from "./apiConfig";

// Courier - GET
export const courierGet = async () => {
  // Courier - GET
  const response = await apiConfig.get("Couriers");
  // Return Data []
  return response.data;
};

// Courier - Create
export const courierCreate = async (courier) => {
  // Courier - Create
  const response = await apiConfig.post("Couriers", courier);

  return response.data;
};

// Courier - Edit
export const courierEdit = async (courier) => {
  // Courier - Edit
  const response = await apiConfig.put(
    `Couriers/ ${courier.courierId}`,
    courier
  );

  return response.data;
};
