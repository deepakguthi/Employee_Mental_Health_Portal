// Function to validate the concern form
function validateForm() {
    var name = document.getElementById('employee_name').value;
    var concern = document.getElementById('concern').value;

    if (name.trim() === '' || concern.trim() === '') {
        alert('Please fill in all the fields.');
        return false;
    }
    
    return true;
    
}



// Function to display a confirmation message after submitting the concern form
//function showConfirmation() {
//   alert('Your concern has been submitted successfully. We will get back to you soon. Thank you!');
//}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    // Retrieve form data
    var form = document.getElementById('concernForm');
    var formData = new FormData(form);
    
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', 'concerns/', true);
    
    // Set up the callback function
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Display the confirmation message
                alert('Your concern has been submitted successfully. We will get back to you soon. Thank you!');
                // Clear the form fields
                form.reset();
            } else {
                // Handle the error case
                alert('An error occurred while submitting the form. Please try again.');
            }
        }
    };

    // Send the request with the form data
    xhr.send(formData);

  
}

