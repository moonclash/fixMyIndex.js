let str = 'h1 {z-index: 55;} h2 {z-index: 333;} .logo {z-index: 10}';
let matches = str.match(regex);
const regex = /z-index:\s\d{1,100}/gi;


function splitAndConvert(val) {
  return +val.split(' ')[1];
}

matches = matches.sort((a,b) => splitAndConvert(a) > splitAndConvert(b));

matches.forEach((match,i) => {
  str = str.replace(match,`z-index: ${i + 1}`);
});

//TODO - add support for negative z-index (should be easy, just modify the regex)
//TODO - add support for strings with no space between z-index: and the numeric value
