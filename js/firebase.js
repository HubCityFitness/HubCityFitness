// Initialize Firebase
var config = {
    apiKey: "AIzaSyBj2s644OeWo3y1pE0n8S7c-UnZPxzugak",
    authDomain: "hubcityfitness1923.firebaseapp.com",
    databaseURL: "https://hubcityfitness1923.firebaseio.com",
    projectId: "hubcityfitness1923",
    storageBucket: "hubcityfitness1923.appspot.com",
    messagingSenderId: "1042551436799"
  };
  firebase.initializeApp(config);

// reference messages collection

var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name1');
    var email = getInputVal('email1');
    var subject = getInputVal('subject1');
    var message = getInputVal('message1');

    console.log(name);

    saveMessage(name, email, subject, message);

    
}

// Function to get form values

function getInputVal(id) {
    return document.getElementById(id).Value;
}

// save message to firebase

function saveMessage(name, email, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        email: email,
        message: message
    });
}