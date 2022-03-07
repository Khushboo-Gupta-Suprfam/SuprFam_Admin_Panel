import { useContext, createContext, useReducer } from "react";
import API from "../api/api";

export const AppContext = createContext({});
export const useApp = () => useContext(AppContext);

const appActions = {
  MAKE_REQUEST: "MAKE_REQUEST",
  SET_APP_DATA: "SET_CAMPAIGN_DATA",
  ERROR: "ERROR",
  REMOVE_SELECTED_DELIVERABLES: 'REMOVE_SELECTED_DELIVERABLES',
  MODIFY_OBJECT_FOR_SELECT: "MODIFY_OBJECT_FOR_SELECT"
};

const initialState = {
  loading: false,
  appData: {},
  deliverables: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case appActions.MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appActions.SET_APP_DATA:
      return {
        ...state,
        loading: false,
        appData: action.payload.data,
      };
    case appActions.REMOVE_SELECTED_DELIVERABLES:
      return {
        ...state,
        deliverables: action.payload
      }
    case appActions.MODIFY_OBJECT_FOR_SELECT:
      const { id, data } = action.payload;
      return {
        ...state,
        appData: {
          ...state.appData,
          [id]: data
        }
      }
    default:
      return state;
  }
};

export const AppDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getlatestAppData = async () => {
    try {
      dispatch({ type: appActions.MAKE_REQUEST });
      const { data } = await API.getLatestAppByDate();
      dispatch({
        type: appActions.SET_APP_DATA,
        payload: {
          data: data,
        },
      });
    } catch (error) {
      dispatch({
        type: appActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const removeSelectedDeliverables = (deliverables, category) => {
      let data = deliverables?.filter(del => category.findIndex(cat => cat.label === del.label) === -1)
      dispatch({type: appActions.REMOVE_SELECTED_DELIVERABLES, payload: data})
  }

  const modifyObjectForSelect = (appData, form, type, id) => {
    
    let data = appData[type]?.map((o) => {
      return { label: o.name, value: o.name, id: o._id };
    });

    if (id === "influencer") {
      let platform = [...form.influencer_details.social_performance];
      platform = platform?.map((p) => p.platform)?.filter((p) => p !== "");
      data = data?.filter((social) => !platform.includes(social.label));
    }
    dispatch({type: appActions.MODIFY_OBJECT_FOR_SELECT, payload: {
      id: type,
      data
    }})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getlatestAppData,
        removeSelectedDeliverables,
        modifyObjectForSelect
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
