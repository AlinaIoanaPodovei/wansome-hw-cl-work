//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function protectEmail(email){
    var tokens = email.split('@');
    var secondPart;
    var firstPartOfEmail = tokens[0].slice(0,4);
    console.log(firstPartOfEmail+ '...'+'@'+tokens[1])
    return firstPartOfEmail+ '...'+'@'+tokens[1];
    
   // // if(tokens[0].indexOf('_')){
   //   // secondPart=tokens[0].split('_');
   //  }
   //  else if (tokens[0].indexOf('.'))
   //  {
   //    secondPart=tokens[0].split('.');
   //  }
   //   return secondPart+"..."+"@"+tokens[1];
  }
    protectEmail('ovidiu.grigoras@test.com')
  // console.log(protectEmail('ovidiu_grigoras@test.com'))
  
  //Ex2
  //Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
  // de ex: myFunction("i am superman") sa printeze "I Am Superman"
  
     function upperLetter(allStrings){
     allStrings = allStrings.split(' ');
     var i;
     for (i = 0; i<allStrings.length; i++){
      allStrings[i] = allStrings[i].charAt(0).toUpperCase()+ allStrings[i].slice(1);
     }
      return allStrings.join(' ');
     }
   console.log(upperLetter('i am superman'))
  
  //Ex3
  // Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
  // ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
  function lowerLetter(viceVersa){
    viceVersa = viceVersa.split('');
    var a;
    for (a = 0, a<viceVersa, a++) {
      if(viceVersa[a] = viceVersa[a].charAt(0).toLowerCase()){
        viceVersa[a] = viceVersa[a].charAt(0).toUpperCase();
    }
      else if (viceVersa[a] = viceVersa[a].charAt(0).toUpperCase()){
    viceVersa[a] = viceVersa[a].charAt(0).toLowerCase().slice(1);
        }
    return viceVersa.join('');
      }
  console.log(lowerLetter("xxXyYzZZ"))
    //almost class version 
          //function convertLetters(str)  {
           //var let=str.length();
          // for (int i=0; i<let; i++){
           //  if (str [i]>='a'&& str [i]<='z')
            //   str[i]=str[i]-32;
            // else if( str[i]>='A'&& str[i]<='Z')
            //   str[i]=str[i]+32;         
       //  } 
        // }
          // console.log(convertLetters('xxXyYzZZ'))
              
  
  //4//Ex4
  // Scrieti o functie care sa concateneze un string de cate ori ii zicem
  // de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
    
    function multiplyStr(str,a){
      var res ='';
      for ( var i = 1; i <= a; i++){
        res+=str;
      }
      console.log(res);
    }
    console.log(multiplyStr('Wantsome',2))
    console.log ( multiplyStr('Alina', 5))
  
    //5//Ex5
  // A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
  // Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
  function palindrome(str){
    var result = str.split('').reverse().join('');
    if(result === str){
      return true;
    } else {
      return false;
    }
  }
  console.log(palindrome('madam'))
  console.log(palindrome('alina'))
  console.log(palindrome('cojoc'))
    
  
  //Ex6
  // Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
  
  //Ex7
  // Implementati o functie care face reverse la un string
  
  function reverseStr(str){
    var reversed = str.split('').reverse();
    var i;
    for(i = 0;i = reversed; i++){
      return 'Cuvantul ' + str + ' citit invers este '+ reversed.join('');
    }
  }
  console.log(reverseStr('wantsome'))
  console.log(reverseStr('javascript'))
  
  //Ex8 
  // Implementati o functie care calculeaza factorialul unui numar
  //Exemple:
  
  // 5!=5x4x3x2x1=120 
  // 0!=1 (caz special)
  
  function factNr(number) {
    if (number == 0) 
          return 1;
    else {
        return (number * factNr(number - 1));
    }
  }
  console.log(factNr(3));
  console.log(factNr(0));
  console.log(factNr(10));
  
  //Ex9
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
  
  
  function compareStr(arr){
    var firstStr = arr[0].toLowerCase();
    var secondStr = arr[1].toLowerCase();
    for(var i = 0; i<secondStr.length; i++) {
      if(firstStr.indexOf(secondStr[i]) === -1)
        return false;
      } 
        return true;
      }
  console.log(compareStr(['lowercase','case']))
  console.log(compareStr(['papanas','clatita']))
  console.log(compareStr(['random','Dom']))
  
  //Ex11
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string
  
  function anagram(str1,str2){
    var str1 = str1.split('').sort().join('');
    var str2 = str2.split('').sort().join('');
    if (str1 === str2){
      return true;
    }
    return false;
  }
  console.log(anagram('abc','bca'))
  console.log(anagram('treime','temeri'))
  console.log(anagram('treime','reimea'))
    
    //Ex10--????
  // Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat
  
  // Ex 14
  // Scrieti o functie care repeta un string de n ori specificate ===duplicate cu exercitiul 4