function alertButton (){
    alert ("It's ok");
}
document.getElementById('input1').addEventListener('change', inpFunction);

function inpFunction () {
    alert('input ok');
}

document.getElementById('input1').addEventListener('keydown', cameleon);
function cameleon (){
    const colorArr = ['blue', 'red', 'yellow', 'pink', 'green'];
    randomColor.style.color = colorArr[Math.floor(Math.random()*5)];
 }

 document.getElementById("exButton").addEventListener("click", function() {

    const a = document.getElementById("name").value;
    const b = document.getElementById("adjective").value;
    const c = document.getElementById("random-word").value;
    document.getElementById("story").innerHTML = a + " este " + b + " de la " + c;
});