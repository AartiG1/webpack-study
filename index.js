import {createList} from "./list";

var list = createList();

list.add(2); // 2

list.add([4, 5,6]);
list.print(); // 2,4,5,6