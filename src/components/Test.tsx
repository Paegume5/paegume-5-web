import { useState } from "react";
import Modal from "./Modal";
import PrimaryButton from "./PrimaryButton";

const Test = () => {

  const [isModalShown, setIsModalShown] = useState(false)

  return (
    <div className="flex items-center justify-center w-full my-8">
      <Modal open={isModalShown} setOpen={setIsModalShown}>
        <div className="w-96 h-96 p-12 bg-white">Test</div>
      </Modal>
      <PrimaryButton text="Open Modal" classes="text-sm" click={() => setIsModalShown(true)} />
    </div>
  );
};

export default Test;
