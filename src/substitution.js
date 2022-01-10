// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
///* //comment
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function isUnique(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (obj[letter]) return false;
      obj[letter] = true;
    }
    return true;
  }
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const normAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const message = input.toLowerCase();
    let indexArray = []
    let newString = ""
    
    //loop thgouth each letter in message
    //take that letter, use that as key in alphabet, then push that value into new string
    //
    
    if(!alphabet) return false
    if(alphabet.length !== 26) return false
    const uniqueAlph = isUnique(alphabet);
    if (!uniqueAlph) return false;
    //loop through alphabet, if character matches any other character, return false
    
    
    if (encode) {
       for (let i = 0; i < message.length; i++) {
         if(message[i] === " ") newString += message[i]
        if (normAlphabet.includes(message[i].toLowerCase())) {
           let letterIndex = normAlphabet.findIndex(letter => letter === message[i].toLowerCase())
              //indexArray.push(alphabet[letterIndex])   
           newString += alphabet[letterIndex]
               }
       }
      console.log(indexArray) 
      //return indexArray.join('')
      return newString
    } else {
      for (let i = 0; i < message.length; i++) {
        const splitAlphabet = alphabet.split('')
         if(message[i] === " ") newString += message[i]
        if (alphabet.includes(message[i].toLowerCase())) {
           let letterIndex = splitAlphabet.findIndex(letter => letter === message[i].toLowerCase())
              //indexArray.push(alphabet[letterIndex])   
           newString += normAlphabet[letterIndex]
               }
       }
      return newString
    }  
    
  }//sub end

  return {
    substitution,
  };
})();
//*/ //comment
  /*
const substitutionModule = (function () {
  const regAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  function isUnique(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (obj[letter]) return false;
      obj[letter] = true;
    }
    return true;
  }
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const uniqueAlph = isUnique(alphabet);
    if (!uniqueAlph) return false;
    let coded = [];
    if (encode) {
      for (let i = 0; i < 25; i++) {
        coded[regAlphabet[i]] = alphabet[i]
      }
    } else {
      for (let i = 0; i < 25; i++) {
        coded[alphabet[i]] = regAlphabet[i];
      }
    }
    let array = input.toLowerCase().split('');
    let result = array.map((index) => {
      if (index === ' ') return ' ';
      return coded[index]
    })
    return result.join('')
    }
  return {
    substitution,
  };
})();
*/
 
module.exports = { substitution: substitutionModule.substitution };
