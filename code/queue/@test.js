export const runTest = (Queue, initial) => {
  const queue = new Queue(initial)
  console.log('------ enqueue(1) ------')
  queue.enqueue(1)
  console.log(queue.getArr())
  console.log('------ enqueue(2) ------')
  queue.enqueue(2)
  console.log(queue.getArr())
  console.log('------ enqueue(3) ------')
  queue.enqueue(3)
  console.log(queue.getArr())
  console.log('------ enqueue(4) ------')
  queue.enqueue(4)
  console.log(queue.getArr())
  console.log('------ enqueue(5) ------')
  queue.enqueue(5)
  console.log(queue.getArr())
  console.log('------ enqueue(6) ------')
  queue.enqueue(6)
  console.log(queue.getArr())
  console.log('------ enqueue(7) ------')
  queue.enqueue(7)
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ enqueue(3) ------')
  queue.enqueue(3)
  console.log(queue.getArr())
  console.log('------ enqueue(3) ------')
  queue.enqueue(3)
  console.log(queue.getArr())
  console.log('------ enqueue(3) ------')
  queue.enqueue(3)
  console.log(queue.getArr())
  console.log('------ printAll() ------')
  queue.printAll()

  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
}
