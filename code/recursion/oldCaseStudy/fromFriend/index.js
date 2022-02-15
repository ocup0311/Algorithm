const idsToChildren = (input) => {
  const idToItem = (id) => {
    const item = _.find(items, { id })
    if (_.isEmpty(item.children)) return item
    return {
      ...item,
      children: _.concat(
        idsToChildren(_.head(item.children)),
        idsToChildren(_.tail(item.children))
      ),
    }
  }

  // toChildren
  if (_.isArray(input)) {
    if (_.isEmpty(input)) return []
    const root = _.find(input, { id: 'root' })
    if (root) {
      return [{ ...root, children: idsToChildren(root.children) }]
    }
    const head = _.head(input)
    return _.concat(idToItem(head), idsToChildren(_.tail(input)))
  }
  if (_.isNumber(input)) return idToItem(input)
}

const root = _.cloneDeep(_.find(items, { id: 'root' }))
// const result = [{...root, children: idsToChildren(root.children)}]
const result = idsToChildren([root])
