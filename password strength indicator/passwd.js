document.getElementById('passwd').addEventListener('input', function() {
    var password = this.value;
    var c1 = document.querySelector('.c1');
    var c2 = document.querySelector('.c2');
    var c3 = document.querySelector('.c3');
    var output = document.getElementById('output');

    
    c1.style.backgroundColor = 'lightslategray';
    c2.style.backgroundColor = 'lightslategray';
    c3.style.backgroundColor = 'lightslategray';
    output.textContent = '';


    if (/^[A-Z]+$/.test(password)) {
        c1.style.backgroundColor = 'red';
        output.textContent = 'Your password is too weak';
    }
    

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        c1.style.backgroundColor = 'red';
        c2.style.backgroundColor = 'yellow';
        if (output.textContent === '') {
            output.textContent = 'Your password is medium';
        }
    }

    
    if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        c1.style.backgroundColor = 'red';
        c2.style.backgroundColor = 'yellow';
        c3.style.backgroundColor = 'green';
        output.textContent = 'Your password is good';
    }
});
