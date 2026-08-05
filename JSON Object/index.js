// Define a JSON object representing information about a person
const personJSON = {
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "country": "USA"
  },
  "tags": ["JavaScript", "Node.js", "Web Development"],
  "isStudent": false,
  "workExperience": null
};
// Convert the JSON object to a string
console.log(personJSON);
const jsonString = JSON.stringify(personJSON);
// console.log(jsonString);
// console.log(typeof jsonString); 
// console.log(typeof personJSON); 
// console.log("Start");
// setTimeout(() => {
//     console.log("end");},2000);
// console.log("waiting 2 second ....");    
function simulateAsyncOperations(callback){
    setTimeout(function(){
        callback("Data from a simulated Asynchronous operation");

    },2000)
}
console.log("start of the program...");
simulateAsyncOperations(function(data){
    console.log("Data received : ",data);
    console.log("End of program");
});
console.log("Async operation in process...");