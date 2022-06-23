
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB5gkbbbAPb1jSB-sLUrzgusFtw69oRq_w",
  authDomain: "my-profile-f266b.firebaseapp.com",
  projectId: "my-profile-f266b",
  storageBucket: "my-profile-f266b.appspot.com",
  messagingSenderId: "450164970191",
  
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    
    var email = getInputVal('email');
    var phone = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject: subject,
      message:message
    });
  }
  