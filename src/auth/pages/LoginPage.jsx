import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  
  const navigate = useNavigate()
  
  const handlelogin = () => {
    const lastPage = localStorage.getItem('lastPage') || '/'
    login('Nahum Casco')
    navigate(lastPage, {replace: true})
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handlelogin }
      >
        login
      </button>
    </div>
  )
}

export default LoginPage