import React from 'react'
import ImageHolder from '../components/UI/ImageHolder'
import { useSelector } from 'react-redux'
import { setCurrentUser } from '../services/redux/slice/authSlice';

const Profile = () => {
    const {currentUser} = useSelector(state => state.auth);
  return (
    <div className='bg-bg min-h-screen justify-center items-center'>
        <div className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl mx-auto'>
            <div className='w-40 h-40 bg-primary rounded-full mx-auto'>
                <ImageHolder image={'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba'} />
                <h3 className='font-semibold text-2xl'>{currentUser.first_name} {currentUser.last_name}</h3>
                <h3 className='font-semibold text-sm mx-auto'>{`@${currentUser.username}`}</h3>
            </div>
        </div>
    </div>
  )
}

export default Profile
