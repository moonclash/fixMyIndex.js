'use strict';

const fs = require('fs');
const regex = /z-index:\s*(-)*\d{1,500}/gi;

function splitAndConvert(val) {
  return +val.split(' ')[1];
}

function fixMyIndex(input,output) {
  fs.readFile(input, 'utf8', function(err, data) {
        let result = data;
        let matches  = result.match(regex);
        matches = matches.sort((a,b) => splitAndConvert(a) > splitAndConvert(b));
        matches.forEach((match,i) => {
           result = result.replace(match,`z-index: ${i + 1}`);
          });
        fs.writeFile(output,result,'utf8')
    });
}


fixMyIndex('screen.css','modded.css');
