// 凱薩密碼：將字母位移 n 個

const _key = 3

// ===================== input =====================

const input1 = 'HOW ARE YOU?'
const input2 = "WHAT'S UP?"
const input3 = 'I LOVE YOU.'

// ===================== main =====================

function buildCaesarCipher(key) {
  const alphabetArr = [
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

  return (input) => {
    const inputArr = input.split('')
    const outputArr = []

    for (let i = 0; i < inputArr.length; i++) {
      const index = alphabetArr.indexOf(inputArr[i])

      if (index === -1) {
        outputArr.push(inputArr[i])
        continue
      }

      const modifiedIndex = (index + key) % 26

      outputArr.push(alphabetArr[modifiedIndex])
    }

    const output = outputArr.reduce((total, value) => total.concat(value), '')

    return output
  }
}

// ===================== test =====================

const caesarCipher = buildCaesarCipher(_key)

const test = (input) => {
  const result = caesarCipher(input)

  console.log(`======= ${input} =======`)
  console.log(result)
}

test(input1)
test(input2)
test(input3)

// text.charCodeAt(0)
// 65
// 90
// 97
// 122
