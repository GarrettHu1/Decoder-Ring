// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");
describe("substitution()", () => {
describe("error handling", () => {
it('should return false if the substitution alphabet is missing', () => {
    const expected = false
    const input = 'message'
    const alphabet = ""
    const encode = true;
    const actual = substitution(input, alphabet, encode)
    expect(actual).to.be.false
  })
  it('should return false if the substitution alphabet is not exactly 26 characters', () => {
    const expected = false
    const input = 'message'
    const alphabet = "xoyqmcgrukswaflnthdjpzibe"
    const encode = true;
    const actual = substitution(input, alphabet, encode)
    expect(actual).to.be.false
  })
  it('should return false if the substitution alphabet does not contain unique characters', () => {
    const expected = false
    const input = 'message'
    const alphabet = "xoyqmcgrukswaflnthdjpzibee"
    const encode = true;
    const actual = substitution(input, alphabet, encode)
    expect(actual).to.be.false
  })
  })//des error handling end
  describe("encoding a message", () => {
        it("should correctly translate the given phrase", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
            expect(actual).to.equal(expected);
        })
        it("should maintain spaces", () => {
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "MESSAGE";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
            expect(actual).to.equal(expected);
        });
    });
//desc encoding end
})//desc sub end