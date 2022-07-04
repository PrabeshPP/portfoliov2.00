
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



type Config={
    apiKey:string,
    authDomain:string,
    databaseURL:string,
    projectId:string,
    storageBucket:string,
    messagingSenderId:string,
    appId:string,
    measurementId:string
}

const firebaseConfig:Config = {
  apiKey: "AIzaSyDAlz4EZxWYjXbzMV0-0Ub9149JZlSPDZ0",
  authDomain: "portfolio-139cb.firebaseapp.com",
  databaseURL: "https://portfolio-139cb-default-rtdb.firebaseio.com",
  projectId: "portfolio-139cb",
  storageBucket: "portfolio-139cb.appspot.com",
  messagingSenderId: "505223668440",
  appId: "1:505223668440:web:fc6ff4293ce506fa87adad",
  measurementId: "G-8EEGV1V26G"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};
