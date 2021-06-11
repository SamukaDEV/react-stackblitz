import React, { useContext } from 'react';
export default function TodoCard(props) {
  const theme = useContext(ThemeContext);
  return (
    <div className="card mb-2">
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
