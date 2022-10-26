import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyC_wy5Zmh_0G7CaB5w2hYLe1wjg8lbSq1w",
  authDomain: "nerd3d-3bec4.firebaseapp.com",
  projectId: "nerd3d-3bec4",
  storageBucket: "nerd3d-3bec4.appspot.com",
  messagingSenderId: "35232340073",
  appId: "1:35232340073:web:2575b10dc70c062cd8aaf8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

