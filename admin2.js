// Get form elements
var loginForm = document.getElementById('loginForm');
var usernameInput = document.getElementById('username');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  var username = usernameInput.value;
  
  // Perform login validation
  if (username === 'mushrum' || 'mushroom' || 'Mushroom' || 'Mushrum' || 'MUSHROOM' || 'MUSHRUM') {
    // Successful login
    alert('Login successful!');
     window.location.href ='https://almas-alt.github.io/mushrum/'
    // Add your admin page logic here or redirect to the admin page
  } else {
    // Failed login
    alert('ENTER YOUR SPECIAL NAME WHO CALLS YOU');
  }
  
  // Clear the form inputs
  usernameInput.value = '';
 
});