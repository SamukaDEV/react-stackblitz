import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context';
import TodoCard from './TodoCard';
import './style.css';

function App() {
  const { todos, setTodos } = useContext(AppContext);
  const [todoText, setTodoText] = useState('');
  const addItem = () => {
    if (todoText.length <= 0) return false;
    setTodos([
      ...todos,
      {
        id: todos.length,
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
  const noItems = () => {
    if (todos.length <= 0) {
      return (
        <p className="text-center fst-italic text-muted">
          Todo's list is empty
        </p>
      );
    } else {
      return '';
    }
  };
  return (
    <div>
      <div className="container main-container">
        <h1>TODO List</h1>
        <p className="text-muted">Manage your todos list</p>
        <div className="btn-group w-100">
          <input
            type="text"
            className="form-control form-control-sm"
            onChange={el => setTodoText(el.target.value)}
            placeholder="Type here..."
            value={todoText}
            onKeyDown={e => inputKeyDown(e)}
          />
          <button
            className="btn btn-success btn-sm add-button"
            onClick={addItem}
          >
            Add
          </button>
        </div>
        <div className="todos-list">
          {noItems()}
          {todos.map((todo, todo_idx) => (
            <TodoCard key={todo_idx} id={todo.id} value={todo.value} />
          ))}
        </div>

        <button className="btn-save btn btn-default btn-sm border rounded">
          <i className="bi bi-share" />
        </button>
        <a
          href="https://github.com/SamukaDEV"
          style={{
            position: 'absolute',
            left: 10,
            bottom: 20
          }}
          target="blank"
        >
          Github SamukaDEV
        </a>
        <div className="bv-1" />
        <div className="bv-2" />
      </div>
    </div>
  );
}
export default App;
