"use strict";

    function formValidation() {

        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/; // Expression for validating email
        var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // Expression for validating phone number
    
        
        var fname = document.registration.FName.value;
        var lname = document.registration.LName.value;
        var phone = document.registration.phone.value;;
        var email = document.registration.email.value;
        var property = document.registration.property.value;
        
    
        if (fname == "") {
            alert('Enter the first name!');
    
            document.registration.FName.focus();
    
            return false;
    
        }
    
        if (lname == "") {
    
            document.registration.LName.focus();
    
            alert('Enter the last name!');
    
            return false;
    
        }
    
        

        if (phone == "") {
    
            document.registration.phone.focus();
    
            alert('Enter the phone!');
    
            return false;
    
        }
    
        else if (!phoneRegex.test(phone)) {
    
            alert('Re-enter the valid phone in this format: [xxx-xxx-xxxx, xxx.xxx.xxxx, xxx xxx xxxx]');
    
            document.registration.phone.focus();
    
            return false;
    
        }
    
        if (email == "") {
    
            document.registration.email.focus();
    
            alert('Enter the email!');
    
            return false;
    
        }
    
        else if (!emailRegex.test(email)) {
    
            alert('Re-enter the valid email in this format: [abc@abc.com]');
    
            document.registration.email.focus();
    
            return false;
    
        }

        
        
        if (fname != '' && lname != '' && phone != '' && email != '' && property!= '') // condition for check mandatory all fields
    
        {
    
            alert('Thanks for answering this form, your answers were saved successfully.');
            var display = window.open("resultsForm.html", "pagewin");
        }
    
    }
    
function setUpPage(){
    formValidation();
}

window.addEventListener("load", setUpPage, false);