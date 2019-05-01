function showTextarea(){
    var myForm = document.form;
    var myCheckbox = myForm.check;
    var myTextarea = myForm.text1;
    if(myCheckbox.checked == true){
        myTextarea.style.display = 'block';
    }else{
        myTextarea.style.display = 'none';
    }
}


document.getElementById('submit').addEventListener('click', textLimit);
function textLimit(){
    var text = document.getElementById('text1');
    var error = document.getElementById('error');
    var textArea = document.getElementById('text1').textLength;

    if(textArea > 2){
       text.style.color = 'red';
       error.style.display = 'block';
    }else {
        console.log('all good here');
    }
}