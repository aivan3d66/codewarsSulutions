// Input
// a string strng of n positive numbers (n = 0 or n >= 2)
// Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.
//
// Two numbers are "close" if the difference of their weights is small.
//
//   Task:
// For each number in strng calculate its "weight" and then find two numbers of strng that have:
//
//   the smallest difference of weights ie that are the closest
// with the smallest weights
// and with the smallest indices (or ranks, numbered from 0) in strng
// Output:
//   an array of two arrays, each subarray in the following format:
//   [number-weight, index in strng of the corresponding number, original corresponding number in strng]
//
// or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)
//
// or a (char*) in C or a string in some other languages mimicking an array of two subarrays or a string
//
// or a matrix in R (2 rows, 3 columns, no columns names)
//
// The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.
