// progfun1

// === Week 1 ===

// # Call by value vs. Call by name
// Call by value advantage: evaluates every function argument once
// Call by name advantage: function argument is not evaluated if the paramter is unused
// Both reduce to same value if 
//   1. the reduced expression consists of pure functions
//   2. both evaluations terminate
//
// ## Example:
// def first(x: Int, y: Int) = x
//   Call by name: first(1, loop) 
//   => 1
//   Call by value: first(1, loop)
//   => Infinite loop

// ## Scala is usually call-by-value
// If the type of a function parameter starts with => it uses call-by-name
// Example: 
// def constOne(x: Int, y: => Int) = 1 

// ## def vs val
// def loop: Boolean = loop
// def x = loop
// ^ is fine
// val x = loop
// ^ stackoverflow!!!

