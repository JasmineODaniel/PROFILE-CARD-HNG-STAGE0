// This file handles the real-time timestamp display on the profile page
// It updates the current time in milliseconds every second

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // This function updates the displayed time with the current timestamp
    function updateCurrentTime() {
        // Get reference to the time display element
        const timeElement = document.getElementById('currentTime');
        
        // Check if the element exists on the page
        // This is important because this script runs on all pages
        if (timeElement) {
            // Get the current time in milliseconds since January 1, 1970
            const currentTimeInMs = Date.now();
            
            // Update the text content with the current timestamp
            timeElement.textContent = currentTimeInMs;
            
            // Also update the datetime attribute for semantic HTML
            // This converts the timestamp to ISO format for accessibility
            const currentDate = new Date();
            timeElement.setAttribute('datetime', currentDate.toISOString());
        }
    }
    
    // Call the function immediately when the page loads
    updateCurrentTime();
    
    // Set up an interval to update the time every 1000 milliseconds (1 second)
    setInterval(updateCurrentTime, 1000);
    
});
