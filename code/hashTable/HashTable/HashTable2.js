// [TODO] add load factor

import * as U from '$util'
import hashMethod from '../method/hashMethod.js'

class HashTable2 {
  constructor({ size, hash = 'multiplication' }) {
    this.size = size
    this.table = new Array(size)
    this.hash = U.getObjValue(hashMethod, hash)

    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = []
    }
  }

  getItem(key) {
    const index = this.hash(key, this.size)

    if (this.table[index].length === 0) return null

    return this.table[index].find((v) => v.key === key) ?? null
  }

  getValue(key) {
    return this.getItem(key)?.value ?? null
  }

  setItem({ key, value }) {
    const index = this.hash(key, this.size)

    this.table[index].push({ key, value })

    return
  }

  printAll() {
    console.log(this.table)
  }
}

export default HashTable2
