class GroupResult {
  constructor(name) {
    this.name = name
  }

  finalGroup() {
    if (["a", "b", "c", "d"].includes(this.name.toLowerCase().charAt(0))) {
      return this.name + " in a first group"
    }
    if (["e", "f", "g", "h", "i"].includes(this.name.toLowerCase().charAt(0))) {
      return this.name + " in a second group"
    }
    return this.name + " in a last group"
  }
}

export default GroupResult
