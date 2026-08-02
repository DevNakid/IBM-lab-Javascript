let userRole = "admin";
let accessLevel;

if(userRole==="admin"){
    accessLevel = "Full acces granted";
}else if(userRole==="manager"){
    accessLevel="Limited access granted"
}else {
    accessLevel = "No access granted";
}
let isLoggedIn = true;
let userMessage;
// console.log("access level : ",accessLevel);
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
// console.log("User message:",userMessage);
let userType = "subscriber";
let userCategory;
switch(userType){
    case "admin" :
        userCategory = "Administrator";
        break;
    case "Manager" :
        userCategory = "Manager";
        break;
    case "subscriber" : 
    userCategory = "Subscriber"
    break;
    default:
        userCategory = "Unknown"   
}
// console.log("User category : ",userCategory);
let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Statue : ",authenticationStatus);
const add = (a,b) => a+b;
document.getElementById("result").innerHTML = add(5,3);