import React, { useEffect, useContext, useReducer } from "react";

import { useApi } from "../contexts/Api"
import API from '../api/api'
import AppFunctions from "../Pages/utils/AppFunctions";

const AuthContext = React.createContext();

export const useAuth = (props) => useContext(AuthContext);

const initialState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  user: null,
  totalPages: 0,
  totalResults: 0,
  hasMoreData: false,
  userList: []
};

export const AuthProvider = ({ children }) => {
  const api = useApi();
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (body) => {
    try {
      const response = await api.login(body);
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "setUser", payload: response });
      }
      return response;
    } catch (err) {
      onOAuthFailure(err);
    }
  };

  const getUsersByRole = async (params, pageNumber) => {
    try {
      const response = await API.getUserByRole(params, pageNumber);
      dispatch({
        type: 'SET_USER_LIST_BY_ROLE',
        payload: {
          ...response.data,
          hasMoreData: response.data.page === response.data.totalPages ? false : true,
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      dispatch({ type: "setIsLoading", payload: true });
      const { token } = AppFunctions.getStoredUserDetails().tokens.refresh;
      await localStorage.removeItem("user")
      await api.logout(token);
      dispatch({ type: "reset" });
    } catch (err) {
      dispatch({ type: "setError", payload: err?.message });
    }
  };

  const onOAuthFailure = (response, msg) => {
    dispatch({ type: "setIsLoading", payload: false });
    if (response.error) {
      const res = response.json;

      if (!Boolean(msg)) {
        msg = res.error_description;
      }
    }

    if (msg && msg !== "") {
      dispatch({ type: "setError", payload: msg });
    }

    return response;
  };

  const checkAuth = () => {
    const user = localStorage.getItem("user");
    dispatch({ type: "setUser", payload: user });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        getUsersByRole,
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setIsLoading":
      return {
        ...state,
        isLoading: payload,
      };
    case "setError":
      //Toast.showErrorToast(payload);
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case "setUser":
      return {
        ...state,
        user: payload,
        isLoading: false,
      };
    case "reset":
      return initialState;
    case "SET_USER_LIST_BY_ROLE":
      return {
        ...state,
        userList: payload.results,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
        hasMoreData: payload.hasMoreData
      }
    default:
      throw new Error();
  }
};

AuthProvider.defaultProps = {};

AuthProvider.propTypes = {};
