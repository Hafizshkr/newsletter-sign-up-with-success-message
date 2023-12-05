const inputBox = document.getElementById("input-box");
const submitBtn = document.getElementById("email-subscription");
const errorMsg = document.querySelector(".error-message");
const subContainer = document.querySelector(".container");
const successContainer = document.querySelector(".success-container");



function fillTheBox(){
    if (inputBox.value === "" || inputBox === null){
        errorMsg.style.display = "block";
        return false; // return false if indicate they dont fill the email
    }
    return true; // return true if the email is fill
}

// verifying valid email

inputBox.addEventListener("input", function(){
    if(inputBox.validity.valid){
        errorMsg.style.display = "none";
    }
    
        

})

/* if they click the button, without fill the email or with invalid email,
it will force to fill with valid email. */

submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    if (!fillTheBox()) {
        return; // if they didnt fill the input, it will block to access the successpage
    }

    if (!inputBox.validity.valid){
        errorMsg.style.display = "block";
        return;
    }
    else {
        subContainer.style.display = "none";
        successContainer.style.display = "block";
        let email = inputBox.value;

        paragraph.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>.
        please open it and click the button inside to confirm your subscription.`
     }
     
})

