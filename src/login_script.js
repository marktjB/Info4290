firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    
    //User display once logged in 
    if (user != null) {

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

// Allows user to press enter to to log in from the email field
document.querySelector("#email_field").addEventListener("keyup", event => {
  if(event.key !== "Enter") return; 
  document.querySelector("#login_button").click();
  event.preventDefault();
});

// Allows user to press enter to to log in from the password field
document.querySelector("#password_field").addEventListener("keyup", event => {
  if(event.key !== "Enter") return; 
  document.querySelector("#login_button").click();
  event.preventDefault();
});

//handles login of the user
function login() {
  //User email field
  var userEmail = document.getElementById("email_field").value;
  //User password 
  var userPass = document.getElementById("password_field").value;

  //firebase 
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();
}