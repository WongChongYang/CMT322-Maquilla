import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyBvnOt4ESHzlS1mhZ18y1A9GD3XMDkTEgE",
    authDomain: "cmt322-maquilla.firebaseapp.com",
    projectId: "cmt322-maquilla",
    storageBucket: "cmt322-maquilla.appspot.com",
    messagingSenderId: "681182625879",
    appId: "1:681182625879:web:87019d51f68e9b1f222312",
    measurementId: "G-HG69KLCJ5C"
};

initializeApp(firebaseConfig);

export const auth = getAuth()
export const database = getFirestore()
export const storage = getStorage()