// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
//   If you want to know more: http://en.wikipedia.org/wiki/DNA
//   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//   More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//   Example: (input --> output)
//
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

const dnaStrand = (dna) => {
  let target = dna.split(/\B/g);
  for (let i = 0; i < target.length; i++) {
    switch (target[i]) {
      case 'A':
        target[i] = 'T';
        continue;
      case 'T':
        target[i] = 'A';
        continue;
      case 'C':
        target[i] = 'G';
        continue;
      case 'G':
        target[i] = 'C';
        continue;
    }
  }
  return target.join("");
}

console.log(dnaStrand("ATTGC"))