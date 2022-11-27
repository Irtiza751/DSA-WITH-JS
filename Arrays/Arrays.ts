/**
* @Arrays 
* Create a custom Array data structure with functions
* 1. addItem() // add
* 2. deleteItem() // delete
* 3. getItem() // get
* 4. updateItem() // update
*/


class MyArray<T> {
  private array: { [key: string]: T } = {};
  private length = 0;

  // add item in to the array's last index
  pushItem(item: T) {
    this.array[this.length] = item;
    this.length++;
    return this;
  }

  // delete the item from the array
  // NOTE: if you pass the index it'll delete that particular item else remove the last item.
  popItem(index?: number) {
    if(!index) {
      delete this.array[this.length - 1];
      this.length--;
    } else {
      delete this.array[index];
    }
    return this;
  }

  // get the item of provided index
  getItem(index: number) {
    return this.array[index];
  }

  // update item at a particular index.
  updateItem(index: number, item: T) {
    this.array[index] = item;
    return this;
  }
}


const myArray = new MyArray<string>();

myArray
  .pushItem("Apple 1")
  .pushItem("Mango 2")
  .pushItem("Phone 3")
  .pushItem("IPhone 4")
  .pushItem("IPhone 5");

console.log(myArray.getItem(2));
myArray.popItem(3);
myArray.updateItem(1, "Bannana");

console.log(myArray);

