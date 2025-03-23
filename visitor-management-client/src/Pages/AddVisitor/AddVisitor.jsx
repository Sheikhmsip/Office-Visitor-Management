import React, { useState } from "react";
import "./AddVisitor.css"; // Optional CSS file

const AddVisitor = ({ isOpen, onClose, onSubmit }) => {
  const [visitor, setVisitor] = useState({
    name: "",
    phone: "",
    location: "",
    country: "",
    ref: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitor((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-generate date & time
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const visitorWithAutoFields = { ...visitor, date, time };

    onSubmit(visitorWithAutoFields);
    setVisitor({ name: "", phone: "", location: "", country: "", ref: "" }); // Reset form
  };

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-4">Add Visitor</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={visitor.name} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name="phone" value={visitor.phone} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label>Location</label>
            <input type="text" name="location" value={visitor.location} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label>Country</label>
            <input type="text" name="country" value={visitor.country} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label>Ref/Page</label>
            <input type="text" name="ref" value={visitor.ref} onChange={handleChange} className="input-field" required />
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
