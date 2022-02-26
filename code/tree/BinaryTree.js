// 抽象化 findNodeByCondition，是好不好？ (commit 942258b)
import * as U from '$util'
import traverseMethod from './traverseMethod.js'

// main
class BinaryTree {
  constructor() {
    this.root = null
  }

  traverseAll(method = 'bft', callBack) {
    U.getObjValue(traverseMethod, method)(this.root, callBack)
  }

  getListArrBy(method) {
    const list = []

    const callBack = (currentNode) => list.push(currentNode)

    this.traverseAll(method, callBack)

    return list
  }

  getItemArrBy(method) {
    const arr = []

    const callBack = (currentNode) => arr.push(currentNode.item)

    this.traverseAll(method, callBack)

    return arr
  }

  printAllBy(method) {
    const callBack = (currentNode) => console.log(currentNode.item)

    this.traverseAll(method, callBack)
  }
}

export default BinaryTree
