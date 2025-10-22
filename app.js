
document.addEventListener('DOMContentLoaded', function() {
    
   
    function updateCurrentTime() {
       
        const timeElement = document.getElementById('currentTime');
        
      
        if (timeElement) {
            // Get the current time in milliseconds since January 1, 1970
            const currentTimeInMs = Date.now();
            
            // Update the text content with the current timestamp
            timeElement.textContent = currentTimeInMs;
            
         
            const currentDate = new Date();
            timeElement.setAttribute('datetime', currentDate.toISOString());
        }
    }
    
    // Call the function immediately when the page loads
    updateCurrentTime();
    

    setInterval(updateCurrentTime, 1000);
    
});
