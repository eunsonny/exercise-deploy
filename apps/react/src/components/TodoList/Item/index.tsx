interface TodoListItemProps {
  task: string;
  isDone: boolean;
}

const TodoListItem = ({ task, isDone }: TodoListItemProps) => {
  return (
    <div className="h-[56px] flex items-center justify-between">
      <span className={`${isDone ? "text-[#D5D6DC]" : ""} font-bold`}>{task}</span>
      <button></button>
    </div>
  );
};

export default TodoListItem;
