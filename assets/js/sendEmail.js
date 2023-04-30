function sendMail(contactForm) {
    emailjs.send("service_4c8771l","JohnPaul",{
"from_name": contactForm.name.value,
"from_email": contactForm.emailaddress.value,
"project_request": contactForm.projectsummary.value
})
.then(
    function(response){
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    });

return false;    
}