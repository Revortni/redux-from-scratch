export function classnames(baseClass, classMap) {
  const classesToApply = Object.keys(classMap).filter((classKey) => !!classMap[classKey])
  const combinedClass = [baseClass, ...classesToApply].join(' ')

  return combinedClass
}