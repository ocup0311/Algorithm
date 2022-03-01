import { getKey, getValue } from './Node.js'

const fn = (node) =>
  node.edges.map(({ node1, node2 }) => {
    if (node1 === node) return node2
    return node1
  })

const normal = (node) => {
  return fn(node)
}

const key_small = (node) => fn(node).sort((a, b) => getKey(a) - getKey(b))

const key_big = (node) => fn(node).sort((a, b) => getKey(b) - getKey(a))

const alpha_order = (node) =>
  fn(node).sort((a, b) => {
    if (getValue(a) > getValue(b)) return 1
    if (getValue(a) < getValue(b)) return -1
  })

const alpha_reverse = (node) =>
  fn(node).sort((a, b) => {
    if (getValue(a) > getValue(b)) return -1
    if (getValue(a) < getValue(b)) return 1
  })

const weight_small = (node) => {
  const edges = node.edges.sort((a, b) => a.weight - b.weight)

  const nodes = edges.map(({ node1, node2 }) => {
    if (node1 === node) return node2
    return node1
  })

  return nodes
}

const weight_big = (node) => {
  const edges = node.edges.sort((a, b) => b.weight - a.weight)

  const nodes = edges.map(({ node1, node2 }) => {
    if (node1 === node) return node2
    return node1
  })

  return nodes
}

export default {
  normal,
  key_small,
  key_big,
  alpha_order,
  alpha_reverse,
  weight_big,
  weight_small,
}
