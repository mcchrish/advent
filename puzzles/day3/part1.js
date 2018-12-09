const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/test.txt`).toString().split('\n')

function getPointArea (coordinates, width, height) {
  const pointArea = []
  const area = width * height
  for (let i = 1; i <= area; i++) {
    pointArea.push([width * i, height * i])
  }

  return pointArea
}

function parseClaim (line) {
  const splits = line.split(' ')
  const coordinates = splits[2].replace(':', '').split(',')
  const [width, height] = splits[3].split('x')
  return {
    id: splits[0],
    coordinates,
    width,
    height,
    pointArea: getPointArea(coordinates, width, height)
  }
}

function comparePoints (p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1]
}

function getClaims (input) {
  const claims = []
  for (let i = 0, len = data.length - 1; i < len; i++) {
    claims.push(parseClaim(data[i]))
  }
  return claims
}

const claims = getClaims(data)

function getConflicts (pa1, pa2) {
  let conflicts = []

  for (let i = 0, len = pa1.length; i < len; i++) {
    for (let g = 0, len = pa2.length; g < len; g++) {
      const coor1 = pa1[i]
      const coor2 = pa2[g]
    }
  }
  return conflicts
}

function countOverlappingClaims (claims) {
  let conflicts = 0
  for (let i = 0, len = claims.length; i < len; i++) {
    for (let g = i, len = claims.length; g < len; g++) {
      const c1 = claims[i]
      const c2 = claims[g]
      conflicts = conflicts.concat(getConflicts(c1.pointArea, c2.pointArea))
    }
  }

  return count
}

console.log(countOverlappingClaims(claims))
