const AppFunctions = {};

AppFunctions.getStoredUserDetails = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default AppFunctions;
