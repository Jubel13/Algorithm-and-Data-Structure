//?  Three rules to build recursion :
//* 1. Identify the base case => code that tells program when to stop
//* 2. Identify the recursive case
//* 3. Get closer and closer and return what needed. Usually you have 2 returns, for base case and recursive case

//! Recursion vs iterative
//? Anything that can be done recursively, can be done iteratively
//* Recursion => Keep code DRY, and readable
//! Recursion => large stack

//! When to use recursion:
//* When it gets to complicated problems, like traversing trees and graph, recursion is usefull
//* When sorting, there is recursion too

//! New rule:
//? Every time you are using a tree or converting someting into a tree, consider recursion
//* Three things in interview that may trigger recursive solution:
//* 1. A problem can be divided into subproblems that is smaller and smaller
//* 2. Each of this instances in subproblems identical in nature, example identical calculations
//* 3. The solution of each subproblems can be combined to solve the problem at hand

//! Divide and conquer using recursion