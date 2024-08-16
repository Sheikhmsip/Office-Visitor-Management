import React from "react";
import "./Visitor.css";
import VisitorTable from "./VisitorTable";

const Visitor = () => {
  return (
    <div className="bg ">
      <h1 className="text-center text-3xl text-purple-600-600 font-extrabold">
        Visitor List{" "}
      </h1>

      <div className="w-[95%] mx-auto grid grid-cols-2 text-white ">
        <p className="justify-self-start border border-red-800">
          Search Visitor
        </p>
        <p className="justify-self-end  border border-red-800">Add Visitor</p>
      </div>
      {/* Visitor Table */}

      <div>
        <VisitorTable></VisitorTable>
      </div>
    </div>
  );
};

export default Visitor;
