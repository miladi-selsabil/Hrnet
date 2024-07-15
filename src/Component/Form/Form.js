import React,  {useState} from "react";
import { states, departments } from "../../data/data";
import { useNavigate } from "react-router-dom";

import "../Form/Fom.css"
export default function Form(){
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  /*formData est un état qui contient les informations du formulaire avec des champs vides par défaut. */
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });
  /*handleAddFormChange est une fonction qui gère les changements dans les champs du formulaire. et met a jour formData */
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
  };


  /*soumission du formulaire */
  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      startDate: formData.startDate,
      department: formData.department,
      dateOfBirth: formData.dateOfBirth,
      street: formData.street,
      city: formData.city,
      zipCode: formData.zipCode,
    };

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);

    const form = e.target;
    form.reset();
  };

  return (
    <section className="formContent">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <button
        className="button"
        onClick={() => navigate("/employee-list")}
        aria-label="Navigate to employee list page"
      >
        Employee List
      </button>
      <h2>Create Employee</h2>
      <form className="form" onSubmit={handleAddFormSubmit}>
        <div className="formUpperPart">
          <label className="formLabel">
            First name
            <input
              className="formInput"
              type="text"
              name="firstname"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            Last name
            <input
              className="formInput"
              type="text"
              name="lastname"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            dateOfBirth
            <input
              className="formInput"
              type="date"
              name="dateOfBirth"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            Start Date
            <input
              className="formInput"
              type="date"
              name="startDate"
              onChange={handleAddFormChange}
              required
            />
          </label>
        </div>
        <div className="fieldset">
          <label className="formLabel">
            street
            <input
              className="formInput"
              type="text"
              name="street"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            city
            <input
              className="formInput"
              type="text"
              name="city"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            State
            <select
              className="formInput"
              name="state"
              onChange={handleAddFormChange}
              required
            >
              <option value=""></option>
              {states.map((state, index) => {
                return (
                  <option key={index} value={state.value}>
                    {state.label}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="formLabel">
            Zip Code
            <input
              className="formInput"
              type="text"
              name="zipCode"
              onChange={handleAddFormChange}
              required
            />
          </label>
        </div>
        <label className="formLabel">
          Departement
          <select
            className="formSelect"
            name="department"
            onChange={handleAddFormChange}
            required
          >
            <option value=""></option>
            {departments.map((department, index) => {
              return (
                <option key={index} value={department}>
                  {department}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit" className="btn-modal">
          Save
        </button>
      </form>
    </section>
  );
}