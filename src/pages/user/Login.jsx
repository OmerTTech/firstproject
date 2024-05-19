import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiURLs from '../../api/api'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const loginHandler = async () => {
    try {
        const response = await axios.post(`${apiURLs.userAPI.login}/`,user)
        toast.success('Login successfully')
        const token = response.data.access_token
        localStorage.setItem('token',token)
        navigate('/')
    } catch (error) {
        toast.error('Error occured while login')
    }
  }


  return (
    <div className='register w-25 mx-auto mt-5'>
        <h4 className='text-center'>Login</h4>
        <input onChange={(e) => setUser({...user, email: e.target.value})} type="email" placeholder='Email...' className='form-control mb-4'/>
        <input onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder='Password...' className='form-control mb-4'/>
        <button onClick={loginHandler} className='btn btn-primary w-100 mb-3'>Login</button>
        <Link to='/auth/register'>Need an account? Sign up!</Link>
    </div>
  )
}

export default Login