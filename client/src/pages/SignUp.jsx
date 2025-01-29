import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setCurrentUser } from '../services/redux/slice/authSlice'
import Cookies from 'js-cookie'
import { signup } from '../services/functions/authFunctions'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    setError('')
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if(formData.gender === '') {
      setError('Please select a gender')
      return
    }

    try {
      let userData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        gender: formData.gender,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }
      const response = await signup(userData);
      
      if (response.status === 'success') {
        navigate('/signin')
      } else {
        setError('Registration failed')
      }
    } catch (err) {
        setError(err.message ||'Something went wrong')
    }
  }

  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center p-4 md:px-0 bg-bg">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Create Account</h2>
          <p className="text-lightBlack mt-2">Join PetPal today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className='md:flex gap-4'>
              <div>
                <label htmlFor="firstName" className="block text-semiBlack font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-semiBlack font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
          </div>
          <div>
                <label htmlFor="firstName" className="block text-semiBlack font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

          <div>
            <label htmlFor="email" className="block text-semiBlack font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="block text-semiBlack font-medium">Gender</label>
            <div className="flex space-x-6">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <span className="ml-2 text-lightBlack">Male</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <span className="ml-2 text-lightBlack">Female</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <span className="ml-2 text-lightBlack">Other</span>
                </label>
            </div>
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

          <div>
            <label htmlFor="confirmPassword" className="block text-semiBlack font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-lightBlack">
              I agree to the{' '}
              <Link to="/terms" className="text-primary hover:text-opacity-80">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-lightBlack">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary hover:text-opacity-80">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp