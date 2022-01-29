// 比對兩個 string ，是否有一樣的字母組成。
// input:'abbcd' & 'bcbda' output: true
// input:'abbcd' & 'abbcc' output: false
// input:'abbcd' & 'abbcdd' output: false
// O(n)
// ===================== input =====================

const builtInput = ({ amount1, amount2 }, guaranteed = false) => {
  // function
  const builtStr = (amount) => {
    const sample = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]

    let output = ''

    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(Math.random() * 26)

      output = output + sample[randomIndex]
    }

    return output
  }

  const messupStr = (str) => {
    let output = ''

    while (str.length > 0) {
      const randomIndex = Math.floor(Math.random() * str.length)
      output = output + str[randomIndex]
      str = str.slice(0, randomIndex) + str.slice(randomIndex + 1, str.length)
    }

    return output
  }

  // call
  const str1 = builtStr(amount1)
  let str2 = ''

  if (guaranteed) {
    str2 = messupStr(str1)
  } else {
    str2 = builtStr(amount2)
  }

  return { str1, str2 }
}

const input1 = builtInput({ amount1: 5, amount2: 5 })
const input2 = builtInput({ amount1: 20, amount2: 20 }, true)
const input3 = builtInput({ amount1: 7, amount2: 8 })

// ===================== main =====================

function frequency({ str1, str2 }) {
  const itemList = {}

  // function
  const addItemToList = (str) => {
    for (let i = 0; i < str.length; i++) {
      itemList[str[i]] = itemList[str[i]] + 1 || 1
    }
  }

  const minusItemToList = (str) => {
    for (let i = 0; i < str.length; i++) {
      itemList[str[i]] = itemList[str[i]] ? itemList[str[i]] - 1 : -1
    }
  }

  // call
  addItemToList(str1)
  minusItemToList(str2)

  for (let item in itemList) {
    if (itemList[item] !== 0) return false
  }

  return true
}

// ===================== test =====================

const test = (input) => {
  const result = frequency(input)

  console.log(`------- Compare two string -------`)
  console.log(`string1: ${input.str1}`)
  console.log(`string2: ${input.str2}`)
  console.log(`Is the frequency same: ${result}`)
}

test({ str1: 'abbcd', str2: 'bcbda' })
test(input1)
test(input2)
test(input3)
