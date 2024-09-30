import React, { useState } from "react";
import "./AddVisitor.css"; // Optional: CSS to style your modal

const AddVisitor = ({ isOpen, onClose, onSubmit }) => {
  const [visitor, setVisitor] = useState({
    serialNo: "",
    name: "",
    phone: "",
    location: "",
    country: "",
    refPage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(visitor);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null; // Don't render modal if isOpen is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-4">Add Visitor</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Serial No</label>
            <input
              type="text"
              name="serialNo"
              value={visitor.serialNo}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
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
              name="refPage"
              value={visitor.refPage}
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
