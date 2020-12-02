var fs = require('fs');

var readMe = fs.readFileSync('input.txt', 'utf8').split('\n');

function reportRepair(arg) {
  for(let i = 0; i < arg.length; i++){
    for (let j = i; j < arg.length; j++){
      if(parseInt(arg[i]) + parseInt(arg[j]) == 2020){
        return arg[i] * arg[j];
      } 
    }
  }
}

console.log(reportRepair(readMe));