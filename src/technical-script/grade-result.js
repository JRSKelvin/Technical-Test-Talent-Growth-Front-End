class GradeResult {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  finalGrade() {
    if (this.score >= 80 && this.score <= 100) {
      return this.name + " got an A grade"
    }
    if (this.score >= 65 && this.score <= 79) {
      return this.name + " got an B grade"
    }
    if (this.score >= 50 && this.score <= 64) {
      return this.name + " got an C grade"
    }
    if (this.score >= 35 && this.score <= 49) {
      return this.name + " got an D grade"
    }
    if (this.score >= 1 && this.score <= 34) {
      return this.name + " got an E grade"
    }
    return "Invalid score"
  }
}

export default GradeResult
