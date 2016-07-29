/**
 * Created by nidafarooqui on 15/06/2016.
 */
//[3, 7, 8, 5, 2, 1, 9, 5, 4]


/*
 MERGE SORT
 *** Description
 Like merge sort, quick sort employs a divide and conquer strategy.
 It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.
 *** Exercises
 - Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
 - Implement quicksort
 - Identify time complexity
 - Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)
 *** Extra Credit
 Variants:
 - Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)
 */
function quicksort(arr, first, last) {
    if(first === undefined) first = 0;
    if(last === undefined) last = arr.length - 1;
    if (first < last) {
        var loc = partition(arr, first, last);
        quicksort(arr, first, loc - 1);
        quicksort(arr, loc + 1, last);
    }
    return arr;
};


function partition(arr, first, last) {
    var pivotLoc = last;
    var pivot = arr[pivotLoc];
    var index = first;

    for (var i=first; i<last; i++) {
        if(pivot > arr[index]) {
            index++;
        }
        else {
            swap(arr, index, pivotLoc);
            pivotLoc--;
            swap(arr, index, pivotLoc);
            
        }

    }
    return index;
};

function swap(arr, i1, i2) {
    var temp = 0;
    temp = arr[i2];
    arr[i2] = arr[i1];
    arr[i1] = temp;
};

var myArray = [3, 7, 8, 5, 2, 1, 9, 5, 4];
var sortedArray = quicksort(myArray, 0, myArray.length-1);

console.log(sortedArray);