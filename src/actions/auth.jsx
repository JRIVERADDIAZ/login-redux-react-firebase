import { types } from "../types/types"

import { startLoading, finishLoading } from "./uiLoading"

import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";
import { googleAuthProvider, githubAuthProvider } from "../firebase";


export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {
        dispatch(startLoading())
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password,)
            .then(({ user }) => {
                console.log(user)
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading())
            }

            )
            .catch((err) => {
                console.log(err.code, err)
            }
            )
    }
}

export const startRegisterWithEmailPassword = (email, password, name) => {
    const auth = getAuth()
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password,)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name, photoURL: null })
                dispatch(login(user.uid, user.displayName))
            }
            )
            .catch((err) => {
                console.log(err)
            }
            )
    }

}

export const startLoginWithGithub = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, githubAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(err => console.log(err))
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const login = (uid, displayName) => ({

    type: types.authLogin,
    payload: {
        uid,
        displayName
    }
}
)


export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth()
        await signOut(auth)
            .then(() => {
                dispatch(logout())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const logout = () => ({
    type: types.authLogout 
})
