// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHprQpgxUU43cY2rjqH_e8foBpURguvCI',
  authDomain: 'instagram-clone-fd1de.firebaseapp.com',
  projectId: 'instagram-clone-fd1de',
  storageBucket: 'instagram-clone-fd1de.appspot.com',
  messagingSenderId: '631228743690',
  appId: '1:631228743690:web:fca0a7a1b18f45f0769ff3',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
