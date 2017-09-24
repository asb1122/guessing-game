class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.middle = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
      this.middle = (min + max) / 2;
    }

    guess() {
      this.middle = Math.ceil((this.max + this.min) / 2);
      console.log('min ' + this.min + ' max' + this.max + 'mid' + this.middle);
      return this.middle;
    }

    lower() {
      this.max = this.middle;
    }

    greater() {
      this.min = this.middle;
    }
}

module.exports = GuessingGame;
