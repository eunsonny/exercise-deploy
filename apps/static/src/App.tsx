import { useState } from "react";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

type TodoItem = { task: string; isDone: boolean };

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);


  const handleChangeDoneStatus = () => {};

  const addTodoitem = () => {
    if (!inputValue) return
    
    const updatedTodoItems = [
      ...todoItems,
      { task: inputValue, isDone: false },
    ];
  
    setInputValue('')
    setTodoItems(updatedTodoItems);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <TodoList addTodoItem={addTodoitem}>
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
              onChangeDoneStatus={handleChangeDoneStatus}
            />
          ))}
        </TodoList>
      </div>
    </Layout>
  );
}

export default App;
