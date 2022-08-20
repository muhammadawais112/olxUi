

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCnSACZomSDKbHl5tI9OG1srAcdji097hU",
    authDomain: "olx3-768db.firebaseapp.com",
    projectId: "olx3-768db",
    storageBucket: "olx3-768db.appspot.com",
    messagingSenderId: "760596916461",
    appId: "1:760596916461:web:50371b9aa8ba6356b384e4"
};


const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export{firestore ,storage}