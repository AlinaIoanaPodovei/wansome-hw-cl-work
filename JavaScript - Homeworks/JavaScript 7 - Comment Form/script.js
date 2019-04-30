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
