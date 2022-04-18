export const runTest = (Stack, initial) => {
  const stack = new Stack(initial)

  console.log('------ push(1) ------')
  stack.push(1)
  console.log(stack.getArr())
  console.log('------ push(2) ------')
  stack.push(2)
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ push(3) ------')
  stack.push(3)
  console.log(stack.getArr())
  console.log('------ printAll() ------')
  stack.printAll()

  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
}