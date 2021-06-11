import React, { useState } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
  // Set every item of app context here
  const [currentUser, setCurrentUser] = useState({});
  const context = {
    currentUser,
    setCurrentUser
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
