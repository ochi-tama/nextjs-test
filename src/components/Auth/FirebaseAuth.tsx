import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import initFirebase from '../../utils/firebase/initFirebase'
//import initFirebase from '../../utils/firebase/initFirebase'

// Init the Firebase app.
initFirebase()

const firebaseAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'redirect', // ログインのポップアップ画面を出す
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    }
  ],
  signInSuccessUrl: '/', // サインイン後のリダイレクト先
  credentialHelper: 'none',
  callbacks: {
    /*
    signInSuccessWithAutrResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user)
      setUserCookie(userData)
    }
    */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      return true
    }
  }
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
}

const FirebaseAuth = () => {
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  )
}

export default FirebaseAuth
