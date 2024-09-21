// console.log('clicked login btn')

// step-1: set the handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('clicked login btn')

    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})