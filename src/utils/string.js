export function classnames(baseClass, classMap) {
  if (classMap === undefined || classMap === null) {
    return baseClass
  }

  if (!Object.entries(classMap).length === 0) {
    return baseClass
  }

  if (Array.isArray(classMap)) {
    return baseClass
  }

  const classesToApply = Object.keys(classMap).filter((classKey) => !!classMap[classKey])
  const combinedClass = [baseClass, ...classesToApply].join(' ')

  return combinedClass
}