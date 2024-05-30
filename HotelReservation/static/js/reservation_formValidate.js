function validateForm() {
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementsByName("email")[0];
    var phoneInput = document.getElementsByName("phone")[0];
    var adultCountInput = document.getElementsByName("adult_count")[0];
    var childCountInput = document.getElementsByName("child_count")[0];
    var AdultCountError = document.getElementById("AdultCountError");
    var ChildCountError = document.getElementById("ChildCountError");
    var phoneError = document.getElementById("phoneError");
    var nameError = document.getElementById("nameError");
    var dateError = document.getElementById("dateError");
    var dateRangeInput = document.getElementById("daterange");

    var isValid = true;
    var invalidField = null; // To store the first invalid field

    // Validate name
    if (nameInput.value.trim() === "") {
        nameInput.classList.add("invalid-input");
        nameError.textContent = "Name is required.";
        isValid = false;
        if (!invalidField) {
            invalidField = nameInput;
        }
    } else {
        nameInput.classList.remove("invalid-input");
        nameError.textContent = "";
    }
    // Validate phone number
    var regex = /^(\+977\s)?\d{10}$/;
    if (!regex.test(phoneInput.value)) {
        phoneInput.classList.add("invalid-input");
        phoneError.textContent = "Please enter a valid phone number with country code.";
        isValid = false;
    } else if (/[a-zA-Z]/.test(phoneInput.value)) { // Check for alphabetic characters
        phoneInput.classList.add("invalid-input");
        phoneError.textContent = "Please enter only numbers.";
        isValid = false;
    } else if (phoneInput.value.length !== 10) {
        // Nepali phone numbers should have exactly 10 digits
        phoneError.textContent = "Phone number should contain only 10 digits.";
        phoneInput.classList.add("invalid-input");
        isValid = false;
        if (!invalidField) {
            invalidField = phoneInput;
        }
    } else {
        phoneError.textContent = "";
        phoneInput.classList.remove("invalid-input");
    }

    var dateRangeInput = document.getElementById("daterange");
    var dateError = document.getElementById("dateError");

    var dateValues = dateRangeInput.value.split("-");
    var checkinDate = dateValues[0];
    var checkoutDate = dateValues[1];

    if (checkinDate === checkoutDate) {
        dateRangeInput.classList.add("invalid-input");
        dateError.textContent =
            "Check-in and check-out dates cannot be the same.";
        isValid = false;
        if (!invalidField) {
            invalidField = dateRangeInput;
        }
        // return false; // Dates are invalid
    } else {
        dateRangeInput.classList.remove("invalid-input");
        dateError.textContent = "";
        // return true; // Dates are valid
    }

    // Validate adult count
    if (adultCountInput.value === "None") {
        adultCountInput.classList.add("invalid-input");
        AdultCountError.textContent = "Please select the number of Adult.";

        isValid = false;
        if (!invalidField) {
            invalidField = adultCountInput;
        }
    } else {
        adultCountInput.classList.remove("invalid-input");
        AdultCountError.textContent = "";
    }
    // Validate child count
    if (childCountInput.value === "None") {
        childCountInput.classList.add("invalid-input");
        ChildCountError.textContent =
            "Please select the number of children.";
        isValid = false;
        if (!invalidField) {
            invalidField = childCountInput;
        }
    } else {
        childCountInput.classList.remove("invalid-input");
        ChildCountError.textContent = "";
    }
    // validate if both adult and child count is 0
    if (adultCountInput.value === "0" && childCountInput.value==="0") {
        alert("Please select the number of adults and children.");
        childCountInput.classList.add("invalid-input");
        adultCountInput.classList.add("invalid-input");

        isValid = false;
    }


    //   // Calculate number of nights
    //   var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    //   var numberOfNights = Math.round(
    //     Math.abs((checkoutDate - checkinDate) / oneDay)
    //   );

    //   // Get price per night
    //   var pricePerNight = parseFloat(
    //     document.getElementById("totalPrice").value
    //   );

    //   // Calculate total price
    //   totalPrice = numberOfNights * pricePerNight;

    //   // Display total price
    //   // totalPriceInput=document.getElementById("totalPrice");
    //   totalPriceInput.value = totalPrice.toFixed(2);
    // Assuming the price is in decimal format
    if (isValid) {
        document.getElementById("reservationForm").submit();
    } else if (invalidField) {
        invalidField.focus();
    }
}