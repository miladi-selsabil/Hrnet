import React, { useState, } from "react";
import DataTable from "react-data-table-component";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);



   const columns = [
     { name: "First Name", selector: "firstname", sortable: true },
     { name: "Last Name", selector: "lastname", sortable: true },
     { name: "Start Date", selector: "startDate", sortable: true },
     { name: "Department", selector: "department", sortable: true },
     { name: "Date of Birth", selector: "dateOfBirth", sortable: true },
     { name: "Street", selector: "street", sortable: true },
     { name: "City", selector: "city", sortable: true },
     { name: "State", selector: "state", sortable: true },
     { name: "Zip Code", selector: "zipCode", sortable: true },
   ];
  return (
    <div className="employee-table">
      <DataTable
        title="Employee List"
        columns={columns}
        data={employees}
        pagination
      />
    </div>
  );
};

export default EmployeeTable;
