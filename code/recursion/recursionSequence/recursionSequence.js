// O(n)

function recursionSequence(nth) {
  if (nth < 1) return null
  if (nth === 1) return 1

  return recursionSequence(nth - 1) + 15
}

module.exports = recursionSequence
