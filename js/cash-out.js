document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('btn work')

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutAmount = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        
        // console.log(cashOut, pinNumber);

        if(pinNumber === '123'){
            // console.log('welcome');
            const balance = document.getElementById('account-balance').innerText;
            const currentBalance = parseFloat(balance);
            const newBalance = currentBalance - cashOutAmount;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('wrong pin number. Please try again')
        }
    });