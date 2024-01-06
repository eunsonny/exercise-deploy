interface TodoListItemProps {
  task: string;
  isDone: boolean;
  onChangeDoneStatus: VoidFunction;
}

const TodoListItem = ({
  task,
  isDone,
  onChangeDoneStatus,
}: TodoListItemProps) => {
  return (
    <>
      <div className="h-[56px] flex items-center justify-between">
        <span className={`${isDone ? "text-[#D5D6DC]" : ""} font-bold`}>
          {task}
        </span>

        <button
          type="button"
          onClick={onChangeDoneStatus}
          className={`${
            isDone ? "bg-[#d3f8e8]" : "bg-[#D5D6DC]"
          } w-[32px] h-[32px] rounded-full`}
        >
          <img
            className="relative left-1 bottom-[2px]"
            src={
              isDone ? "/icon-check-inactive.svg" : "/icon-check-deactive.svg"
            }
          />
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
