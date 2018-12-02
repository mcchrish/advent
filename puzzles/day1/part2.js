const fs = require('fs')

const data = fs
  .readFileSync(`${__dirname}/data.txt`)
  .toString()
  .split('\n')

let currentFreq = 0
let reqReaches = [currentFreq]

Loop: while (true) {
  for (let i = 0, len = data.length - 1; i < len; i++) {
    currentFreq += parseInt(data[i])
    if (reqReaches.includes(currentFreq)) {
      console.log(currentFreq)
      break Loop
    }
    reqReaches.push(currentFreq)
  }
}
