import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = { /* TON CODE CONFIG ICI */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Envoyer un message
export async function envoyerMessage(texte) {
    await addDoc(collection(db, "messages"), {
        texte: texte,
        date: serverTimestamp(),
        expediteur: "Roméo" 
    });
}

// Écouter les messages en temps réel (pour l'affichage)
export function ecouterMessages(callback) {
    const q = query(collection(db, "messages"), orderBy("date", "asc"));
    onSnapshot(q, (snapshot) => {
        const messages = snapshot.docs.map(doc => doc.data());
        callback(messages);
    });
}
