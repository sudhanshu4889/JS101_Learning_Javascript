//username password data store 

var database_user = "abc@123"
var database_pass = 1234;

// login here

var user = "abc@123";
var pass = 1234;

if(database_user == user){
  if(database_pass == pass){
    console.log("Login successfull");
  } else {
    console.log("incorrect password");
  }
  
} else{
  console.log("wrong input")
}
