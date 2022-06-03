// Given a characters array tasks, representing the tasks a CPU needs to do,
// where each letter represents a different task. Tasks could be done in any order.
// Each task is done in one unit of time. For each unit of time, the CPU could
// complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period
// between two same tasks (the same letter in the array), that is that there must
// be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation:
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// Example 3:
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation:
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

// Constraints:
// 1 <= task.length <= 10^4
// tasks[i] is upper-case English letter.
// The integer n is in the range [0, 100].

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 58.43% / 151 ms
// Memory Usage: 75.90% / 45.9 MB
const leastInterval1 = (tasks, n) => {
  if (n === 0) return tasks.length

  // function
  const makeCounter = (tasks) => {
    const counter = tasks.reduce((t, v) => {
      t[v] = t[v] + 1 || 1
      return t
    }, {})

    return Object.values(counter).sort((a, b) => b - a)
  }

  // run
  const counter = makeCounter(tasks)

  if (counter[0] <= tasks.length / (n + 1)) return tasks.length

  const interval = counter[0] - 1
  let ptr = 0
  let offset = 0

  while (counter[ptr] > interval) {
    offset++
    ptr++
  }

  return Math.max(tasks.length, (counter[0] - 1) * (n + 1) + offset)
}

// 2. ------------------------------------------------------------
// Runtime: 146 ms
// Memory Usage: 45.4 MB
const leastInterval2 = (tasks, n) => {
  if (n === 0) return tasks.length

  const counter = {}
  tasks.forEach((v) => (counter[v] = counter[v] + 1 || 1))

  const sortedCounter = Object.values(counter).sort((a, b) => b - a)

  return sortedCounter.reduce(
    (t, v, i) => Math.max(t, v + (v - 1) * n + i),
    tasks.length
  )
}

// 3. ------------------------------------------------------------
// from 1
// Runtime: 82.53% / 111 ms
// Memory Usage: 76.81% / 45.9 MB
const leastInterval = (tasks, n) => {
  const minResult = tasks.length
  if (n === 0) return minResult

  const [counter, maxTask] = tasks.reduce(
    ([counter, max], task) => {
      counter[task] = counter[task] + 1 || 1
      if (counter[task] > max) max = counter[task]

      return [counter, max]
    },
    [{}, 0]
  )

  if (maxTask <= minResult / (n + 1)) return minResult

  const offset = Object.values(counter).filter((v) => v === maxTask).length

  return Math.max(minResult, (maxTask - 1) * (n + 1) + offset)
}
