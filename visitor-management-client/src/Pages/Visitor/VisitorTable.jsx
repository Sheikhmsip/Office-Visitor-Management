import React, { useEffect, useState } from "react";
// import data from "../../assets/demo/visitos.json"

const VisitorTable = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch('https://visitor-management-tjb5o8r1s-sheikhmsips-projects.vercel.app/visitors')
    .then(res => res.json())
    .then(data => setVisitors(data))
    .catch(error => console.error('Error loading JSON:', error));
    
  }, []);
console.log(visitors)
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
          {visitors.map(visitors => (
                    <tr key={visitors.serial}>
                        <td>{visitors.serial}</td>
                        <td>{visitors.name}</td>
                        <td>{visitors.phone}</td>
                        <td>{visitors.location}</td>
                        <td>{visitors.country}</td>
                        <td>{visitors.time}</td>
                        <td>{visitors.ref}</td>
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
