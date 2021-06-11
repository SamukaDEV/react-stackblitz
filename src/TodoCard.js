import React from 'react';
export default function TodoCard(props) {
  return (
    <div className="card mb-2" key={props.key}>
      <div className="card-body">
        <i
          className="bi bi-trash text-danger remove-button"
          onClick={() => {
            removeItem(item);
          }}
        />
        {props.value}
      </div>
    </div>
  );
}
