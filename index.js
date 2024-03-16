const { describe } = require("mocha");

describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});
function shout(string) {
  // todo
  return string.toUpperCase();
}

describe("whisper(string)", function () {
  it("receives one argument and returns it in all lowercase", function () {
    expect(shout("HELLO")).toEqual("hello");
  });
});
function whisper(string) {
  // todo
  return string.toLowerCase();
}

function logShout(string) { 
  console.log(string.toUpperCase());
}

logShout("hello");

function logWhisper(string) {
  console.log(string.toLowerCase());
  
}
logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string) {
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return "YES INDEED!";
    }
  }
}






