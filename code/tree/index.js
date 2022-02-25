import BinarySearchTree from './BinarySearchTree.js'

const bst = new BinarySearchTree()

console.log(bst)
bst.insert({ key: 8, value: 123 })
bst.insert({ key: 765, value: 456 })
bst.insert({ key: 5, value: 65 })
bst.insert({ key: 18, value: 123 })
bst.insert({ key: 9, value: 123 })
console.log('------ BinarySearchTree ------')
console.log(bst)

console.log('------ bft ------')
bst.printAll('bft')
console.log('------ preOrder ------')
bst.printAll('preOrder')
console.log('------ inOrder ------')
bst.printAll('inOrder')
console.log('------ postOrder ------')
bst.printAll('postOrder')

console.log('------ search(8) ------')
console.log(bst.search(8))
console.log('------ search(123) ------')
console.log(bst.search(123))
console.log('------ search(765) ------')
console.log(bst.search(765))
