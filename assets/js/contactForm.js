import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCRfOufaIBlEuf_nfSz5TahZaeqGhEM_40",
    authDomain: "my-first-project-81bc0.firebaseapp.com",
    projectId: "my-first-project-81bc0",
    storageBucket: "my-first-project-81bc0.appspot.com",
    messagingSenderId: "491712000685",
    appId: "1:491712000685:web:fe999da3ee5c1d7afc0c24",
    measurementId: "G-9XDJE85X3V"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Add a new document with a generated ID to the 'contacts' collection
    console.log(name, email, message)
    addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // Optionally, you can display a success message or redirect the user
            document.getElementById('msgSubmit').innerText = "Form submitted successfully!";
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            // Display an error message to the user
            document.getElementById('msgSubmit').innerText = "Error submitting form. Please try again.";
        });
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', submitForm);
