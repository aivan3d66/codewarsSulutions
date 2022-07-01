// You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:
//
//   "1000.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10"
// The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).
//
// First you have to clean the lines keeping only letters, digits, dots and spaces.
//
//   Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):
//
// "Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65"
// On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.
//
// Notes
// See input examples in Sample Tests.
//   It may happen that one (or more) line(s) is (are) blank.
//   Round to 2 decimals your calculated results (Elm: without traling 0)
// The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
//   R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.

function balance(book) {
  let arrBook = bookToArray(book);

  arrBook[0][0] = numberFormat(arrBook[0][0], 2);
  let balance = parseFloat(arrBook[0][0]),
    avg = 0;

  for (let i = 1; i < arrBook.length; i++) {
    arrBook[i][1] = arrBook[i][1].replace(/\W+/g, '');
    arrBook[i][2] = numberFormat(arrBook[i][2], 2);
    balance -= +arrBook[i][2];
    avg += +arrBook[i][2];
    arrBook[i].push('Balance ' + balance.toFixed(2));
  }

  arrBook.push(
    [`Total expense  ${(+arrBook[0][0] - balance).toFixed(2)}`], [`Average expense  ${(avg / (arrBook.length - 1)).toFixed(2)}`]
  );
  arrBook[0][0] = 'Original Balance: ' + arrBook[0][0];
  console.log(arrBook);

  return bookToString(arrBook);

  function bookToString(array) {
    return array.map(e => e.join(' ')).join('\r\n');
  }

  function bookToArray(book) {
    return book.split('\n')
      .map(e => e.split(' '))
      .filter(e => e.toString() !== '');
  }

  function numberFormat(str, cur = 2) {
    str = str.replace(/[^(\d+\.\d+)]/g, '');
    str = (+str).toFixed(cur);
    return str;
  }
}
