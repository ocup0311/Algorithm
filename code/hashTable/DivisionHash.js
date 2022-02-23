class DivisionHash {
  constructor(size) {
    this.size = size
    this.table = new Array(size)

    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = []
    }
  }

  hash(key) {
    return key % this.size
  }

  get(key) {
    const index = this.hash(key)

    if (this.table[index].length === 0) return null

    return this.table[index].find((v) => v.key === key) ?? null
  }

  set({ key, value }) {
    const index = this.hash(key)

    this.table[index].push({ key, value })

    return
  }

  printAll() {
    console.log(this.table)
  }
}

export default DivisionHash
