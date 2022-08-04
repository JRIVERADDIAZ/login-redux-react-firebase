import React from 'react'

import '../styles/formStyles.css'

import LoginBar from '../components/LoginBar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {

  

  return (
    <>
      <div className='login-box'  >
        <LoginForm />
        <RegisterForm />
        <LoginBar />
      </div>
    </>
  )
}

export default Login