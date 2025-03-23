import React, { useState, useEffect } from "react";
import "./Visitor.css";
import VisitorTable from "./VisitorTable";
import AddVisitor from "../AddVisitor/AddVisitor";
import toast from "react-hot-toast";

const Visitor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitors, setVisitors] = useState([]); // Store visitor list
  const [searchQuery, setSearchQuery] = useState(""); // Store search query

  // Function to open the add visitor modal
  const handleAddVisitorClick = () => {
    setIsModalOpen(true);
  };

  // Fetch the list of visitors on component mount
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch("http://localhost:3000/visitors");
        if (response.ok) {
          const data = await response.json();

          // Assign serial numbers dynamically
          // const updatedVisitors = data.map((visitor, index) => ({
          //   ...visitor,
          //   serialNo: index + 1, // Assign based on index
          // }));

          setVisitors(data);
        } else {
          console.error("Error fetching visitors:", response.statusText);
        }
      } catch (error) {
        console.error("Network error while fetching visitors:", error);
      }
    };

    fetchVisitors();
  }, []);

  // Function to handle the visitor form submission
  const handleSubmitVisitor = async (visitor) => {
    try {
      // Fetch existing visitors to determine the serial number dynamically
      const response = await fetch("http://localhost:3000/visitors");
      if (!response.ok) {
        throw new Error("Failed to fetch visitors");
      }
      const visitorsData = await response.json();
      const serialNo = visitorsData.length + 1; // Serial number based on index

      // Add visitor with the computed serial number
      const addResponse = await fetch("http://localhost:3000/visitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...visitor, serialNo }),
      });

      if (addResponse.ok) {
        const data = await addResponse.json();
        setVisitors((prevVisitors) => [...prevVisitors, data]); // Update state
        toast.success("Visitor added successfully!");
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add visitor. Try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter visitors based on search query
  const filteredVisitors = visitors.filter((visitor) =>
    visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg">
      <h1 className="text-center text-3xl text-purple-600 font-extrabold">
        Visitor List
      </h1>

      <div className="w-[95%] mx-auto grid grid-cols-2 items-center">

        {/* Visitor Search By Name Input filed */}
        <div className="w-full max-w-sm min-w-[200px] ">
          <div className="relative flex items-center w-[80%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="w-full bg-transparent placeholder:text-slate-400 placeholder:hover:text-slate-800 text-slate-700 text-sm border border-slate-800 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm focus:shadow"
              type="text"
              placeholder="Search Visitor by name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Add a new visitor button */}
        <p
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 justify-self-end cursor-pointer p-2"
          onClick={handleAddVisitorClick}
        >
          Add Visitor
        </p>
      </div>

      {/* Visitor Table with filtered visitors */}
      <div>
        <VisitorTable visitors={filteredVisitors} />
      </div>

      {/* Modal */}
      <AddVisitor
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitVisitor}
        visitors={visitors} // Pass visitor list
      />
    </div>
  );
};

export default Visitor;
