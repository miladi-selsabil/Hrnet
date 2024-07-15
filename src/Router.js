import {createBrowserRouter} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home';
import EmployeeList from './Pages/EmployeeList';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path : "/employee-list",
        element: <EmployeeList />,
      },
    ],
  },
]);
export default router