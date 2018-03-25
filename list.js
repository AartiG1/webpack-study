// named export
export function createList() {
    return new MyList();
}

export class MyListES6 {
    constructor() {
        this.arr = []; 
    }

    add(val) {
        this.arr.push(val);
    }

    print() {
        console.log(this.arr);
    }

    flatten() {
        // this.arr
    }
    uniq() {
        // 
        // this.arr
    }

    pluck(key) {}

    reject(predicateFn) {}
}

// constructor fn and default export
export default function MyList() {
    this.arr = [];
}

// methods
// val - primitive - add 
// val - [] - append the arr
MyList.prototype.add = function(val) {
    this.arr.push(val);
}

MyList.prototype.print = function () {
    console.log(this.arr);
}

// 1. head fn -> returns first element -> -1
MyList.prototype.head = function () {
    if(!this.arr) return -1;
    return (this.arr[0]);
}
// 2. tail fn -> return last element -> -1
// 3. searchFromEnd fn-> index of element from the end of arr
// 4. add fn -> no param -> fail safe
//  --------- new assignment with array of objects-----------

// 6. reject - > reject(predicateFn,) 
// 7. pluck(propertyName) 

//  --------- new assignment with array of primitives-----------
// 8 uniq([1, 2, 1, 4, 1, 3]); --> [1, 2, 4, 3]
// 9. flatten([1, [2], [3, [[4]]]]); --> [1, 2, 3, 4]