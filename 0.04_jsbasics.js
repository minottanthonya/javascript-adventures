// Create an object literal called user. Inside this object create a username and password parameter. 
// Also, create a function call isLoggedIn that console logs or returns logged in.

var user = {
  username : "",
  password : "",

  isLoggedIn : function(){
    console.log(this.username + " is logged in.");
  }
}

var ted = Object.create(user);
ted.username = "TedisDead";

ted.isLoggedIn();