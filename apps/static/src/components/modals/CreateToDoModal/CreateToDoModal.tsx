import * as Dialog from "@radix-ui/react-dialog";

const CreateToDoModal = ({ onClose }: any) => {
  return (
    <Dialog.Content>
      <input />
      <button onClick={onClose}>버튼</button>
    </Dialog.Content>
  );
};

export default CreateToDoModal;
