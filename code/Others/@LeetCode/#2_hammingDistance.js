// The Hamming distance between two integers is the number of positions at which
// the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Example 1:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:
// Input: x = 3, y = 1
// Output: 1

// Constraints:
// 0 <= x, y <= 2^31 - 1

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 98.52% / 53 ms
// Memory: 20.71% / 42.4 MB
const hammingDistance1 = (x, y) => {
  let restX = x
  let restY = y
  let diff = 0

  while (restX && restY) {
    if ((restX & 1) !== (restY & 1)) diff++
    restX = restX >>> 1
    restY = restY >>> 1
  }

  while (restX) {
    if (restX & 1) diff++
    restX = restX >>> 1
  }

  while (restY) {
    if (restY & 1) diff++
    restY = restY >>> 1
  }

  return diff
}

// 2. ------------------------------------------------------------
// Runtime: 83.43% / 63 ms
// Memory: 33.73% / 42.3 MB
const hammingDistance2 = (x, y) => {
  let compare = x ^ y
  let diff = 0

  while (compare) {
    if (compare & 1) diff++
    compare = compare >>> 1
  }

  return diff
}

// 3. ------------------------------------------------------------
const hammingDistance3 = (x, y) => {
  let restX = x
  let restY = y
  let diff = 0
  let diffX = 0
  let diffY = 0

  while (restX > 0 && restY > 0) {
    if (restX % 2 !== restY % 2) diff++

    restX = Math.floor(restX / 2)
    restY = Math.floor(restY / 2)
  }

  while (restX > 0) {
    diffX = diffX + (restX % 2)
    restX = Math.floor(restX / 2)
  }

  while (restY > 0) {
    diffY = diffY + (restY % 2)
    restY = Math.floor(restY / 2)
  }

  return diff + diffX + diffY
}

// 4. ------------------------------------------------------------
import { hammingWeight2 as hammingWeight } from './#1_hammingWeight.js'

// 4-1
const hammingDistance4_1 = (x, y) => {
  let restX = x
  let restY = y
  let diff = 0
  let diffX = 0
  let diffY = 0

  while (restX > 0 && restY > 0) {
    if (restX % 2 !== restY % 2) diff++

    restX = Math.floor(restX / 2)
    restY = Math.floor(restY / 2)
  }

  if (restX > 0) diffX = hammingWeight(restX)
  if (restY > 0) diffY = hammingWeight(restY)

  return diff + diffX + diffY
}

// 4-2
const hammingDistance4_2 = (x, y) => {
  let restX = x
  let restY = y
  let diff = 0
  let diffX = 0
  let diffY = 0

  while (restX && restY) {
    if ((restX & 1) !== (restY & 1)) diff++
    restX = restX >>> 1
    restY = restY >>> 1
  }

  if (restX) diffX = hammingWeight(restX)
  if (restY) diffY = hammingWeight(restY)

  return diff + diffX + diffY
}
