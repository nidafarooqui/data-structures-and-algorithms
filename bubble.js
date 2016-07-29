/**
 * Created by nidafarooqui on 14/06/2016.
 */
/*
 Bubble SORT
 *** Description
 Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
 *** Exercises
 - Implement bubble sort
 - Identify time complexity
 Optimizations:
 - Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
 - For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
 Variants:
 - Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
 (https://en.wikipedia.org/wiki/Cocktail_sort)
 */

function BubbleSort(list) {
    for(var i =0; i< list.length; i++) {
        for(var j=0; j<list.length; j++) {
            if(list[i] > list[i+1]) {
                swap(list[i],list[i+1]);
            }
        }
    }
}

function swap(a,b) {
    var temp = 0;
    temp = b;
    b = a;
    a = temp;
}