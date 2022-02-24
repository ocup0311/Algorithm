// function
const collisionMethod = {
  separate_chaining: (table) => {
    for (let i = 0; i < table.length; i++) {
      table[i] = []
    }
  },

  linear_probing: (table) => {},

  quadratic_probing: (table) => {},
}

export default collisionMethod
