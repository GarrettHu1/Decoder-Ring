// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  function caesar(input, shift, encode = true) {
    
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const newMessage = [];  
    if(!encode) { shift = -shift}
    for (let i = 0; i < input.length; i++) {
        if (alphabet.includes(input[i].toLowerCase())) {
           let letterIndex = alphabet.findIndex(letter => letter === input[i].toLowerCase());
           let newLetterIndex = letterIndex + shift;
          //if newLetterIndex < 0 +26 || if newMessage[] >26 -26
          if (newLetterIndex < 0) { newLetterIndex += 26 }
          if (newLetterIndex > 25) { newLetterIndex -= 26}
          
           newMessage.push(alphabet[newLetterIndex]); //pushing letter in alphabetarray at index(newLetterIndex)
        }
        else {
          newMessage.push(input[i]); //handles spaces
        }
      }console.log(newMessage.join(''))
      return newMessage.join('');
    } // function caesar end
    
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
