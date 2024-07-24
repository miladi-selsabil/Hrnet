import {createBrowserRouter} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home';
import EmployeeList from './Pages/EmployeeList';

/**
 * Router to render the 2 pages of the application
 *
 * @category Router
 * @component
 * @returns { React.Component } A React component
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
      {
        path : "employee-list",
        element: <EmployeeList />,
      },
    

]);
export default router