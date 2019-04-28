
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100
function sum (x, y) {
    if(x === y) {
       return x*y;
    }else {
      return x+y;
    }
       }
  console.log(sum(10, 10))
  console.log(sum(10, 5))

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false
function testFunction(a, b) {
    if(a === 30 && b === 30) {
       return true; }
       {
      if (a+b === 30) {
       return true;
     }else {
       return false;
     }
  }
  console.log(testFunction(30, 30));
  console.log(testFunction(15, 15));
  console.log(testFunction(10, 15));
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(str) {
  if (str.slice(0,2) === 'JS'){
    return str;
  } else if (str != 'JS'){
    return 'JS'+ str; 
  }else {
    return 'JS';
  }
}
console.log(checkString('JSisAwesome'))
console.log(checkString('isEasy'))
//console.log(checkString(null));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(arr){
    var array = []
    for(var i = 0;i < arr.length; i++){
        if(array.indexOf(arr[i]) == -1){
            array.push(arr[i])
        }
    }
    return array;
}
console.log(removeDuplicates ('aabbgsfff'))
console.log (removeDuplicates(122334))


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
function findLongestString (string){
  var longestString = string.split(' ').sort(function(a,b){
       return b.length - a.length;
 });
  return longestString[0];
}
console.log(findLongestString('Wantsome is Awsomeeee today'))
console.log(findLongestString('Teeeeeeeestt number two on the same function'))


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
function littleStar(star){
    star = "* ";
    for (var i = 0; i<5; i++){
      console.log (star.repeat(i));
    }
  }
  littleStar();

//ex7
  const negativeNumbers = [];

  function extractNegativeNumbers(numbers) {
      // append any negative numbers found in the numbers array 
      // into the negativeNumbers array constant variable above
   
  }
  extractNegativeNumbers([1,2,-5,4,-6])

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate (a, b, operation){
    if(operation === 'add'){
      return a + b;
    }else if(operation === 'substract'){
      return a - b;
    }else if ( operation === 'multiply'){
      return a*b;
    }else (operation === 'divide')
      return a/b;
  }
  console.log (calculate(2, 5, 'add'))
  console.log(calculate(10, 8, "substract"))
  console.log (calculate(2, 5, 'multiply'))
  console.log (calculate(60, 10, 'devide'))

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
function isDiv(a){
    if(a % 3 === 0 && a % 5 === 0){
      return 'both';
    } else if(a % 5 === 0){
      return 'five';
    }else if (a % 3 === 0 ){
      return 'three';
    }else{
      return a;
    }
  }
  console.log(isDiv(15))
  console.log(isDiv(6))
  console.log(isDiv(7))


//Master exercises
//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
function validPin(pin){
    if (pin.length == 4 && pin<=9999){
          return true; 
    }else{
      return false;
    }
  }
  console.log(validPin('11nbb25'))
  console.log(validPin('1233'))

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
function removeVowels(str){
    return str.replace(/[aeiou]/ig,'')
   }
   console.log(removeVowels("Hey I am developer"))

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
function isSquareNumber(x) {
    var sqrt = Math.sqrt(x);
    if (x/sqrt === sqrt) {
        return true;
    }else {
        return false;
    }
}
console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));



//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
function anagram (str1,str2) {
  var str1=str1.split('').sort().join('');
  var str2=str2.split('').sort().join('');
  if (str1 === str2){
    return true;
  }else {
  return false;
}
}

console.log(anagram("School master", "The class room"))
console.log(anagram('treime','temeri'))
console.log(anagram('silent', 'listen'))}