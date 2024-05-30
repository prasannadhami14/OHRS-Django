function register_Validate(){
    var fnameInput = document.getElementById("fname");
    var lnameInput = document.getElementById("lname");
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("Reg_email");
    var passwordInput = document.getElementById("password");
    var cpasswordInput = document.getElementById("cpassword");
    var fnameError = document.getElementById("fnameError");
    var lnameError = document.getElementById("lnameError");
    var usernameError = document.getElementById("usernameError");
    var Reg_emailError = document.getElementById("Reg_emailError");
    var passwordError = document.getElementById("passwordError");
    var cpasswordError = document.getElementById("cpasswordError");
    var isValid=true;
    var invalidField=null;
    // firstname Validation
    var regex = /^[a-zA-Z]+$/;
    if (fnameInput.value.trim().length < 3 || !regex.test(fnameInput.value.trim())) {
        fnameInput.classList.add("invalid-input");
         fnameError.textContent="*Firstname must be at least 3 characters and should not contain numbers";
            isValid= false;
            if (!invalidField) {
                invalidField = fnameInput;
            }
    } else {
        fnameInput.classList.remove("invalid-input");
        fnameError.textContent="";
    }
    // lastname validate
    if (lnameInput.value.trim().length < 3 || !regex.test(lnameInput.value.trim())) {
        lnameInput.classList.add("invalid-input");
         lnameError.textContent="*Lastname must be at least 3 characters and should not contain numbers";
            isValid= false;
            if (!invalidField) {
                invalidField = lnameInput;
            }
    } else {
        lnameInput.classList.remove("invalid-input");
        lnameError.textContent="";
    }
    // username validation
    if (usernameInput.value.trim().length < 4) {
        usernameInput.classList.add("invalid-input");
         usernameError.textContent="*Username must be at least 4 characters";
            isValid= false;
            if (!invalidField) {
                invalidField = lnameInput;
            }
    } else {
        usernameInput.classList.remove("invalid-input");
        usernameError.textContent="";
    }
    // validate email address
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!emailRegex.test(emailValue)) {
        emailInput.classList.add("invalid-input");
        Reg_emailError.textContent="Invalid email address format";
        isValid= false;
    } 
    else {
        emailInput.classList.remove("invalid-input");
        Reg_emailError.textContent="";
    }
    // password validation
    var password= passwordInput.value.trim();
     // Check if the password meets the minimum length requirement
     if (password){
            if (password.length < 8) {
            passwordInput.classList.add("invalid-input");
        passwordError.textContent="password must contain at least 8 characters"
                
                isValid= false;
            }

            // Check if the password contains at least one uppercase letter
            if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)
            || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password) ) {
            passwordInput.classList.add("invalid-input");
        passwordError.textContent="password must contain at least one uppercase,lowercase letter,digit,special character"
                isValid= false;
            }
            else {
                passwordInput.classList.remove("invalid-input");
                passwordError.textContent="";
            }
        }
        else {
            passwordInput.classList.add("invalid-input");
            passwordError.textContent="Enter password";
        }
//    validate if password and confirm password matches
    if (password!= cpasswordInput.value.trim()) {
        cpasswordInput.classList.add("invalid-input");
        cpasswordError.textContent="*Passwords do not match";
        isValid= false;
    }
    else {
        cpasswordInput.classList.remove("invalid-input");
        cpasswordError.textContent="";
    }

    if (isValid) {
        document.getElementById("registerForm").submit();

    }
    else if (invalidField) {
        invalidField.focus();
    }
}
// function togglePasswordVisibility() {
//     var passwordInput = document.getElementById("password");
//     var toggleButton = document.getElementById("togglePassword");

//     // Toggle the type attribute of the password input field
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         toggleButton.innerHTML = '<span class="la la-eye-slash"></span>'; // Change eye icon to crossed eye
//     } else {
//         passwordInput.type = "password";
//         toggleButton.innerHTML = '<span class="la la-eye"></span>'; // Change crossed eye icon to eye
//     }
// }
