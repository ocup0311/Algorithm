import * as U from '$util'

export const builtInput = (num) => {
  const A_Z = [
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
  const result = []

  for (let i = 0; i < num; i++) {
    const y = U.makeRandomIndex(26)

    result.push(`${A_Z[y]}${i}`)
  }

  return result
}

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`======= ${input} =======`)
  console.log(`SWAP ${result.step} times`)
  console.log(result.output)
}
