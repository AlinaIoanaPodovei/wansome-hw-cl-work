//Obs: Nu aveti voie sa folositi console.log in corpul functiilor, ci doar in afara lor. Modalitatea in care se va decide punctajul va lua in considerare si utilizarea de nume sugestive pentru functii, parametri, variable.

//1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".
function cnpSexIdentifier (cnp){
  var cnp = cnp.split('');
    if (cnp [0] == 2){
      return "Persoana verificata este de sexul F";
    } else {
      return "Persoana verificata este de sexul M";
    }
  }
    console.log(cnpSexIdentifier('2910303208071'))
    console.log(cnpSexIdentifier('1910303208071'))
    console.log(cnpSexIdentifier('2930303208071')) 
  
//2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
//- 1-3 = E
//- 3-6 = D
//- 7-8 = B
//- 9 = A
//- 10 = A+
//Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var grade = function (points){
  if (points >= 1 && points <= 3){
    return "Calificatul corespunzator punctajului " + points + " este E";
  }
    else if (points > 3 && points <= 6){
      return "Calificatul corespunzator punctajului " + points + " este D";
  }
    else if (points >= 7 && points <= 8){
     return "Calificatul corespunzator punctajului " + points + " este B";
  }
    else if (points = 9){
     return "Calificatul corespunzator punctajului " + points + " este A";
  }
    else (points = 10){
     return "Calificatul corespunzator punctajului " + points + " este A+";
  }
}
console.log(grade(2))
console.log(grade(5))



//3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite.

function carManufacture (brand){
 // var country = '';
  switch (brand){
    case 'Toyota':
      return "Marca " + brand + ' se produce in Japonia';
      break;
    case 'Renault':
      return "Marca " + brand + ' se produce in Franta';
      break; 
    case 'Jetcar':
      return "Marca " + brand + ' se produce in Germania';
      break;
     case 'AMICO':
      return "Marca " + brand + ' se produce in Iran';
      break;
     case 'Maserati':
      return "Marca " + brand + ' se produce in Italia';
      break;
    default:
      return "Marca este necunoscuta."
  }
}
console.log(carManufacture ('Toyota'))
console.log(carManufacture ('Tesla'))
console.log(carManufacture ('AMICO'))


//varianta a II-a 
function secondCarManufacture (brand){

  if (brand == 'Toyota'){
    return "Marca " + brand + ' se produce in Japonia';
  }
   else if (brand == 'Renault'){
     return "Marca " + brand + ' se produce in Franta';
  }
    else if (brand == 'Jetcar'){
    return "Marca " + brand + ' se produce in Germania';
  }
    else if (brand == 'AMICO'){
      return "Marca " + brand + ' se produce in Iran';
  }
    else if(brand == 'Maserati'){
     return "Marca " + brand + ' se produce in Italia';
  }
  else {
     return "Marca este necunoscuta."
  }
}
console.log(secondCarManufacture ('Toyota'))

//4. Scrieti o functie de tip IIFE care afiseaza in consola: "Afisez, deci ma autoapelez". Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.
  
(function () {
    alert ("Afisez, deci ma autoapelez")
 })();