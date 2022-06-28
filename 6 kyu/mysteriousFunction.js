// Among the ruins of an ancient city a group of archaeologists found a mysterious function with lots of HOLES in it called getNum(n)
// (or get_num(n) in ruby, python, or r). They tried to call it with some arguments. And finally they got this journal:
//
//   getNum(300) #-> returns 2
// getNum(90783) #-> returns 4
// getNum(123321) #-> returns 0
// getNum(89282350306) #-> returns 8
// getNum(3479283469) #-> returns 5
// The archaeologists were totally stuck with this challenge. They were all in desperation but then....
// came YOU the SUPER-AWESOME programmer. Will you be able to understand the mystery of this function and rewrite it?

let getNum = function (n) {
  let str = n.toString(),
    sum = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '0':
      case '6':
      case '9':
        sum++;
        break;
      case '8':
        sum += 2;
        break;
    }
  }
  return sum;
};
