import { useState } from "react";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

type TodoItem = { task: string; isDone: boolean };

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const handleChangeDoneStatus = (selectedIndex: number) => {
    const updatedToDoItems = todoItems.map((todo, index) => {
      return {
        ...todo,
        isDone: selectedIndex === index ? !todo.isDone : todo.isDone,
      };
    });
    setTodoItems(updatedToDoItems);
  };

  const addTodoItem = (todoItem: string) => {
    if (!todoItem) return;

    const updatedTodoItems = [...todoItems, { task: todoItem, isDone: false }];

    setTodoItems(updatedTodoItems);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <TodoList addTodoItem={addTodoItem}>
          <TodoList.DateHeader />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {todoItems.map((item, index) => (
            <TodoList.Item
              key={index}
              task={item.task}
              isDone={item.isDone}
              onChangeDoneStatus={() => handleChangeDoneStatus(index)}
            />
          ))}
        </TodoList>
      </div>
    </Layout>
  );
}

export default App;
