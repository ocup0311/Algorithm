// 凱薩密碼：將字母位移 n 個

const _key = 3
const A = 65
const Z = 90
const a = 97
const z = 122

// ===================== input =====================

const input1 = 'How are you?'
const input2 = "What's Up?"
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

  // function
  const toIndex = (char) => char.charCodeAt(0)
  const toChar = (index) => String.fromCharCode(index)

  // return
  return (input) => {
    let output = ''

    for (let i = 0; i < input.length; i++) {
      const index = toIndex(input[i])

      if (index >= A && index <= Z) {
        const modifiedIndex = ((index - A + key) % 26) + A
        output = output.concat(toChar(modifiedIndex))
        continue
      }

      if (index >= a && index <= z) {
        const modifiedIndex = ((index - a + key) % 26) + a
        output = output.concat(toChar(modifiedIndex))
        continue
      }

      output = output.concat(input[i])
    }

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
