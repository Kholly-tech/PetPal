import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { forgetPassword } from '../../services/functions/authFunctions'

const Forget_Password = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Replace with actual API call
      const response = await forgetPassword({email});
      
      if (response.status === 'success') {
        setStatus({
          type: 'success',
          message: 'Password reset instructions sent to your email'
        })
      } else {
        setStatus({
          type: 'error',
          message: 'Email not found'
        })
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Something went wrong'
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Reset Password</h2>
          <p className="text-lightBlack mt-2">Enter your email to reset your password</p>
        </div>

        {status.message && (
          <div className={`${
            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          } border px-4 py-3 rounded mb-4`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-semiBlack font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-lightBlack">
            Remember your password?{' '}
            <Link to="/signin" className="text-primary hover:text-opacity-80">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Forget_Password