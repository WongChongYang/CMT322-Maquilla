export const firebasePath = "https://www.gstatic.com/firebasejs/10.6.0/";
export const Auth = await import(firebasePath+"firebase-auth.js")
export const Firestore = await import(firebasePath+"firebase-firestore.js")
export const Storage =  await import(firebasePath+"firebase-storage.js")

const { initializeApp } = await import(firebasePath+"firebase-app.js")
const firebaseConfig = {
    apiKey: "AIzaSyBvnOt4ESHzlS1mhZ18y1A9GD3XMDkTEgE",
    authDomain: "cmt322-maquilla.firebaseapp.com",
    projectId: "cmt322-maquilla",
    storageBucket: "cmt322-maquilla.appspot.com",
    messagingSenderId: "681182625879",
    appId: "1:681182625879:web:87019d51f68e9b1f222312",
    measurementId: "G-HG69KLCJ5C"
};

const app = initializeApp(firebaseConfig);
export const auth = Auth.getAuth(app)
export const database = Firestore.getFirestore(app)
export const files = Storage.getStorage(app)
