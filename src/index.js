import { linkedlist } from "./linkedlist";

// example uses class syntax - adjust as necessary
const list = new linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
