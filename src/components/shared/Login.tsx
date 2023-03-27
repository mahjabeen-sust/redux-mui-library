import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate, Navigate } from 'react-router-dom'

import { fetchUserThunk } from '../../features/login/userSlice'
import { login } from '../../features/login/userSlice'
import type { RootState, AppDispatch } from '../../store'
import { isUser } from '../../features/login/userService'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const admin = 'def@gmail.com'
  const navigate = useNavigate()
  const { handleSubmit } = useForm()

  const dispatch = useDispatch<AppDispatch>()
  const payload = isUser({ email, password })
  //console.log('payload from userService', payload)

  useEffect(() => {
    dispatch(fetchUserThunk())
  }, [navigate])

  const logUser = () => {
    //alert('loguser')
    if (payload) {
      dispatch(login(payload))
      if (payload.isAdmin === true) {
        navigate('/adminDashboard')
      } else {
        navigate('/dashboard')
      }
    } else {
      alert('wrong credentials')
    }
  }

  return (
    <form action="" className="login" onSubmit={handleSubmit(logUser)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  )
}

export default Login
