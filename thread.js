// 書籍範例
// ===================== input =====================

// ===================== main =====================

class Node {
  constructor() {
    this.value = 0
    this.left_Thread = 0
    this.right_Thread = 0
    this.left_Node = null
    this.right_Node = null
  }
}

rootNode = new Node()
rootNode = null

// 將指定的值加入到二元引線數
var Add_Node_To_Tree = (value) => {
  let newnode = new Node()
  newnode.value = value
  newnode.left_Thread = 0
  newnode.right_Thread = 0
  newnode.left_Node = null
  newnode.right_Node = null

  let previous = new Node()
  previous.value = value
  previous.left_Thread = 0
  previous.right_Thread = 0
  previous.left_Node = null
  previous.right_Node = null

  // 設定引線二元樹的開頭節點
  if (rootNode == null) {
    rootNode = newnode
    rootNode.left_Node = rootNode
    rootNode.right_Node = null
    rootNode.left_Thread = 0
    rootNode.right_Thread = 1
    return
  }

  // 設定開頭節點所指的節點
  let current = rootNode.right_Node
  if (current == null) {
    rootNode.right_Node = newnode
    newnode.left_Node = rootNode
    newnode.right_Node = rootNode
    return
  }

  // 父節點是開頭節點
  let parent = rootNode
  // 設定二元樹中的行進方向
  pos = 0

  while (current != null) {
    if (current.value > value) {
      if (pos != -1) {
        pos = -1
        previous = parent
      }

      parent = current

      if (current.left_Thread == 1) {
        current = current.left_Node
      } else {
        current = null
      }
    } else {
      if (pos != 1) {
        pos = 1
        previous = parent
      }

      parent = current

      if (current.right_Thread == 1) {
        current = current.right_Node
      } else {
        current = null
      }
    }
  }

  if (parent.value > value) {
    parent.left_Thread = 1
    parent.left_Node = newnode
    newnode.left_Node = previous
    newnode.right_Node = parent
  } else {
    parent.right_Thread = 1
    parent.right_Node = newnode
    newnode.left_Node = parent
    newnode.right_Node = previous
  }

  return
}

// 引線二元樹中序走訪
var trace = () => {
  let tempNode = rootNode

  while (true) {
    if (tempNode.right_Thread == 0) {
      tempNode = tempNode.right_Node
    } else {
      tempNode = tempNode.right_Node
      while (tempNode.left_Thread != 0) {
        tempNode = tempNode.left_Node
      }
    }

    if (tempNode != rootNode) console.log('[' + tempNode.value + ']\n')
    if (tempNode == rootNode) break
  }
}

// 主程式
i = 0
array_size = 11

console.log('引線二元樹經建立後，以中序追蹤能有排序的效果\n')
console.log('第一個數字為引線二元樹的開頭節點，不列入排序\n')
data1 = [0, 10, 20, 30, 100, 399, 453, 43, 237, 373, 655]
for (i = 0; i < array_size; i++) Add_Node_To_Tree(data1[i])

console.log('------------------------------------\n')
console.log('範例1\n')
console.log('數字由小到大的排序順序結果為：\n')
trace()

data2 = [0, 101, 118, 87, 12, 765, 65]
rootNode = null
array_size = 7
for (i = 0; i < array_size; i++) Add_Node_To_Tree(data2[i])

console.log('------------------------------------\n')
console.log('範例2\n')
console.log('數字由小到大的排序順序結果為：\n')
trace()
