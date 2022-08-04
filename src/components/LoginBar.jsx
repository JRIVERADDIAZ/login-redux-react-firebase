import React from 'react'

import { useDispatch } from 'react-redux'
import { IconContext } from 'react-icons';

import { AiFillChrome } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';

import '../styles/login-bar-icons.css'
import { startGoogleLogin, startLoginWithGithub } from '../actions/auth'

const LoginBar = () => {

    const dispatch = useDispatch()

    const handleLoginGoogle = () => {
        dispatch(startGoogleLogin())
    }

    const handleLoginGithub = () => {
        dispatch(startLoginWithGithub())
    }

    return (
        <>
            <IconContext.Provider value={{ color: '1768ac', size: '2em', }}>
                <div className='social-media-container' >
                    <div
                        className='social-media-icons' >
                        <AiFillChrome
                            onClick={handleLoginGoogle}
                        />
                    </div>
                    <div
                        className='social-media-icons' >
                        <BsFacebook
                            onClick={handleLoginGoogle}
                        />
                    </div>
                    <div
                        className='social-media-icons' >
                        <BsGithub
                            onClick={handleLoginGithub}
                        />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default LoginBar