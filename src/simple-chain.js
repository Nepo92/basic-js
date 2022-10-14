const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  get getChain() {
      return this.chain;
  },
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`);

      return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position)) {
      if (position < 1 || position > this.getLength()) {
        this.chain.length = 0;
        throw new Error("You can't remove incorrect link!");
      }

      const index = position - 1;
      this.chain.splice(index, 1);
  
      return this;
    }

    this.chain.length = 0;
    throw new Error("You can't remove incorrect link!")
  },
  reverseChain() {
      this.chain = [...this.chain.reverse()];

      return this;
  },
  finishChain() {
      const chain = this.getChain.join('~~');

      this.chain.length = 0;

      return chain;
  }
};

module.exports = {
  chainMaker
};
