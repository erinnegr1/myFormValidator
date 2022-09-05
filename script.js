const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//////////// Functions


//#### show input error message
// error class to form control in CSS to reference
function showError(input, message) {
  const formControl = input.parentElement; // this allows us to find the direct parent element
  formControl.className = 'form-control error'; // we want to add an error  class to form-control to access the CSS styling
  const small = formControl.querySelector('small') // we want the small in the form control
  small.innerText = message;
}

//#### show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';  // we want to add a success class in form control to access the CSS styling
    
}

//#### Check email is valid
// javascript email regex --> stack overflow
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());  
    
    
    
    /*if (re.test(input.value.trim())) {
          showSuccess(input);
        } else {
          showError(input, 'Email is not valid');
        } */
}


//#### Check required fields
// going to loop through the array of user inputs
//high order array methods can attach to arrays for different things (for Each is easier than a for loop)
// grab each input & trim takes out white space
// check if the field is empty and create a template ES6 string, which allows us to put variable
// we can grab the id of each class to reference within the message so it is dynamic

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
    //console.log(input.value);
    if(input.value.trim()=== ''){
    // console.log(input.id)
        showError(input, `${getFieldName(input)} is required`);
    } else {
        showSuccess(input);
    }
    })
}

//#### Check input length




//#### Get fieldname
// return input ID and uppercase the first letter
// javascript method is to cut off first letter, make it upper case and then join the rest of the word
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase()+input.id.slice(1) //adding the rest of the word without the first letter by starting at one
}

//Event Listeners 
form.addEventListener('submit', function(e){
    e.preventDefault(); // prevents the form from actually submitting
    
 checkRequired([username, email, password, password2]);
 checkLength(username, 3, 15) //(input, min, max)
 checkLength(password, 6, 25);
})







//// below is the initial way we built out logic for the form which could be expanded with even more if/then statements,
//// but its not scalable if you want to keep adding more fields.


/*
if(username.value === '') {
    showError(username, 'Username is required'); // calls on the function above
} else {
    showSuccess(username);
}
if(email.value === '') {
    showError(email, 'Email is required'); // calls on the function above
} else if(!isValidEmail(email.value)){
    showError(email, 'Email is not valid');
} else {
    showSuccess(email);
}
if(password.value === '') {
    showError(password, 'Password is required'); // calls on the function above
} else {
    showSuccess(password);
}
if(password2.value === '') {
    showError(password2, 'Password needs to match'); // calls on the function above
} else {
    showSuccess(password2);
}
*/