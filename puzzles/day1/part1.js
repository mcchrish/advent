const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/data.txt`).toString().split('\n')

let currentFreq = 0

for (let i = 0, len = data.length - 1; i < len; i++) {
  currentFreq += parseInt(data[i])
}

console.log(currentFreq)
