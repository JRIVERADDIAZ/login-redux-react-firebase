import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startRegisterWithEmailPassword } from '../actions/auth';

import { setError } from '../actions/ui';

import Error from '../errorpopUps/Error';

import { useForm } from '../hooks/useForm';

const RegisterForm = () => {

    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange, reset] = useForm({

        email: '',
        usuario: '',
        password: '',
        password2: '',

    })

    const { email, usuario, password, password2 } = formValues

    const handleLogin = (e) => {
        e.preventDefault()


        if (isFormValid()) {
            console.log('formulario valido', email, usuario, password, password2)
            dispatch(startRegisterWithEmailPassword(email, password, usuario))
            setTimeout(() => {
                reset()
            }, 1000)
        }

    }

    const isFormValid = () => {

        const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (usuario.trim().length === 0) {
            dispatch(setError('El usario deve ser mayor a 0 caracteres'))
            return false
        } else if (!email.match(mailformat)) {
            dispatch(setError('Formato de email invalido'))
            return false
        } else if (!password.length < 5 && password !== password2) {
            dispatch(setError('Password deve ser mayor a 5 caracteres o iguales'))
            return false
        }

        return true
    }

    return (
        <>

            {
                msgError &&
                <Error />
            }

            <h2> REGISTER  </h2>
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
                        type="text"
                        placeholder="User"
                        name='usuario'
                        autoComplete='off'
                        value={usuario}
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
                <div className='user-box'  >
                    <input
                        type="password"
                        placeholder="Password Confirmation"
                        autoComplete='off'
                        name='password2'
                        value={password2}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='login-buttons-container' >
                    <button className='login-box-buttons' > Sign In  </button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm