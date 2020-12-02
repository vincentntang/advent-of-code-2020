var fs = require('fs');

var readMe = fs.readFileSync('input.txt', 'utf8').split('\n');

function passwordPhilosophy(arg) {
  let numberOfValidPasswords = 0;
  arg.forEach((item,index) => {
    // seperate each value into its arguments, by splitting it across spaces in the array
    let passwordArray = item.split(' ');
    const [lowerLimitMatch, upperLimitMatch] = passwordArray[0].split('-');
    const characterMatch = passwordArray[1][0];
    const sequenceMatch = passwordArray[2];
    console.log(characterMatch,"char Match");
    console.log(sequenceMatch,"SequenceMatch");
    const numberOfMatches = (sequenceMatch.match(new RegExp(characterMatch, "g")) || []).length;
    console.log(numberOfMatches, "NUM MATCHES");
    if(numberOfMatches >= parseInt(lowerLimitMatch) && numberOfMatches <= parseInt(upperLimitMatch)){
      numberOfValidPasswords = numberOfValidPasswords + 1;
    }
  })
  return numberOfValidPasswords;
}

console.log(passwordPhilosophy(readMe));