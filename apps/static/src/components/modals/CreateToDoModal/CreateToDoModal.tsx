import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface CreateToDoModalProps {
  onClose: VoidFunction;
  addTodoItem: (todoItem: string) => void;
}

const CreateToDoModal = ({ onClose, addTodoItem }: CreateToDoModalProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Dialog.Content>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodoItem(inputValue);
          onClose();
        }}
      >
        추가
      </button>
    </Dialog.Content>
  );
};

export default CreateToDoModal;
