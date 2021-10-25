const { classnames } = require("utils/string");

describe('tests for classnames func', () => {
  it('returns "classA" when no conditional param is provided', () => {
    const input = {
      default: 'classA',
      conditional: undefined
    }
    const expectedOutput = 'classA'
    const output = classnames(input.default, input.conditional)

    expect(expectedOutput).toEqual(output)
  })

  it('returns "classA" when empty object is passed to condition', () => {
    const input = {
      default: 'classA',
      conditional: {}
    }
    const expectedOutput = 'classA'
    const output = classnames(input.default, input.conditional)

    expect(expectedOutput).toEqual(output)
  })

  it('returns "classA" when empty array is passed to condition', () => {
    const input = {
      default: 'classA',
      conditional: ['classB']
    }
    const expectedOutput = 'classA'
    const output = classnames(input.default, input.conditional)

    expect(expectedOutput).toEqual(output)
  })

  it('returns "classA classB" when condition for "classB" is true', () => {
    const input = {
      default: 'classA',
      conditional: {
        'classB': true
      }
    }
    const expectedOutput = 'classA classB'
    const output = classnames(input.default, input.conditional)

    expect(expectedOutput).toEqual(output)
  })

  it('returns "classA" when condition for "classB" is false', () => {
    const input = {
      default: 'classA',
      conditional: {
        'classB': false
      }
    }
    const expectedOutput = 'classA'
    const output = classnames(input.default, input.conditional)

    expect(expectedOutput).toEqual(output)
  })
})