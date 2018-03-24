// ES 6 modules
import {createList} from "./list";

// nodejs -common js
// var createList =  require("./list").createList;


var list = createList();
list.add(2); // 2
list.add([3,4,5]);
list.add({
    a: 4,
    b: 4
});

list.print(); // 2,4,5,6

// new list
var list2 = createList();
console.log("pune", list2)