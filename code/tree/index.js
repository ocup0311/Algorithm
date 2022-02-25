import BinarySearchTree from './BinarySearchTree.js'

const bst = new BinarySearchTree()
console.log(bst)
bst.insert({ key: 8, value: 123 })
bst.insert({ key: 765, value: 456 })
bst.insert({ key: 5, value: 65 })
bst.insert({ key: 18, value: 123 })
bst.insert({ key: 9, value: 123 })

console.log(bst)
