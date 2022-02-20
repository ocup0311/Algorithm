// O(2^n) (exponential)
// too small to get stack overflow

function fib(nth) {
  if (nth < 0) return null
  if (nth === 0) return 0
  if (nth === 1) return 1

  return fib(nth - 1) + fib(nth - 2)
}

export { fib }
