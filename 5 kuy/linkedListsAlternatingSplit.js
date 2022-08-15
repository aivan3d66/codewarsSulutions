// Linked Lists - Alternating Split
//
// Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists.
// The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.
//
// var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
// alternatingSplit(list).first === 1 -> 3 -> 5 -> null
// alternatingSplit(list).second === 2 -> 4 -> null

// For simplicity, we use a Context object to store and return the state of the two linked lists.
// A Context object containing the two mutated lists should be returned by AlternatingSplit().
//
//   If the passed in head node is null/None/nil or a single node, throw an error.
