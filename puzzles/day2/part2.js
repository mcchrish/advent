const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/data.txt`).toString().split('\n')

const boxLength = 26

function getCommonLetters () {
  for (let i = 0, len = data.length; i < len; i++) {
    const line1 = data[i]
    for (let g = 0, len = data.length; g < len; g++) {
      const line2 = data[g]
      if (i === g) {
        break
      }
      for (let k = 0, len = boxLength; k < len; k++) {
        const line1Sliced = line1.slice(0, k) + line1.slice(k + 1, line1.length)
        const line2Sliced = line2.slice(0, k) + line2.slice(k + 1, line2.length)
        if (line1Sliced === line2Sliced) {
          console.log(line1Sliced, line2Sliced)
          // return line1Sliced
        }
      }
    }
  }
}

console.log(getCommonLetters())
