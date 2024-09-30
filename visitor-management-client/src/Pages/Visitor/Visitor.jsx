import React, { useState } from "react";
import "./Visitor.css";
import VisitorTable from "./VisitorTable";
// import VisitorModal from "../VisitorModal/VisitorModal"; // Import the modal
import AddVisitor from "../AddVisitor/AddVisitor";

const Visitor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddVisitorClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitVisitor = (visitor) => {
    
    console.log("New Visitor:", visitor);
    // Handle submission logic, e.g., add to visitor list, call API, etc.
  };

  return (
    <div className="bg">
      <h1 className="text-center text-3xl text-purple-600-600 font-extrabold">
        Visitor List
      </h1>

      <div className="w-[95%] mx-auto grid grid-cols-2 text-white">
        <p className="justify-self-start border border-red-800">
          Search Visitor
        </p>
        <p
          className="justify-self-end border border-red-800 cursor-pointer"
          onClick={handleAddVisitorClick}
        >
          Add Visitor
        </p>
      </div>

      {/* Visitor Table */}
      <div>
        <VisitorTable />
      </div>

      {/* Modal */}
      <AddVisitor
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitVisitor}
      />
    </div>
  );
};

export default Visitor;
