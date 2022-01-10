// Write your tests here!
//describe ceasar()

//const caesar = require("../src/caesar");
//const expect = require("chai").expect;
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

//test templates :
/*
Describe("", () => {
const parameter = 

it('should description', () => {
    const expected = 
    const actual = function(parameter)
    expect(actual).to.eql(expected);
  })
  //more it(shoulds) if needed
  
  })
  
  //caesar template
  
  describe("caesar", () => {

    it('should description', () => {
    const expected = ;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.eql(expected);
  })
  //more it(shoulds) if needed
  
  })
  
*/

describe("error handling", () => {
  //error halding tests
   it('should return false if the shift amount is 0', () => {
     const expected = false;
     const actual = caesar('message', 0, encode = true);
       expect(actual).to.be.false;
   })
    it('should return false if the shift amount is above 25', () => {
      const expected = false;
      const actual = caesar('message', 26, encode = true);
        expect(actual).to.be.false;
    })
    it('should return false if the shift amount is less than -25', () => {
      const expected = false;
      const actual = caesar('message', -26, encode = true);
        expect(actual).to.be.false;
    })
  })
  
  //encoding tests
  describe("encoding a message", () => {
  it('should encode a message by shifting the letters', () => {
    const expected = 'phvvdjh'
    const actual = caesar('message', 3, encode = true)
      expect(actual).to.eql(expected);
  })
  it('should leaves spaces and other symbols as is', () => {
    const expected = 'd phvvdjh.'
    const actual = caesar('a message.', 3, encode = true)
      expect(actual).to.eql(expected);
  })
  it('should ignore capital letters', () => {
    const expected = 'd phvvdjh';
    const actual = caesar('A Message', 3, encode = true)
      expect(actual).to.eql(expected);
  })
  it('should appropriately handle letters at the end of the alphabet', () =>{
    const expected = 'cheud pdjdclqh'
    const actual = caesar('zebra magazine', 3, encode = true)
      expect(actual).to.eql(expected);
  })
  it('should allow for a negative shift that will shift to the left', () => {
    const expected = 'wbyox jxdxwfkb'
    const actual = caesar('zebra magazine', -3, encode = true)
      expect(actual).to.eql(expected);
  })
  })
  
  //decoding tests
  
  describe("decoding a message", () => {
        it("should decode a message by shifting the letters in the opposite direction.", () => {
            const input = "iorzhu"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "flower"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters.", () => {
            const input = "ioRZhu"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "flower"
            expect(actual).to.equal(expected)
        })
        it("should leave spaces and other character as is.", () => {
            const input = "ioR Zhu!@#"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "flo wer!@#"
            expect(actual).to.equal(expected)
        })
        it("should handel shifts that extend past either end of the alphabet.", () => {
            const input = "cheud fdnh"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "zebra cake"
            expect(actual).to.equal(expected)
        })
    })

/*
//Dom's example
const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "I am a banana";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("should return false if the shift amount greater than 25", () => {
        const message = "I am a banana";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
        const message = "I am a banana";
        const shift = -48;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
});
describe("encoding a message", () => {
    it("should return capital letters as lowercase letters", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
        expect(actual).to.equal(expected);
    });
    it("should leave non-alphabetical characters as is", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the alphabet", () => {
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "cheud pdjdclqh";
        expect(actual).to.equal(expected);
    });
});
*/