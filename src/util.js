export function pluralize (num, item, suffix = 's') {
  if (num === 1) {
    return item
  } else {
    return item + suffix
  }
}
