// O(n)
// keep value in store to decrease duplicate stack
// 加入 store 即為用到 Dynamic Programming 概念

const store = { 0: 0, 1: 1 }

export const fib = (nth) => {
  if (nth < 0) return null
  if (store[nth] !== undefined) return store[nth]

  const value = fib(nth - 1) + fib(nth - 2)
  store[nth] = value

  return value
}
