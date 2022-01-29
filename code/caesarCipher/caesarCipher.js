// 凱薩密碼：將字母位移 n 個

const _key = 3
const char_A = 65
const char_Z = 90
const char_a = 97
const char_z = 122
const ENCODE = 'encode'
const DECODE = 'decode'

// ===================== input =====================

const input1 = 'How are you?'
const input2 = "What's Up?"
const input3 = 'I LOVE YOU.'

// ===================== main =====================

function buildCaesarCipher(encodeKey, action = ENCODE) {
  const valuePool = [
    [char_A, char_Z],
    [char_a, char_z],
  ]

  // function
  const mod = (dividend, divisor) =>
    dividend >= 0
      ? dividend % divisor
      : (dividend % divisor) + Math.abs(divisor)
  const toIndex = (char) => char.charCodeAt(0)
  const toChar = (charIndex, key) =>
    valuePool.reduce((t, v) => {
      if (charIndex >= v[0] && charIndex <= v[1]) {
        const modifiedIndex =
          mod(charIndex - v[0] + key, v[1] - v[0] + 1) + v[0]
        return String.fromCharCode(modifiedIndex)
      }

      return t
    }, null)
  const process = (input, key) =>
    input.split('').reduce((t, v) => t + (toChar(toIndex(v), key) || v), '')

  // return
  return (input) =>
    action === ENCODE ? process(input, encodeKey) : process(input, -encodeKey)
}

// ===================== test =====================

const caesarEncode = buildCaesarCipher(_key, ENCODE)
const caesarDecode = buildCaesarCipher(_key, DECODE)

const test = (input) => {
  const result1 = caesarEncode(input)
  const result2 = caesarDecode(result1)

  console.log(`======= ${input} =======`)
  console.log(`Encode: ${result1}`)
  console.log(`Decode: ${result2}`)
}

test(input1)
test(input2)
test(input3)
