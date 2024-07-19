import React from "react";
import "../Table/Table.css";
import "../../Component/Form/Fom.css";
import DataTable from "react-data-table-component";
import { useGlobalState } from "../../state";
import { useNavigate } from "react-router-dom";
const FilterComponent = ({ filterText, setFilterText }) => (
  <input
    type="text"
    placeholder="Filter By Any Field"
    value={filterText}
    onChange={(e) => setFilterText(e.target.value)}
    className="search-input"
  />
);
const EmployeeTable = () => {
  const navigate = useNavigate();
  const [employees] = useGlobalState("employee");
  const [filterText, setFilterText] = React.useState("");
  const filteredItems = Array.isArray(employees)
    ? employees.filter(
        (item) =>
          (item.firstname &&
            item.firstname.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.lastname &&
            item.lastname.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.startDate &&
            item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.department &&
            item.department.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.dateOfBirth &&
            item.dateOfBirth
              .toLowerCase()
              .includes(filterText.toLowerCase())) ||
          (item.street &&
            item.street.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.city &&
            item.city.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.zipCode &&
            item.zipCode
              .toString()
              .toLowerCase()
              .includes(filterText.toLowerCase()))
      )
    : [];

  const columns = [
    {name: "First Name",selector: (value) => value.firstname,sortable: true},
    { name: "Last Name", selector: (value) => value.lastname, sortable: true},
    {name: "Start Date",selector: (value) => value.startDate, sortable: true},
    {name: "Department",selector: (value) => value.department,sortable: true},
    {name: "Date of Birth",selector: (value) => value.dateOfBirth, sortable: true},
    {name: "Street", selector: (value) => value.street, sortable: true },
    {name: "City", selector: (value) => value.city, sortable: true },
    {name: "State", selector: (value) => value.state, sortable: true },
    {name: "Zip Code", selector: (value) => value.zipCode, sortable: true },
  ];
  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <FilterComponent filterText={filterText} setFilterText={setFilterText} />
    );
  }, [filterText, setFilterText]);
  return (
    <main>
      <div className="employee-table">
        <DataTable
          title="Employee List"
          columns={columns}
          data={filteredItems}
          pagination
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
        <button
          className="button"
          onClick={() => navigate("/")}
          aria-label="Navigate to home page"
        >
          Home
        </button>
      </div>
    </main>
  );
};

export default EmployeeTable;
