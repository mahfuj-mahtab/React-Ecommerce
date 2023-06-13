import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import See_Details from './components/Homes/See_Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/product/:id",
    element: <See_Details/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
