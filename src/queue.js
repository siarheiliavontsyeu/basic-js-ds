const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.length = 0;
    this._head = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this._head === null) {
      this._head = node;
    } else {
      let last = this._head;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
    this.length++;
  }

  dequeue() {
    const top = this._head;
    const { value, next } = top;
    top.value = next.value;
    top.next = next.next;
    this.length--;
    return value;
  }
}

module.exports = {
  Queue,
};
