
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDHSq7iZHwfwnQyehwWy9xqUfUppyjn4_Y",
  authDomain: "testproject-42fdf.firebaseapp.com",
  projectId: "testproject-42fdf",
  storageBucket: "testproject-42fdf.appspot.com",
  messagingSenderId: "26338117558",
  appId: "1:26338117558:web:758e7961316791ee6d2317",
  measurementId: "G-QTP4XV2KEV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;
