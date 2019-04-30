function validateForm(){
    var username = document.getElementById('username');
    var mail = document.getElementById('mail');
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var phone = document.getElementById('phone');
    var valid = true;
    //console.log(username.value);
    //return false;

    if(username.value.length == 0){
        username.className = 'wrong-input';
        username.nextElementSibling.innerHTML = 'Please enter a username';
        valid = false;
    }
    if(mail.value.length == 0){
        mail.className = 'wrong-input';
        mail.nextElementSibling.innerHTML = 'Please enter a valid email adress';
        valid = false;
    }
    if(fname.value.length == 0){
        fname.className = 'wrong-input';
        fname.nextElementSibling.innerHTML = 'Please enter a First Name';
        valid = false;
    }
    if(lname.value.length == 0){
        lname.className = 'wrong-input';
        lname.nextElementSibling.innerHTML = 'Please enter a Last Name';
        valid = false;
    }
    if(phone.value.length < 10){
        phone.className = 'wrong-input';
        phone.nextElementSibling.innerHTML = 'Please enter a phone number';
        valid = false;
    }
    return valid;
}