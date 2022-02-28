// 抽象化 findNodeByCondition，是好不好？ (commit 942258b)
import * as U from '$util'
import traverseMethod from './traverseMethod.js'

// main
class BinaryTree {
  constructor() {
    this.root = null
  }

  traverseAll(method = 'bft', cb) {
    U.getObjValue(traverseMethod, method)(this.root, cb)
  }

  getListArrBy(method) {
    const list = []

    const cb = (currentNode) => list.push(currentNode)

    this.traverseAll(method, cb)

    return list
  }

  getItemArrBy(method) {
    const arr = []

    const cb = (currentNode) => arr.push(currentNode.item)

    this.traverseAll(method, cb)

    return arr
  }

  printAllBy(method) {
    const cb = (currentNode) => console.log(currentNode.item)

    this.traverseAll(method, cb)
  }
}

export default BinaryTree
