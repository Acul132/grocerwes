import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDca6FZnMHcWozVNc6zBceLxXkT4KG0Hx4",
    authDomain: "grocerwes.firebaseapp.com",
    projectId: "grocerwes",
    storageBucket: "grocerwes.appspot.com",
    messagingSenderId: "874487437075",
    appId: "1:874487437075:web:1547724ac7eb979d9eece6",
    measurementId: "G-5SR9QNYJVM"
};

const app = initializeApp(firebaseConfig);

export default app