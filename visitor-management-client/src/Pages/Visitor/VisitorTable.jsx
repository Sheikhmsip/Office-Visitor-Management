import React from "react";

const VisitorTable = ({ visitors }) => {
  return (
    <div className="overflow-x-auto text-white">
      <table className="table table-xs">
        <thead className="text-black">
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Location</th>
            <th>Country</th>
            <th>Time/Date</th>
            <th>Ref/Page</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(visitor => (
            <tr key={visitor._id}>
              <td>{visitor.serialNo}</td>
              <td>{visitor.name}</td>
              <td>{visitor.phone}</td>
              <td>{visitor.location}</td>
              <td>{visitor.country}</td>
              <td>{visitor.time} / {visitor.date}</td>
              <td>{visitor.ref}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Location</th>
            <th>Country</th>
            <th>Time/Date</th>
            <th>Ref/Page</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default VisitorTable;
