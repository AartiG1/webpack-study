// ES 6 modules
import MyList, { createList, MyListES6} from "./list";

// nodejs -common js
// var createList =  require("./list").createList;


var list = createList();
list.add(2);
// ---------------------- ES6 Tests --------


const listes6 = new MyListES6();

listes6.add(3);
listes6.add(4);
listes6.print();




// 2
// list.add([3,4,5]);
// list.add({
//     a: 4,
//     b: 4
// });

list.print(); // 2,4,5,6

// new list
// var list2 = createList();
// console.log("pune", list2)

// ------ Array of person /////

const peopleList = new MyListES6();

peopleList.add({
    name: "pune",
    age: 32,
    rollNo: 22
});

peopleList.add({
    name: "university",
    age: 4,
    rollNo: 24
});

peopleList.pluck('name') // -> ["pune", "university"] 
peopleList.reject(function() {
    return this.rollNo > 22;
})
// ---> [{
// name: "pune",
//     rollNo: 22
// }]