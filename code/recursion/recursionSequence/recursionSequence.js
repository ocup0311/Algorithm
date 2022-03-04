// O(n)

const recursionSequence = (nth) => {
  console.log(`run recursionSequence${nth}`)
  if (nth < 1) return null
  if (nth === 1) return 1

  return recursionSequence(nth - 1) + 15
}

export default recursionSequence
