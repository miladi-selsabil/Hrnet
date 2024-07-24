import { createGlobalState } from "react-hooks-global-state";
import { employeesListInit } from "../data/data";

// Initialize the global state with an initial list of employees
const initialState = {
  employee: employeesListInit,
};

// Create a hook to access and update the global state
const { useGlobalState } = createGlobalState(initialState);

// Export the hook for use in other parts of the application
export { useGlobalState };
