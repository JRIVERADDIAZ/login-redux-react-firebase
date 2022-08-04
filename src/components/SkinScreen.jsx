import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, } from 'react-redux'

import DevPrueba from './DevPrueba'
import NoEncontrado from '../routes/NoEncontrado'
import Login from '../routes/Login'
import { login } from '../actions/auth'
import { PrivateRoute } from '../routes/PrivateRoute'

const SkinScreen = () => {

    const [cheking, setCheking] = useState( true )
    const [isLogged, setIsLogged] = useState( false )

    const dispatch = useDispatch()

    useEffect(() => {

        const auth = getAuth()
        onAuthStateChanged(auth, user => {
            if (user?.uid) {
                dispatch(
                    login(user.uid, user.displayName)
                )
                setIsLogged( true )
            } else {
                setIsLogged( false)
            }
            setCheking(false)
        })

    }, [dispatch, setCheking, setIsLogged ])


    if (cheking) {
        return (<h1>
            Loading-...
        </h1>)
    }

    return (
        <>
            <Routes>
                <Route 
                 index
                 element={<Login />} 
                />
                <Route 
                path='DevPrueba'
                element={
                <PrivateRoute  user={ isLogged }>
                    <DevPrueba /> {/* this route will be private & will be a new route wich allows to gain acces to tha app menu --> */}
                </PrivateRoute>} />
                <Route path='*' element={<NoEncontrado />} /> {/* this route will be public */}
            </Routes>
        </>
    )
}

export default SkinScreen