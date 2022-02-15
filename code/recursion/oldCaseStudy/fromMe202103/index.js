// ===  1  ==================================================================>
const arr11 = [1, 2, 3, 4, null, 5, null, 6, 7, 8, 9, 10, 11]

const fn11 = (arr) => {
  let count = 0

  return arr.map((v, i, a) => {
    if (v !== null) {
      const r = {
        value: i,
        right: i + count + 1,
        left: i + count + 2,
      }
      count++
      return r
    } else {
      return null
    }
  })
}

// console.log(12345, fn11(arr11))

// ===  2  ==================================================================>
const arr21 = [1, 2, 3, 4, null, 5, null, 6, 7, 8, 9, 10, 11]

function fn21(arr, layer, x, y) {
  let node

  if (arr[0]) {
    const arrL = arr.slice(layer + 1)
    const arrR = arr.slice(layer + 2)
    const arrSL1 = arr.slice(0, layer + 1).length
    const arrSR1 = arr.slice(0, layer + 2).length
    const arrSL2 = arr.slice(0, layer + 1).filter((v) => v !== null).length
    const arrSR2 = arr.slice(0, layer + 2).filter((v) => v !== null).length

    node = {
      value: arr[0],
      left: fn21(arrL, x - y + 1, arrSL1, arrSL2),
      right: fn21(arrR, x - y + 2, arrSR1, arrSR2),
    }
  } else if (arr[0] === null) {
    node = null
  }

  return node
}

// console.log(JSON.stringify(fn21(arr21, 0, 0, 0), null, '  '))

let aa = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 5,
        left: {
          value: 6,
          left: {
            value: 9,
          },
          right: {
            value: 10,
          },
        },
        right: {
          value: 7,
          left: {
            value: 10,
          },
          right: {
            value: 11,
          },
        },
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 5,
      left: {
        value: 6,
        left: {
          value: 9,
        },
        right: {
          value: 10,
        },
      },
      right: {
        value: 7,
        left: {
          value: 10,
        },
        right: {
          value: 11,
        },
      },
    },
  },
}

// ===  3  ==================================================================>
const arr31 = [
  { id: 'root', children: [1, 2] },
  { id: 2, children: [4, 5] },
  { id: 1, children: [2, 3] },
  { id: 4, children: [3] },
  { id: 3, children: [5] },
  { id: 5, children: [] },
]

const fn31 = (id) => {
  const node = {
    id,
    children: arr31.find((v) => v.id === id).children.map((v) => fn31(v)),
  }

  return node
}

console.time('fn31')
console.log(JSON.stringify([fn31(1)], null, '  '))
console.timeEnd('fn31')

// ===  3-2  ==================================================================>
const fn32 = (input, rootId) => {
  // arr
  if (Array.isArray(input)) {
    const head = input[0]
    const tail = input.slice(1)
    return [fn32(head)].concat(fn32(tail))
  }

  // number
  if (typeof input === 'number') {
    return { id: input, children: arr31.find((v) => v.id === input) }
  }

  // null
  if (!input) return []
}

console.time('fn32')
console.log(JSON.stringify(fn32(arr31, 'root'), null, '  '))
console.timeEnd('fn32')

let aaa = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 4,
            children: [
              {
                id: 3,
                children: [
                  {
                    id: 5,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 5,
            children: [],
          },
        ],
      },
      {
        id: 3,
        children: [
          {
            id: 5,
            children: [],
          },
        ],
      },
    ],
  },
]
