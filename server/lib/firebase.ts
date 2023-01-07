import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyCS5e8XCoYsbuGCAPykmQVml_7dh6RpCeA",

  authDomain: "portfolio-4e515.firebaseapp.com",

  projectId: "portfolio-4e515",

  storageBucket: "portfolio-4e515.appspot.com",

  messagingSenderId: "912324224194",

  appId: "1:912324224194:web:f837c07851942aaca4075b",

  measurementId: "G-V64ZGPVVHV"

};

const app = initializeApp(firebaseConfig);

const fireStoreDb = getFirestore(app);

// const analytics = getAnalytics(app);

export{
    fireStoreDb
}