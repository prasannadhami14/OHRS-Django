function locationSearchValidation(){
    var locationInput = document.getElementById("location");
    var locationError = document.getElementById("locationError");

    var isValid=true;
    var invalidField=null;
    
    if(locationInput.value.trim().length ==0){
        locationInput.classList.add("invalid-input");
        locationError.textContent = " Enter location first.......";
        isValid=false;
        invalidField=locationInput;
    }
    else{
        locationInput.classList.remove("invalid-input");
        locationError.textContent="";
    }
    if (isValid){
        document.getElementById("locationForm").submit();
    }
    else if(!invalidField)
    {
        invalidField.focus();
    }
}
