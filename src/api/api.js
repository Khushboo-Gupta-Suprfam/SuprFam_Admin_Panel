import axios from "axios";
import { REACT_APP_BASE_URL } from "../config/Config";
let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  let Auth_api = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers,
  });
  const API = {
    getUsers(params) {
        return Auth_api.get("/users", { params });
      },
  getCampaigns(params) {
    return Auth_api.get("/campaigns", { params });
  },
  createCampaign(params) {
    return Auth_api.post("/campaigns/", params);
  },
  getCampaignById(id) {
    return Auth_api.get(`/campaigns/${id}`);
  },
  updateCampaign(id, params) {
    return Auth_api.patch(`/campaigns/${id}`, params);
  },

  deleteCampaign(id) {
    return Auth_api.delete(`/campaigns/${id}`);
  },
  convertImageToText(uri) {
    return Auth_api.post("/apps/ocr", { uri });
  },
}
export default API;