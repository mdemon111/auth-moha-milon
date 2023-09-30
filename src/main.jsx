import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componetes/Root.jsx';
import Home from './componetes/Home.jsx';
import Login from './componetes/Login.jsx';
import Register from './componetes/Register.jsx';
import AuthProviter from './providers/AuthProviter';
import Orders from './componetes/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './componetes/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviter>
      <RouterProvider router={router} />
    </AuthProviter>
  </React.StrictMode>,
)
