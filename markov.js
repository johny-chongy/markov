/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */
  getChains() {
    let resultChain = {};
    for (let index=0; index<this.words.length; index++) {
      if (resultChain[this.words[index]] === undefined) {
        resultChain[this.words[index]] = [this.words[index+1]];
      } else {
        resultChain[this.words[index]].push(this.words[index+1]);
      }
    }

    return resultChain;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */
  getText() {
    let checkWord = this.words[0];
    let allText = [];

    while (checkWord !== undefined) {
      allText.push(checkWord);

      let checkArray = this.chains[checkWord];
      let randIndex = Math.floor(Math.random() * checkArray.length);
      checkWord = checkArray[randIndex];
    }

    return allText.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};
