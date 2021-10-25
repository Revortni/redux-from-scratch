export function insertItem(array, value, index) {
  let newArray = array.slice()
  newArray.splice(index, 0, value)
  return newArray
}

export function removeItem(array, index) {
  let newArray = array.slice()
  const arrayLength = array.length
  const actualIndex = index >= 0 ? index : (arrayLength - Math.abs(index))

  if (actualIndex > arrayLength) {
    throw new Error("index out of range")
  }

  newArray.splice(index, 1)
  return newArray
}

