
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
    
    fullNameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
   
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
        
   
       successMessage.classList.add('hidden');

        // Validate all fields 
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        // Check if all fields are valid
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
           
            successMessage.classList.remove('hidden');
            
           
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            

            contactForm.reset();
            
         
setTimeout(function() {
    successMessage.style.transition = 'opacity 1s ease';
    successMessage.style.opacity = '0';
    setTimeout(function() {''
        successMessage.classList.add('hidden');
        successMessage.style.opacity = ''; // reset for next time
    }, 1000);
}, 5000);

        } else {
           
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
