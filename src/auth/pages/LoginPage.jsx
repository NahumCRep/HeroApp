import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  const handlelogin = () => {
    navigate('/', {replace: true})
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