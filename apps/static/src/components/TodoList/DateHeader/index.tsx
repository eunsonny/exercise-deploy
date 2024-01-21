const TodoListDateHeader = () => {
  return (
    <div className="flex items-center justify-between mb-[40px]">
      <div className="flex items-center gap-2 leading-4">
        <span className="text-[40px] font-bold">12</span>
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold">JAN</span>
          <span className="font-light leading-[14px]">2024</span>
        </div>
      </div>

      <span>TUESDAY</span>
    </div>
  );
};

export default TodoListDateHeader;
