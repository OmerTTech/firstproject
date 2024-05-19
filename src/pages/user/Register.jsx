import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiURLs from '../../api/api'
import toast from 'react-hot-toast'

const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
      })

      const registerHandler = async () => {
        try {
            await axios.post(`${apiURLs.userAPI.register}/`,user)
            toast.success('Register successfully')
            navigate('/auth/login')
        } catch (error) {
            toast.error('Error occured while register')
        }
      }

  return (
    <div className='register w-25 mx-auto mt-5'>
        <h4 className='text-center'>Create an account</h4>
        <input onChange={(e) => setUser({...user,name: e.target.value})} type="text" placeholder='Name...' className='form-control mb-4'/>
        <input onChange={(e) => setUser({...user,email: e.target.value})} type="email" placeholder='Email...' className='form-control mb-4'/>
        <input onChange={(e) => setUser({...user,avatar: e.target.value})} type="text" placeholder='Image' className='form-control mb-4'/>
        <input onChange={(e) => setUser({...user,password: e.target.value})} type="password" placeholder='Password...' className='form-control mb-4'/>
        <button onClick={registerHandler} className='btn btn-primary w-100 mb-3'>Create an account</button>
        <Link to='/auth/login'>Have an account? Go to login</Link>
    </div>
  )
}

export default Register