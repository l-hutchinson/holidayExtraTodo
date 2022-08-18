import React, { useState } from 'react';

type TodoListType = {
  id: number;
  todoItem: string;
  complete: boolean;
};

const App = () => {
  const [todoTxt, setTodoTxt] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListType[]>([]);

  const handleTxtEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTxt(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        todoItem: todoTxt,
        complete: false,
      },
    ]);
    setTodoTxt('');
  };

  const handleCompletion = (id: number) => {
    setTodoList(
      todoList.map((i: TodoListType) =>
        i.id === id ? { ...i, complete: !i.complete } : i
      )
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '5% 0',
      }}
    >
      <div style={{ width: 'fit-content' }}>
        <h4>TODO App Holiday extras</h4>
        <input
          type="string"
          placeholder="add task"
          value={todoTxt}
          onChange={handleTxtEntry}
        />
        <button onClick={handleAddTodo}>Add</button>

        <br />

        <div>
          {`${todoList.filter((i) => i.complete).length} remaining out of ${
            todoList.length
          } tasks`}
        </div>

        <ul>
          {todoList.map((i) => (
            <li
              key={i.id}
              style={{ textDecoration: i.complete ? 'line-through' : 'none' }}
              onClick={() => handleCompletion(i.id)}
            >
              {i.todoItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
