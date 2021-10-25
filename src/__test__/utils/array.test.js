const { insertItem, removeItem } = require("utils/array");

describe('tests for insertItem', () => {
  it("returns [1,3,2] when 3 is inserted at index 1 of [1,2]", () => {
    const input = {
      array: [1, 2],
      newValue: 3,
      atIndex: 1
    }
    const expectedOutput = [1, 3, 2]
    const output = insertItem(input.array, input.newValue, input.atIndex)

    expect(expectedOutput).toEqual(output)
  })
})



describe('tests for removeItem', () => {
  it("returns [2] when element at index 0 if removed [1,2]", () => {
    const input = {
      array: [1, 2],
      atIndex: 0
    }
    const expectedOutput = [2]
    const output = removeItem(input.array, input.atIndex)

    expect(expectedOutput).toEqual(output)
  })

  it("returns [1] when element at index -1 if removed from [1,2]", () => {
    const input = {
      array: [1, 2],
      atIndex: -1
    }
    const expectedOutput = [1]
    const output = removeItem(input.array, input.atIndex)

    expect(expectedOutput).toEqual(output)
  })

  it("returns [1,2,3,5] when element at index 3 if removed from [1,2,3,4,5]", () => {
    const input = {
      array: [1, 2, 3, 4, 5],
      atIndex: 3
    }
    const expectedOutput = [1, 2, 3, 5]
    const output = removeItem(input.array, input.atIndex)

    expect(expectedOutput).toEqual(output)
  })

  it("returns [1,2,3,5] when element at index 3 if removed from [1,2,3,4,5]", () => {
    const input = {
      array: [1, 2, 3, 4, 5],
      atIndex: -2
    }
    const expectedOutput = [1, 2, 3, 5]
    const output = removeItem(input.array, input.atIndex)

    expect(expectedOutput).toEqual(output)
  })
})