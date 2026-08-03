function submitFeedback(){
// alert('Thank you for your valuable feedback');
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userInfo').style.display = 'block';


};
const name = document.getElementById('userName').value;
const age = document.getElementById('userAge').value;
const email = document.getElementById("userEmail").value;
const job = document.getElementById("userJob").value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;
const submitButton=document.getElementById('submitBtn');


// submitButton.onclick = submitFeedback;
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });

 const language = ["arabic","frensh","english","spanish"];
//  language.unshift("tamazirt","taryafit");
 language.splice(1,2,"japniss","ordo");

language.forEach(c=>{console.log(c)});
