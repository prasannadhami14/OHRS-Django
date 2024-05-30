function loginValidation(){
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var isValid=true;
    var invalidField=null;
    
    if(username == "" ){
        usernameInput.classList.add("invalid-input");
        usernameError.textContent="Please enter your username";
        isValid=false;
        invalidField=usernameInput;
    }
    else{
        usernameInput.classList.remove("invalid-input");
        usernameError.textContent="";
    }
     
    if(password == "" ){
        passwordInput.classList.add("invalid-input");
        passwordError.textContent="Please enter your password";
        isValid=false;
        invalidField=passwordInput;
    }
    else{
        passwordInput.classList.remove("invalid-input");
        passwordError.textContent="";
    }
    if (isValid){
        document.getElementById("loginform").submit();
    }
    else if(!invalidField)
    {
        invalidField.focus();
    }
}
// Function to handle key press events
document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        loginValidation();
        document.getElementById("loginBtn").click();
    }
});

document.getElementById("loginBtn").addEventListener("click", function() {
    loginValidation();
});
