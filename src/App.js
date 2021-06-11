import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [todoText, setTodoText] = useState('');
  const addItem = () => {
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

      <div class="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <button className="btn-save btn btn-default btn-sm">
        <i className="bi bi-three-dots-vertical" />
      </button>
    </div>
  );
}
