import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

function App() {
  const items = [
    {
      task: "책 읽기",
      isDone: false,
    },
    {
      task: "운동하기",
      isDone: true,
    },
    {
      task: "숨쉬기",
      isDone: true,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <TodoList>
          <TodoList.DateHeader />
          {items.map((item) => (
            <TodoList.Item task={item.task} isDone={item.isDone} />
          ))}
        </TodoList>
      </div>
    </Layout>
  );
}

export default App;
