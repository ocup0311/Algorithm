// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:
// -2^31 <= val <= 2^31 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 10^4 calls will be made to push, pop, top, and getMin.

// Notice --------------------------------------------------------
// getMin() in "constant" time，還是 所有的 method 都要？

// 1. ------------------------------------------------------------
// Runtime: 87.03% / 107 ms
// Memory: 68.80% / 49.7 MB
class MinStack {
  constructor() {
    this.#stack = []
  }

  #stack

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    const lastMin = this.#stack[this.#stack.length - 1]?.min
    const thisMin = lastMin < val ? lastMin : val

    this.#stack.push({ val, min: thisMin })
  }

  /**
   * @return {void}
   */
  pop() {
    this.#stack.pop()
  }

  /**
   * @return {number}
   */
  top() {
    const last = this.#stack[this.#stack.length - 1]

    return last.val
  }

  /**
   * @return {number}
   */
  getMin() {
    const last = this.#stack[this.#stack.length - 1]

    return last.min
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
