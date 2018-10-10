/**
 *
 * @param  {...Function} args
 */
export const compose = (...args) => payload =>
  args.reduce((buf, fn) => fn(buf), payload)

export const getWidth = (colNum, margin = 0, padding = 0, type = 'card') => {
  if (colNum === 1) {
    return type === 'card' ? '70%' : 'calc(100% - 80px)'
  }
  return `calc(${(1 / colNum) * 100}% - ${margin * 2}px - ${padding * 2}px)`
}
