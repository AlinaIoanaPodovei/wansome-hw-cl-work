function alertButton (){
    alert ("It's ok");
}

//document.getElementById('btn').addEventListener('click');
//function () {
 //   alert ('acesta e al ii-lea buton');
//}

document.getElementById('input1').addEventListener('change', inpFunction);

function inpFunction () {
    alert('input ok');
}

document.getElementById('input1 ').addEventListener('keydown', cameleon);
function cameleon (){
    const colorArr = ['blue', 'red', 'yellow', 'pink', 'green'];
    randomColor.style.color = colorArr[Math.floor(Math.random()*5)];
 }