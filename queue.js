/** Node: node for a queue. */
//
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val)
    //#################
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node
    }
    //#######################
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    if (!this.first) {
      //#################################
      throw new Error('there are no items in the queue')
    } else {
      this.first = this.first.next;
      return this.first;
    }
    this.size--;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.first) {
      return this.first;
    } else {
      console.log('queue is empty');
    }

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    //#############Boolean expression
    return !this.first
  }
}

module.exports = Queue;
