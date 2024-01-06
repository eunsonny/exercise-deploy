import TodoListDateHeader from "./DateHeader";
import TodoListItem from "./Item";

import { ReactNode } from "react";

interface TodoListBoxProps {
  children: ReactNode;
  addTodoItem: VoidFunction;
}

const TodoList = ({ children, addTodoItem }: TodoListBoxProps) => {
  return (
    <form className="flex flex-col items-center">
      <div className="w-[380px] h-[600px] rounded-[10px] bg-[#ffffff] shadow-lg p-[50px]">
        {children}
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodoItem();
        }}
        className="rounded-full bg-[#4FE3A4] w-[96px] h-[96px] relative bottom-[48px]"
      ></button>
    </form>
  );
};

export default Object.assign(TodoList, {
  DateHeader: TodoListDateHeader,
  Item: TodoListItem,
});
