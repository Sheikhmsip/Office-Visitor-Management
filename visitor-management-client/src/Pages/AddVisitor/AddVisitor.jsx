import React, { useState, useEffect } from "react";
import "./AddVisitor.css"; // Optional: CSS to style your modal

const AddVisitor = ({ isOpen, onClose, onSubmit, lastSerialNumber }) => {
  // State to hold visitor data
  const [visitor, setVisitor] = useState({
    name: "",
    phone: "",
    location: "",
    country: "",
    ref: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitor((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Automatically generate serial number, date, and time
    const serialNo = lastSerialNumber + 1; // Increment the last serial number by 1
    const date = new Date().toLocaleDateString(); // Current date
    const time = new Date().toLocaleTimeString(); // Current time

    // Include these fields in the visitor data
    const visitorWithAutoFields = {
      ...visitor,
      serialNo,
      date,
      time,
    };

    // Submit the form data
    onSubmit(visitorWithAutoFields);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null; // Don't render modal if isOpen is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-4">Add Visitor</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={visitor.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={visitor.phone}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={visitor.location}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={visitor.country}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label>Ref/Page</label>
            <input
              type="text"
              name="ref"
              value={visitor.ref}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisitor;
