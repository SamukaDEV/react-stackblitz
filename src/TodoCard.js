import React, { useContext, useEffect } from 'react';
import AppContext from './context';

export default function TodoCard(props) {
  const { todos, setTodos } = useContext(AppContext);
  useEffect(() => {}, []);
  const removeItem = id => {
    setTodos(todos.filter(item => item.id !== id));
  };
  return (
    <div className="card mb-2">
      <div className="card-body">
        <i
          className="bi bi-trash text-danger remove-button"
          onClick={() => {
            removeItem(props.id);
          }}
        />
        {props.value}
      </div>
    </div>
  );
}
