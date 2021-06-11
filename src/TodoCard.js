import React, { useContext, useEffect } from 'react';
import ThemeContext from './App';

export default function TodoCard(props) {
  useEffect(() => {
    console.log(ThemeContext);
  }, []);
  const theme = useContext(props.context);
  return (
    <div
      className="card mb-2"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <div className="card-body">
        <i
          className="bi bi-trash text-danger remove-button"
          onClick={() => {
            props.removeItem(item);
          }}
        />
        {props.value}
      </div>
    </div>
  );
}
