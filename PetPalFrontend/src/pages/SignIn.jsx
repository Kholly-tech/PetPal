import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setCurrentUser } from '../services/redux/slice/authSlice'
import { signin } from '../services/functions/authFunctions'

const SignIn = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your authentication logic here
    // For demo purposes:
    try {
      const userData = {
        identifier: formData.identifier,
        password: formData.password,
      }
      const response = await signin(userData);
      console.log(response)
      
      if (response.status === 'success') {
        dispatch(setIsAuthenticated(true))
        dispatch(setCurrentUser(data.user))
        // navigate('/signin')
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      setError(err.message ||'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-0 bg-bg">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Welcome Back!</h2>
          <p className="text-lightBlack mt-2">Sign in to continue to PetPal</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="identifier" className="block text-semiBlack font-medium mb-2">
              Email Address / Username
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={formData.identifier}
              placeholder='Email Address or Username'
              onChange={handleChange}
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-semiBlack font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-lightBlack">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-primary hover:text-opacity-80">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-lightBlack">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary hover:text-opacity-80">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn