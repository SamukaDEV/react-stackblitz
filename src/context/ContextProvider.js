import React, { useState, useEffect } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
  // Set every item of app context here
  const [currentUser, setCurrentUser] = useState({});
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(savedTodos || []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const context = {
    currentUser,
    setCurrentUser,
    todos,
    setTodos
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
