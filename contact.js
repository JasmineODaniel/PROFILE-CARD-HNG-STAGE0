// This file handles form validation for the contact form
// It validates all required fields and displays appropriate error messages

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the form and all input elements
    const contactForm = document.getElementById('contactForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Get references to all error message elements
    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorSubject = document.getElementById('errorSubject');
    const errorMessage = document.getElementById('errorMessage');
    
    // Get reference to the success message element
    const successMessage = document.getElementById('successMessage');
    
    // This function validates the full name field
    // Returns true if valid, false if invalid
    function validateName() {
        const name = fullNameInput.value.trim();
        
        // Check if name is empty
        if (name === '') {
            errorName.textContent = 'Full name is required';
            fullNameInput.classList.add('error');
            return false;
        }
        
        // Name is valid, clear any error messages
        errorName.textContent = '';
        fullNameInput.classList.remove('error');
        return true;
    }
    
    // This function validates the email field
    // Returns true if valid, false if invalid
    function validateEmail() {
        const email = emailInput.value.trim();
        
        // Check if email is empty
        if (email === '') {
            errorEmail.textContent = 'Email address is required';
            emailInput.classList.add('error');
            return false;
        }
        
        // Regular expression pattern to validate email format
        // This checks for: text@text.text format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check if email matches the valid pattern
        if (!emailPattern.test(email)) {
            errorEmail.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
            return false;
        }
        
        // Email is valid, clear any error messages
        errorEmail.textContent = '';
        emailInput.classList.remove('error');
        return true;
    }
    
    // This function validates the subject field
    // Returns true if valid, false if invalid
    function validateSubject() {
        const subject = subjectInput.value.trim();
        
        // Check if subject is empty
        if (subject === '') {
            errorSubject.textContent = 'Subject is required';
            subjectInput.classList.add('error');
            return false;
        }
        
        // Subject is valid, clear any error messages
        errorSubject.textContent = '';
        subjectInput.classList.remove('error');
        return true;
    }
    
    // This function validates the message field
    // Returns true if valid, false if invalid
    function validateMessage() {
        const message = messageInput.value.trim();
        
        // Check if message is empty
        if (message === '') {
            errorMessage.textContent = 'Message is required';
            messageInput.classList.add('error');
            return false;
        }
        
        // Check if message has at least 10 characters
        if (message.length < 10) {
            errorMessage.textContent = 'Message must be at least 10 characters long';
            messageInput.classList.add('error');
            return false;
        }
        
        // Message is valid, clear any error messages
        errorMessage.textContent = '';
        messageInput.classList.remove('error');
        return true;
    }
    
    // Add real-time validation on blur (when user leaves the field)
    // This provides immediate feedback to the user
    fullNameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    // Add real-time validation on input (as user types)
    // This clears error messages as soon as the user starts fixing them
    fullNameInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validateName();
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validateEmail();
        }
    });
    
    subjectInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validateSubject();
        }
    });
    
    messageInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validateMessage();
        }
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Hide the success message if it was showing from a previous submission
        successMessage.classList.add('hidden');
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        // Check if all fields are valid
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // All validation passed - show success message
            successMessage.classList.remove('hidden');
            
            // Scroll to the success message so user can see it
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Reset the form fields
            contactForm.reset();
            
           // Optional: Fade out before hiding after 5 seconds
setTimeout(function() {
    successMessage.style.transition = 'opacity 1s ease';
    successMessage.style.opacity = '0';
    setTimeout(function() {
        successMessage.classList.add('hidden');
        successMessage.style.opacity = ''; // reset for next time
    }, 1000);
}, 5000);

        } else {
            // This helps with accessibility and user experience
            if (!isNameValid) {
                fullNameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else if (!isSubjectValid) {
                subjectInput.focus();
            } else if (!isMessageValid) {
                messageInput.focus();
            }
        }
    });
    
});
