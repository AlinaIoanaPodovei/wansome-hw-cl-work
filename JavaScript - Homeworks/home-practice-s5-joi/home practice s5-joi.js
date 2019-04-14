//1. Scrieti o functie care verifica daca un input este sau nu de tip string. 
//console.log(is_string('w3resource'));
//true
//console.log(is_string([1, 2, 4, 0]));
//false

function is_string(str){
    return typeof str === 'string';
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

//2. Scrieti o functie care verifica daca un string este gol sau nu.
//console.log(is_Blank(''));
//console.log(is_Blank('abc'));
//true
//False
function is_Blank (str1) {
    if (str1 === '') return true;
else return false;
    }
    console.log(is_Blank(''));
    console.log(is_Blank('abc'));

//3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
//console.log(string_to_array("Robin Singh"));
//["Robin", "Singh"]

function string_to_array(x){
     return x.split(" ");
}
console.log(string_to_array("Robin Singh"));

//4. Scrieti o functie care transforma un string in forma abreviata:
//console.log(abbrev_name("Robin Singh"));
//"Robin S."
function abbrev_name(y){
    y=y.split (" ");
    y[1]=y[1].slice(0,1)+".";
    y=y.join(" ");
    return y;
}
console.log(abbrev_name("Robin Singh"));

//5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
//console.log(capitalize('js string exercises'));
//"Js string exercises"
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize('js string exercises'));

//6. Scrieti o functie care elimina un numar specificat 
//de caractere pornind de la inceputul string-ului:
//console.log(truncate_string("Robin Singh",4));
//"Robi"

function truncate_string (trunc){
    return trunc.substr(0, 4);
}
console.log(truncate_string("Robin Singh",4));

//7. Scrieti o functie care specifica daca o caracterul de la 
//o anumita pozitie specificata dintr-un string este litera mare sau
//nu:
//console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
//false

function isUpperCaseAt(str,indx) {
    return str[indx] === str[indx].toUpperCase();
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


//8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
//console.log(insert('We are doing some exercises.','JavaScript ',18));
//"We are doing some exercises."
//"JavaScript We are doing some exercises."
//"We are doing some JavaScript exercises."



//9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
//console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
//"The quick brown fox jumps over lazy dog"
function remove_first_occurrence (a,b){
    return a.replace(b, '');
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


//10. Scrieti o functie care compara doua string-uri case-insensitive:
//console.log(compare_strings('abcd', 'AbcD'));
//true
function compare_strings(a1, a2){
return a1.toUpperCase()===a2.toUpperCase();
}
console.log(compare_strings('abcd', 'AbcD'));

//11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
//console.log(Uncapitalize('Js string exercises'));
//"js string exercises"

function Uncapitalize(uncap) {
    return uncap.toLowerCase();
}
console.log(Uncapitalize('Js string exercises'));