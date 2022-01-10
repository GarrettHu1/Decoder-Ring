// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  //should shift certain amount of places, A -> D, M -> K
  //positive moves forward down alphabet
  //negative moves backwards up alphabet
  //spaces should be maintained
  //capitals can be ignored
  //if a letter is shifted past alphabet (0 / 26), should wrap back around
    //-use +26 if shifting back -26 shifting forward
      //make number always positive
  //set input toLowerCase
    // make default alphabet = [], use index place to assign alphabet to a #
  
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

/*    if (!shift || shift === 0 || shift < -25 || shift > 25) return false
    //split input string into array
    let inputArray = input.split("")
    let newArray = []
    //loop through input, loop through alphabet, if matches input[i] = alphabet[j] 
    for (let i = 0; i < inputArray.length; i++) {
      for( let j = 0; j < alphabet.length; j++) {
        const inputLetter = alphabet.indexOf(alphabet[j])
        if(inputArray[i].toLowerCase === alphabet[j]){ 
          let newVar = alphabet.indexOf(alphabet[j])
          newArray.push(newVar)
        }
        //if inputArray[i] is a space (===' '), keep the space
      } // j loop
      
    } //i looop
    console.log(newArray)
    */
 
    //loop through newMessage, 
    
/*    for(let k = 0; k < newMessage.length; k++) {
      if (newMessage[k] < 0 +26) newMessage[k] +26;
        if (newMessage[k] > 26) newMessage[k] - 26;
      //modArray[] = alpabet[modarray[]]
       newMessage[k] = alphabet[newMessage[k]]
    }   
    return inputArray.join("")
*/    
    
    
    

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
