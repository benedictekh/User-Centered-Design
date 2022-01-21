import { api } from "./api";
/**
 * API calls related to all Trashcans and shops
 */

/**
 * Get all trashcans
 * @returns all trashcans
 */
export const getAllTrashcans = async () => {
  return api.get(`trashcan/`).then((response) => {
    return response.data;
  });
};

/**
 * Get all shops
 * @returns all shops
 */
export const getAllShops = async () => {
  return api.get(`shop/`).then((response) => {
    return response.data;
  });
};

/**
 * Get shop transaction history
 * @returns shop transaction history for user 1
 */
export const getHistoryShops = async () => {
  //If more users, the user id could be sent as a variable
  return api.get(`user/1/shopTransactions`).then((response) => {
    return response.data;
  });
};

/**
 * Get trash transaction history
 * @returns trash transaction history for user 1
 */
export const getHistoryShops = async () => {
  //If more users, the user id could be sent as a variable
  return api.get(`user/1/trashCanTransactions`).then((response) => {
    return response.data;
  });
};
