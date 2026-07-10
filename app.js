// https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js
const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "ton-projet.firebaseapp.com",
  projectId: "ton-projet",
  storageBucket: "ton-projet.appspot.com",
  messagingSenderId: "ton-id",
  appId: "ton-app-id"
};

// Initialisation
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exemple pour envoyer un message dans inbox
async function envoyerMessage(texte) {
    await addDoc(collection(db, "messages"), {
        texte: texte,
        date: new Date()
    });
                            }
