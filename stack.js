/**
 * Created by nidafarooqui on 14/06/2016.
 */
function Stack(capacity) {
    // implement me...
    this.capacity = capacity;
    this.item = {};
    this.counter = -1;
}

Stack.prototype.push = function(value) {
    // implement me...
    this.counter++;
    if(this.capacity === 6)
    {
        console.log("Max capacity already reached. Remove a house member before adding a new one.");
        return;
    }
    this.item[this.counter] = value;
    this.capacity = this.counter + 1;
    console.log(this.item[this.counter]);
};
// Time complexity:

Stack.prototype.pop = function() {
    // implement me...
    var poppedItem = this.item[this.counter];
    delete this.item[this.counter];
    this.counter--;
    this.capacity = this.counter + 1;
    return poppedItem;
};
// Time complexity:

Stack.prototype.peek = function() {
    // implement me...
    return this.item[this.counter];
};
// Time complexity:

Stack.prototype.count = function() {
    // implement me...
    return this.capacity;
};
// Time complexity:

Stack.prototype.contains = function(value) {

    for (var variable in this.item) {
        if (this.item[variable] === value) {
            return true;
        }
    }
    return false;
};
//Time Complexity

Stack.prototype.until = function(value) {
    for (var i = 0; i < this.capacity; i++) {
        if (this.item[i] === value) {
            return i+1;
        }
    }
    console.log("It doesn't exist.");
};
//Time Complexity
var house = new Stack(1);
house.push("Baba");
house.push("Mama");
house.push("Nida");
house.push("Rimsha");
house.push("Sana");
house.push("Ozair");
console.log("The number of people in the house are " + house.count());
console.log("The last member of the house is " + house.peek());
var item = house.pop();
console.log(item  + " is popped.");
console.log("The last member of the house is " + house.peek());
console.log("The number of people in the house are " + house.count());
house.push("baby");
console.log("The number of people in the house are " + house.count());
house.push("Ozair");
console.log(house.contains("Mama"));
console.log("Number of times popped to get baby " + house.until("baby"));

/**Create a contains method to check if a value is in the stack:
    myStack.contains('findme')
        => true/false
What's the time complexity?
Create an until method to get the number of pops until you get to a certain value:
    stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
    => 4
 **/