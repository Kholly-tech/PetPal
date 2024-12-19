import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Outlet,RouterProvider, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';

// Protected Routes
const ProtectedRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const fetchUser = async() => {
    //
  }

  useEffect(() => {
    if(isAuthenticated) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, dispatch]);

  if(loading) return <h1>Loading</h1>;
  // if(!isAuthenticated) return <h1>SignIn</h1>;
  return <Outlet />;
}

// UnProtected Routes
const UnProtectedRoutes = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/home");
    }
  },[isAuthenticated, navigate]);
  return <Outlet />;
}

// Routes
const router = createBrowserRouter([
  {
    element: <UnProtectedRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/signin",
            element: <h1>About</h1>,
          },
        ]
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {path: '/profile', element: <h1>Profile</h1>},
          {path: '/*', element: <h1>Not Found</h1>},
        ]
      }
    ],
  }
]);const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes