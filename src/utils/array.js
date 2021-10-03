export function insertItem(array, value, index) {
  let newArray = array.slice()
  newArray.splice(index, 0, value)
  return newArray
}

export function removeItem(array, index) {
  let newArray = array.slice()
  newArray.splice(index, 1)
  return newArray
}

