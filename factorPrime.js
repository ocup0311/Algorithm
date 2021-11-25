// ===================== main =====================

const primeArr = [2, 3, 5, 7, 11, 13, 17, 19]
let temp = 21

const nthPrime = (nth) => {
  const isPrime = (num) => {
    if (num !== Math.round(num) || num < 2) return false

    for (let n = 0; n < primeArr.length; n++) {
      if (primeArr[n] > Math.sqrt(num)) return true
      if (num % primeArr[n] === 0) return false
    }
    return true
  }

  while (nth > primeArr.length) {
    if (isPrime(temp)) primeArr.push(temp)
    temp = temp + 2
  }

  return primeArr[nth - 1]
}

function factorPrime(num) {
  const factorPrimeArr = []
  let temp2 = num
  let x = 1

  const diviseByPrime = (dividend, divisor) => {
    if (dividend % divisor !== 0) return dividend
    return diviseByPrime(dividend / divisor, divisor)
  }

  while (temp2 > 1) {
    let y = diviseByPrime(temp2, nthPrime(x))
    if (y !== temp2) {
      temp2 = y
      factorPrimeArr.push(primeArr[x - 1])
    }
    x++
  }

  return factorPrimeArr
}

// ===================== test =====================

console.log(factorPrime(660 * 23 * 39 * 12345 * 96347))

// ===================== sample =====================

// console.log(factorPrime(660 * 23 * 39 * 12345 * 96347*179424673))

// <--- Last few GCs --->

// [92803:0x1046a5000]   108590 ms: Scavenge 632.2 (665.4) -> 632.2 (665.4) MB, 14.7 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure
// [92803:0x1046a5000]   193882 ms: Scavenge 947.8 (981.0) -> 947.8 (981.0) MB, 25.2 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure
// [92803:0x1046a5000]   347974 ms: Scavenge 1421.3 (1454.5) -> 1421.3 (1454.5) MB, 31.1 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure

// <--- JS stacktrace --->

// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
//  1: 0x1012d84c5 node::Abort() (.cold.1) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  2: 0x1000a5d59 node::Abort() [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  3: 0x1000a5ebf node::OnFatalError(char const*, char const*) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  4: 0x1001e8007 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  5: 0x1001e7fa3 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  6: 0x100394ea5 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  7: 0x10036cc26 v8::internal::Factory::NewUninitializedFixedArray(int) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  8: 0x1004f141d v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastPackedSmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)0> >::GrowCapacity(v8::internal::Handle<v8::internal::JSObject>, unsigned int) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
//  9: 0x1006c3b44 v8::internal::Runtime_GrowArrayElements(int, unsigned long*, v8::internal::Isolate*) [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]
// 10: 0x100a709b9 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/Users/huangjiawei/.nvm/versions/node/v14.14.0/bin/node]

// [Done] exited with code=null in 628.283 seconds
