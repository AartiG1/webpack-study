// named export
export function createList() {
    return new MyList();
}

// constructor fn
function MyList() {
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