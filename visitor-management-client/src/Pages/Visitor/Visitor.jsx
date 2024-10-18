import React, { useState, useEffect } from "react";
import "./Visitor.css";
import VisitorTable from "./VisitorTable";
import AddVisitor from "../AddVisitor/AddVisitor";
import toast from "react-hot-toast";

const Visitor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitors, setVisitors] = useState([]); // State to store visitor list
  const [lastSerialNumber, setLastSerialNumber] = useState(0); // State to track last serial number

  // Function to open the modal
  const handleAddVisitorClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Fetch the list of visitors on component mount to determine the last serial number
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch("http://localhost:3000/visitors");
        if (response.ok) {
          const data = await response.json();
          setVisitors(data);

          // Determine the last serial number by finding the highest serial number in the list
          if (data.length > 0) {
            const lastVisitor = data[data.length - 1]; // Get the last visitor in the list
            setLastSerialNumber(lastVisitor.serial); // Set the last serial number
          }
        } else {
          console.error("Error fetching visitors:", response.statusText);
        }
      } catch (error) {
        console.error("Network error while fetching visitors:", error);
      }
    };

    fetchVisitors(); // Call the function to fetch visitors
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle the visitor form submission
  const handleSubmitVisitor = async (visitor) => {
    try {
      const response = await fetch("http://localhost:3000/visitors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitor),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("Visitor added successfully:", data);

        // Update the visitor list with the newly added visitor
        setVisitors((prevVisitors) => [...prevVisitors, data]);

        // Update the last serial number with the new visitor's serial number
        setLastSerialNumber(data.serialNo);

        // Show success message and close modal
        // alert("Visitor added successfully!");
        toast.success("Visitor added successfully!");
        setIsModalOpen(false);
      } else {
        console.error("Error adding visitor:", response.statusText);
        // alert("Error adding visitor! Please try again.");
        toast.error("Did not add visitor! Please try again.")
      }
    } catch (error) {
      // console.error("Network error:", error);
      // alert("Network error. Please check your connection and try again.");
      toast.error("Network error. Please check your connection and try again.")
    }
  };

  return (
    <div className="bg">
      <h1 className="text-center text-3xl text-purple-600 font-extrabold">
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
        <VisitorTable visitors={visitors} />
      </div>

      {/* Modal */}
      <AddVisitor
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitVisitor}
        lastSerialNumber={lastSerialNumber} // Pass lastSerialNumber to the modal
      />
    </div>
  );
};

export default Visitor;
