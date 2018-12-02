const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/data.txt`).toString().split('\n')

function hasCount (id, count) {
  const letters = id.split('')
  const uniqLetters = letters.filter((value, index, self) => {
    return self.indexOf(value) === index
  }).map(letter => [letter, 0])

  for (let i = 0, len = uniqLetters.length; i < len; i++) {
    for (let g = 0, len = letters.length; g < len; g++) {
      if (uniqLetters[i][0] === letters[g]) {
        uniqLetters[i][1]++
      }
    }
  }

  for (let i = 0, len = uniqLetters.length; i < len; i++) {
    if (uniqLetters[i][1] === count) {
      return true
    }
  }
}

let twoCounts = 0
let threeCounts = 0

for (let i = 0, len = data.length - 1; i < len; i++) {
  const boxId = data[i]
  if (hasCount(boxId, 2)) {
    twoCounts++
  }

  if (hasCount(boxId, 3)) {
    threeCounts++
  }
}

console.log('two', twoCounts)
console.log('three', threeCounts)
console.log('checksum', twoCounts * threeCounts)
