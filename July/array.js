
/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

 class Array {

   constructor(){

   this.container = {};
   this.nextIndex = 0;
  //  Array.push(1, 'second item', true, 'delete me', 'me too');
  //  Array.pop([2]);
  //  Array.get(4);
  //  Array.delete(3)
  //  Array.shift([2, 3, 4]);

    }
    push(addItem) {
      this.container[this.nextIndex] =addItem;
      // this.nextIndex++;
      // this.nextIndex = this.nextIndex + 1;
      this.nextIndex += 1;
    }
    pop() {

    }
    get(index) {

    }
    delete(index) {

    }
  }

  console.log(Array);

const test = new Array();
console.log(test);
test.push('something')
console.log(test); // <--- 'something'
test.push('another thing')
console.log(test); // <--- 'something' & 'another thing'
