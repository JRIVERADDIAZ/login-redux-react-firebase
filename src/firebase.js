
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'   


const firebaseConfig = {

}

export const app = initializeApp(firebaseConfig)

const db   = getFirestore()

const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

export { db, googleAuthProvider, githubAuthProvider }    
