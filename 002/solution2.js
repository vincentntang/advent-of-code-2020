var fs = require('fs');

var readMe = fs.readFileSync('input.txt', 'utf8').split('\n');

// 8-10 n: mcgnngfnrjpkxdmjnnx
function passwordPhilosophy(arg) {
  let numberOfValidPasswords = 0;
  arg.forEach((item,index) => {
    let passwordArray = item.split(' ');
    const [lowerLimitMatch, upperLimitMatch] = passwordArray[0].split('-');
    const characterMatch = passwordArray[1][0];
    const sequenceMatch = passwordArray[2];
    if(sequenceMatch[parseInt(lowerLimitMatch)] === characterMatch || sequenceMatch[parseInt(upperLimitMatch)] === characterMatch){
      numberOfValidPasswords++;
    }
  })
  return numberOfValidPasswords;
}

console.log(passwordPhilosophy(readMe));