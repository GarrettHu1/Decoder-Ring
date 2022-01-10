// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  function polybius(input, encode = true) {
    // your solution code here 
    //const rowArray = ["(a/f/l/q/v))", "(b/g/m/r/w)", "(c/h/n/s/x)", "(d/i/j/o/t/y)", "(e/k/p/u/z)"];
    //const columnArray = ["(a/b/c/d/e)", "(f/g/h/i/j/k)","(l/m/n/o/p)", "(q/r/s/t/u)", "(v/w/x/y/z)"];
//    /* //comment start
    const originalMessage = input.toLowerCase();
    let newMessage = [];   
    const numberLetters = {
      'a' : 11,
      'b' : 21,
      'c' : 31,
      'd' : 41,
      'e' : 51,
      'f' : 12,
      'g' : 22,
      'h' : 32,
      'i' : 42,
      'j' : 42,
      'k' : 52,
      'l' : 13,
      'm' : 23,
      'n' : 33,
      'o' : 43,
      'p' : 53,
      'q' : 14,
      'r' : 24,
      's' : 34,
      't' : 44,
      'u' : 54,
      'v' : 15,
      'w' : 25,
      'x' : 35,
      'y' : 45,
      'z' : 55
    }    
     if (encode) {
       let numberString = ""
       const message = input.toLowerCase()
       for (let letter of message) {
          if(letter === " ") {
              numberString += letter
          } 
        for(let key in numberLetters) {
               if (key === letter) {
                   numberString += numberLetters[key]
               }
           }
       }
       console.log(numberString)
       return numberString
   } if (!encode) {
    let codedNumbers = input.split(" ")
    let decodedMessage = []
    for (let number of codedNumbers) {
      if (input.split(' ').join('').length % 2 === 1) return false
        let decodedWord = ""
        for (let i = 0; i < number.length; i +=2) {
            let value = number[i].toString() + number[i + 1].toString()
            console.log(value)
            for (let key in numberLetters) {
                if (numberLetters[key] == value) {
                    decodedWord += key
                }
            }
        }
        decodedMessage.push(decodedWord)
    }
    
       console.log(decodedMessage.join(" "))
       return decodedMessage.join(" ")
   
   }
  }//polybius end


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
