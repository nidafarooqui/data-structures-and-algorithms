/**
 * Created by nidafarooqui on 14/06/2016.
 */
function Queue(capacity) {
    // implement me...
    this.capacity = capacity;
    this.item = {};
    this.head = 0;
    this.tail = 0;

}

Queue.prototype.enqueue = function(value) {
    // implement me...
    this.counter++;
    if(this.capacity === 6)
    {
        console.log("Max capacity already reached. Remove a house member before adding a new one.");
        return;
    }

    //push value
    this.item[this.tail++] = value;
    this.capacity++;


    for(var i = 0; i< this.capacity; i++) {
        console.log(this.item[i]);
    }
    //console.log(this.item[this.counter]);

};
// Time complexity:

Queue.prototype.dequeue = function() {
    // implement me...
    var poppedItem = this.item[this.head];
    delete this.item[this.head];
    //update head pointer
    if(this.head < this.tail) {
        this.head++;
    }

    this.capacity--;
    return poppedItem;
};
// Time complexity:

Queue.prototype.peek = function() {
    // implement me...
    return this.item[this.head];
};

Queue.prototype.count = function() {
    // implement me...
    return this.capacity;
};
// Time complexity:

var house = new Queue(1);
house.enqueue("Baba");
house.enqueue("Mama");
house.enqueue("Nida");
house.enqueue("Rimsha");
house.enqueue("Sana");
house.enqueue("Ozair");
console.log("The number of people in the house are " + house.count());
console.log("The first member of the house is " + house.peek());
var item = house.dequeue();
console.log(item  + " is popped.");
console.log("The first member of the house is " + house.peek());
console.log("The number of people in the house are " + house.count());
house.enqueue("baby");
console.log("The number of people in the house are " + house.count());
house.enqueue("Ozair");

