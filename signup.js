document.addEventListener('DOMContentLoaded', function () {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyB2TTSKp95iF4n1zeIUlrtF91TnrEkGXt0",
        authDomain: "chaos-860aa.firebaseapp.com",
        databaseURL: "https://chaos-860aa-default-rtdb.firebaseio.com",
        projectId: "chaos-860aa",
        storageBucket: "chaos-860aa.appspot.com",
        messagingSenderId: "364918903939",
        appId: "1:364918903939:web:3fe181f69fb0ff9c5c77b6",
        measurementId: "G-DQ3BMYH2LM"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Reference to the database
    var signupformdb = firebase.database().ref('signupinfo');

    // Add event listener to the form
    document.getElementById('signup-form').addEventListener("submit", signupform);

    // Function to handle form submission
    function signupform(e) {
        e.preventDefault();

        // Get values from input fields
        var name = getElementval('name');
        var email = getElementval('email');
        var phonenum = getElementval('phone');
        var setpass = getElementval('password');
        var conpass = getElementval('confirm-password');

        // Save the info to Firebase
        saveinfo(name, email, phonenum, setpass, conpass);

        // Show alert
        document.querySelector(".alert").style.display = "block";

        // Remove the alert after 3 seconds
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        // Reset the form
        document.getElementById("signup-form").reset();
    }

    // Function to save the form data to Firebase
    const saveinfo = (name, email, phonenum, setpass, conpass) => {
        var newsignupform = signupformdb.push();
        newsignupform.set({
            name: name,
            email: email,
            phone: phonenum,
            spass: setpass,
            cpass: conpass
        });
    }

    // Helper function to get input values by ID
    const getElementval = (id) => {
        return document.getElementById(id).value;
    }
});
