const getId = () => "_" + Math.random().toString(36).substr(2, 9)

const include = (list, condition) => {
  let i = 0
  while (i < list.length) {
    if (condition(list[i])) return true
    i++
  }
  return false
}

const getInclude = (list, condition) => {
  let i = 0
  while (i < list.length) {
    if (condition(list[i])) return i
    i++
  }
  return -1
}

const twoNumbers = (nb) => {
  return parseFloat(parseFloat(nb).toFixed(2))
}
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

export { getId, include, getInclude, twoNumbers, deepCopy }
