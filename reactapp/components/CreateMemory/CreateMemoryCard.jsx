import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateMemoryModal from "./CreateMemoryModal";

const CreateMemory = () => {
  return (
    <div className="absolute bottom-0 right-0 px-10 py-10">
      <button
        className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button">
        <AiFillPlusCircle size="30px" />
      </button>
    </div>
  );
};

export default CreateMemory;
