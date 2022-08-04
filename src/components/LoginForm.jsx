import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { startLoginEmailPassword, startLogout } from '../actions/auth'

import { setError } from '../actions/ui';

import { useForm } from '../hooks/useForm';

const LoginForm = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formValues

    const loading = useSelector(state => state.ui.loading)

    console.log(loading)

    const handleLogin = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            console.log('form valid')
            dispatch(startLoginEmailPassword(email, password))
        }
    }

    const isFormValid = () => {

        const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!email.match(mailformat)) {
            dispatch(setError('Formato de email invalido'))
            return false
        }
        else if (password.length < 5) {
            dispatch(setError('Password deve ser mayor a 5 caracteres o iguales'))
            return false
        }
        return true
    }

    const handleLogOut = () => {
        dispatch(startLogout())
    }


    return (
        <>
            <h2> LOGIN </h2>
            <p> already registred? LOGIN HERE </p>
            <form onSubmit={handleLogin} >
                <div className='user-box'  >
                    <input
                        type="text"
                        placeholder="E-mail"
                        name='email'
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='user-box'  >
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        autoComplete='off'
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='login-buttons-container'>
                    <button
                        className="login-box-buttons"
                        disabled={loading}>
                        Login
                    </button>
                    <button className='login-box-buttons' onClick={handleLogOut} >
                        Logout
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginForm