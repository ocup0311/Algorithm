// O(n)
// keep value in store to decrease duplicate stack

const store = { 0: 0, 1: 1 }

export function fib(nth) {
  if (nth < 0) return null
  if (store[nth] !== undefined) return store[nth]

  const value = fib(nth - 1) + fib(nth - 2)
  store[nth] = value

  return value
}
