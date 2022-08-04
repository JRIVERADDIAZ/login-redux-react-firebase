
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'   


const firebaseConfig = {
    apiKey: "AIzaSyDYL5wG_2DUEGOK9vfQRmh7B7S7U1LRPE",
    authDomain: "react-reducer-app-75782.firebaseapp.com",
    projectId: "react-reducer-app-75782",
    storageBucket: "react-reducer-app-75782.appspot.com",
    messagingSenderId: "423461555217",
    appId: "1:423461555217:web:efe1103ea2d430158f35b0",
    measurementId: "G-JXL1YTY7F8"
}

export const app = initializeApp(firebaseConfig)

const db   = getFirestore()

const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

export { db, googleAuthProvider, githubAuthProvider }    