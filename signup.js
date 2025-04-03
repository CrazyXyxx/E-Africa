
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCEZWYqp4ATBEMCaFBo7ZvcAFoGq8x6w_8",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
});

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        alert("Account created successfully!");
        window.location.href = "index.html"; // Redirect to home page or login page
    } catch (error) {
        alert(error.message);
    }
});
`