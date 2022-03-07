import { create } from "apisauce"

import  {REACT_APP_BASE_URL}  from "../config/Config"

export const URIS = {
  FIREBASE_TOKEN: "auth/login",
}

export const useApi = (props) => {
  const createApiClient = (baseURL = REACT_APP_BASE_URL) => {
    const api = create({
      baseURL,
      timeout: 15000,
    })

    const setHeaders = (params) => {
      for (const key in params) {
        api.setHeader(key, params[key])
      }
    }

    return {
      setHeaders,
      login: (body) => api.post("/auth/login", body),
      logout: (body) => api.post("/auth/logout", body),
      createUser: (body) => api.post("/user", body),
    }
  }

  return { ...createApiClient() }
}
