## Problem

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

## Requirements
```
insertionSort should be a function.
insertionSort should return a sorted array (least to greatest).
insertionSort should return an array that is unchanged except for order.
insertionSort should not use the built-in .sort() method.
```
