const helper = {
  randItem(items) {
    return items[Math.floor(Math.random() * items.length)]
  }
}

export { helper as default }
