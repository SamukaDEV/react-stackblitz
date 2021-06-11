import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [todoText, setTodoText] = useState('');
  const addItem = () => {
    if (todoText.length <= 0) return false;
    setItems([
      ...items,
      {
        id: items.length,
        value: todoText //Math.floor(Math.random() * 10) + 1
      }
    ]);
    setTodoText('');
  };
  const inputKeyDown = e => {
    if (e.key == 'Enter') {
      addItem();
    }
  };
  useEffect(_ => {
    // didMount
    // setItems([...items, JSON.stringify(localStorage.data)]);
    // console.log(localStorage.getItem('data'));
  });
  useEffect(
    _ => {
      // localStorage.setItem('data', JSON.stringify(items));
    },
    [items]
  );
  return (
    <div className="container main-container">
      <h1>TODO List</h1>
      <p className="text-muted">SamukaDEV was here</p>
      <div className="btn-group w-100">
        <input
          type="text"
          className="form-control form-control-sm"
          onChange={el => setTodoText(el.target.value)}
          placeholder="Todo item"
          value={todoText}
          onKeyDown={e => inputKeyDown(e)}
        />
        <button className="btn btn-success btn-sm add-button" onClick={addItem}>
          Add Item
        </button>
      </div>
      {items.map((item, item_idx) => (
        <div className="card mt-2" key={item_idx}>
          <div className="card-body">
            {item.id} - {item.value}
          </div>
        </div>
      ))}

      <button className="btn-save btn btn-default btn-sm border rounded">
        <i className="bi bi-share" />
      </button>
    </div>
  );
}
