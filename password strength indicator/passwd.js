var passwd = document.getElementById('passwd')
passwd.addEventListener('input', function() {
    var password = this.value;
    var c1 = document.querySelector('.c1');
    var c2 = document.querySelector('.c2');
    var c3 = document.querySelector('.c3');
    var output = document.getElementById('output');
    // var p21 = document.querySelector('.p21');
    

    output.textContent = '';
    // p21.style.border = '1px solid blue';
    

    if ((password.length > 2 && /[A-Za-z]+/.test(password)) ){
        c1.style.backgroundColor = 'red';
        output.textContent = 'Your password is too weak';
        output.style.color ='red'
    }
    

    if ((password.length > 2 && /[A-Za-z]+/.test(password)) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        c1.style.backgroundColor = 'red';
        c2.style.backgroundColor = 'yellow'; 
        output.textContent = 'Your password is medium';
        output.style.color ='yellow'
    
    }


    
    if ((password.length > 2 && /[A-Za-z]+/.test(password)) && /[!@#$%^&*(),.?":{}|<>]/.test(password) && /[0-9]/.test(password) ) {
        c1.style.backgroundColor = 'red';
        c2.style.backgroundColor = 'yellow';
        c3.style.backgroundColor = 'green';
        output.textContent = 'Your password is good';
        output.style.color ='green'
        passwd.style.border = '2px solid green'
    }

});

document.getElementById('label').addEventListener('click', function(){
    var passwd = document.getElementById('passwd');
    if(passwd.type == 'password'){
        passwd.type = 'text';
        label.textContent = 'Hide'
    }
    else{
        passwd.type = 'password';
        label.textContent = 'Show';
    }
});
