import React from "react";
import CreateMemory from "../components/CreateMemory/CreateMemoryCard";
import MemoryCard from "../components/MemoryCard";
import Pagination from "../components/Pagination";
import CreateMemoryModal from "../components/CreateMemory/CreateMemoryModal";

const MemoryPage = () => {
  return (
    <div>
      <MemoryCard />
      {/* <CreateMemory /> */}
      <CreateMemoryModal />
      <div className="flex w-screen justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default MemoryPage;
