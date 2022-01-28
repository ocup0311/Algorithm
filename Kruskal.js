// 書籍範例
// ===================== input =====================

// ===================== main =====================

// 圖形頂點數
var VERTS = 6

class edge {
  constructor() {
    this.start = 0
    this.to = 0
    this.find = 0
    this.val = 0
    this.next = null
  }
}

v = []

for (let i = 0; i < VERTS + 1; i++) v[i] = 0

var findmincost = (head) => {
  minval = 100
  let ptr = head

  while (ptr != null) {
    if (ptr.val < minval && ptr.find == 0) {
      minval = ptr.val
      retptr = ptr
    }
    ptr = ptr.next
  }
  retptr.find = 1
  return retptr
}

var mintree = (head) => {
  let result = 0
  let ptr = head

  for (let i = 0; i <= VERTS; i++) v[i] = 0

  while (ptr != null) {
    mceptr = findmincost(head)
    v[mceptr.start] = v[mceptr.start] + 1
    v[mceptr.to] = v[mceptr.to] + 1

    if (v[mceptr.start] > 1 && v[mceptr.to] > 1) {
      v[mceptr.start] = v[mceptr.start] - 1
      v[mceptr.to] = v[mceptr.to] - 1
      result = 1
    } else {
      result = 0
    }

    if (result == 0) {
      console.log(
        '起始頂點 [' +
          mceptr.start +
          '] -> 終止頂點 [' +
          mceptr.to +
          '] -> 路徑長度 [' +
          mceptr.val +
          ']\n'
      )
    }
    ptr = ptr.next
  }
}

// 成本表陣列
data = [
  [1, 2, 6],
  [1, 6, 12],
  [1, 5, 10],
  [2, 3, 3],
  [2, 4, 5],
  [2, 6, 8],
  [3, 4, 7],
  [4, 6, 11],
  [4, 5, 9],
  [5, 6, 16],
]

var head = null

// 建立圖形串列
for (i = 0; i < 10; i++) {
  for (j = 1; j <= VERTS + 1; j++) {
    if (data[i][0] == j) {
      newnode = new edge()
      newnode.start = data[i][0]
      newnode.to = data[i][1]
      newnode.val = data[i][2]
      newnode.find = 0
      newnode.next = null

      if (head == null) {
        head = newnode
        head.next = null
        ptr = head
      } else {
        ptr.next = newnode
        ptr = ptr.next
      }
    }
  }
}

console.log('------------------------------------\n')
console.log('建立最小成本擴張樹：\n')
console.log('------------------------------------\n')
mintree(head)
