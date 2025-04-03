import node from "./node";

class linkedlist {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead == null) {
      this.listHead = new node(value);
    } else {
      let tmp = this.listHead;
      while (tmp.next != null) tmp = tmp.next;
      tmp.next = new node(value);
    }
  }

  prepend(value) {
    let tmp = this.listHead;
    if (this.listHead == null) {
      this.listHead = new node(value);
    } else {
      this.listHead = new node(value);
      this.listHead.next = tmp;
    }
  }

  size() {
    let length = 0;
    let tmp = this.listHead;
    while (tmp) {
      length++;
      tmp = tmp.next;
    }
    return length;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let tmp = this.listHead;
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    return tmp;
  }

  at(index) {
    let tmp = this.listHead;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  pop() {
    let tmp = this.listHead;
    while (tmp.next.next != null) {
      tmp = tmp.next;
    }
    let res = tmp.next;
    tmp.next = null;
    return res;
  }

  contains(value) {
    let tmp = this.listHead;
    while (tmp) {
      if (tmp.value == value) return true;
      tmp = tmp.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let tmp = this.listHead;
    while (tmp) {
      if (tmp.value == value) return index;
      index++;
    }
    return null;
  }

  toString() {
    let res = "";
    let tmp = this.listHead;
    while (tmp) {
      res += "( " + tmp.value + " )" + " -> ";
      tmp = tmp.next;
    }
    res += "null";
    return res;
  }
}

export { linkedlist };
