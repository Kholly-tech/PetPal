import React from 'react'
import { createBrowserRouter, Outlet,RouterProvider, useNavigate } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes