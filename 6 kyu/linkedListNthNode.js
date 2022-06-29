// Linked Lists - Insert Nth
//
// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.
//
// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below.
// Given a list, an index 'n' in the range 0.length, and a data element, add a new node to the list so that it has the given index.
// InsertNth() should return the head of the list.
//
// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
// You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.
//
// The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head) {
    let length = 1;
    while (head.next) {
      head = head.next;
      length++;
    }
    return length;
  }
  return 0;
}

function insertNth(head, index, data) {
  if (index < 0) throw new Exception();
  if (index > length(head)) throw new Exception();
  if (!head) {
    head = index === 0 ? new Node(data) : new Node(null);
    return head;
  }

  let node = new Node(data),
    curNode = head,
    count = 0;
  if (index === 0) {
    node.next = head;
    return node;
  }

  while (true) {
    if (count + 1 === index) {
      node.next = curNode.next;
      curNode.next = node;
      return head;
    }
    if (!curNode.next) {
      curNode.next = node;
      return head;
    }
    curNode = curNode.next;
    count++;
  }
}
