// Given a string of words, you need to find the highest scoring word.
//
//   Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//   You need to return the highest scoring word as a string.
//
//   If two words score the same, return the word that appears earliest in the original string.
//
//   All letters will be lowercase and all inputs will be valid.

function high(x) {
  let scores = [],
    words = x.split(' ');
  for (let i = 0; i < words.length; i++) {
    scores.push({
      "word": words[i],
      "value": wordScore(words[i])
    })
  }
  scores.sort((a, b) => b.value - a.value);
  console.log(scores);
  return scores[0].word;
}
high.alphabet = "abcdefghijklmnopqrstuvwxyz";

function wordScore(word) {
  let spl = word.split(''),
    score = 0;
  spl.forEach(e => score += high.alphabet.indexOf(e) + 1);
  return score;
}
