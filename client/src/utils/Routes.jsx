import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Outlet,RouterProvider, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import NotFound from '../components/NotFound';
import ComingSoon from '../components/ComingSoon';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import { getUser } from '../services/functions/userFunction';
import { setCurrentUser } from '../services/redux/slice/authSlice';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forget_Password from '../components/auth/Forget-Password';
import Profile from '../pages/Profile';
import {FullScreenLoading} from '../components/UI/Loadings';
import Adoption from '../pages/Adoption';

// Protected Routes
const ProtectedRoutes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const fetchUser = async() => {
    try {
      setLoading(true);
      const res = await getUser();
      // console.log('Res: ',res);
      dispatch(setCurrentUser(res.data));
    } catch (error) {
      setError('Error connecting to the server');
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if(isAuthenticated) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, dispatch]);

  if(loading) return <FullScreenLoading />;
  if(!isAuthenticated) return <SignIn />;
  if(currentUser){
    switch (currentUser.isVerified) {
      case true:
        return <Outlet />;
        
    
      default:
        return <Outlet />;
        return <h1>Verify</h1>
    }
  }
  // if(!isAuthenticated) return <h1>SignIn</h1>;
  // return <Outlet />;
}

// UnProtected Routes
const UnProtectedRoutes = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/");
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
          {path: '/', element: <Home />},
          {
            path: "/signin",
            element: <SignIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/forgot-password",
            element: <Forget_Password />,
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
          {path: '/profile', element: <Profile />},
          {path: '/adoption', element: <Adoption />},
          {path: '/blog', element: <Blog />},
          {path: '/gallery', element: <Gallery />},
          {path: '/about', element: <ComingSoon />},
          {path: '/contact', element: <Contact />},
          {path: '/*', element: <NotFound />},
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