import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databeseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

/*
const config = {
  apiKey: 'AIzaSyCrs2SuWW4zRBwVSVmWyX5kGyducn4uK4w',
  authDomain: 'nextjs-test-26a85.firebaseapp.com',
  projectId: 'nextjs-test-26a85',
  storageBucket: 'nextjs-test-26a85.appspot.com',
  messagingSenderId: '247474111777',
  appId: '1:247474111777:web:ffbdf8a221205de6782a60',
  measurementId: 'G-7BHG0RB476'
}
*/
// firebase.appsをチェックし、ロードされているかどうかを確認。
// なければinitializeAppを実行
/*
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
*/
export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}
