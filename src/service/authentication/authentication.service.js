
// const [isAuthenticated, setIsAuthenticated] = useState(false);

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBaEx1-dayU3SdAwTECIRehp7UNjuc4YLY",
  authDomain: "mealsapp-92b89.firebaseapp.com",
  projectId: "mealsapp-92b89",
  storageBucket: "mealsapp-92b89.appspot.com",
  messagingSenderId: "729916421807",
  appId: "1:729916421807:web:d2fa1debcbb36153bec65a"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

// useEffect(() => {
//   setTimeout(() => {
//     signInWithEmailAndPassword(auth, "test@test.com", "123456")
//     .then((userCredential) => {
//       console.log(userCredential)
//       setIsAuthenticated(true);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//   }, 2000)
// }, [])


export const loginRequest = (email, password) => 
  signInWithEmailAndPassword(auth, email, password)
