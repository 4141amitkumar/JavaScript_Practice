// JAVASCRIPT EXECUTION CONTEXT
// Execution Context is the environment in which JavaScript code is evaluated and executed. It stores variables, functions, and the value of this.

// There are two types of Execution Context]
// 1. Global Execution Context (GEC):     (Automatically create hota hai jab program start hota hai)
//    Created by default when JavaScript starts executing.
//    Stores global variables and functions.
//    The value of 'this' refers to the global object (this value is window object in browsers,    global in Node.js).
//    Only one GEC exists at a time.


// 2. Function Execution Context (FEC):     (Jab bhi koi function call hota hai, naya context banta hai)
//    Created every time a function is called.
//    Each function call gets its own context.

// 3. Eval Execution Context(extra)
//    Created when code is executed inside eval() (rarely used in practice).


//**************************************************************/

// 2 Phases of execution

//1. Memory Creation Phase or just 'Creation Phase'
//   Memory is allocated for variables and functions.
//   All variables are initialized with undefined.
//   Functions are hoisted with their definitions. (Function declarations ho jaate hain)
//   this is determined.


//2. Execution Phase:
//   Actual code is executed.
//   Variable values are assigned.
//   Function calls are made and new execution contexts are created as needed.  (Functions call hone lagte hain)





//     ******** CALL STACK (EXECUTION STACK) ************
// JavaScript uses a Call Stack to manage execution contexts.
// The GEC is pushed first.
// Each new function call creates a new FEC and is pushed on top.
// When a function completes, its context is popped off the stack.

function one() {
  console.log("Inside one");
  two();
}

function two() {
  console.log("Inside two");
}

one();

// Call Stack Flow
// 1. Global Execution Context (GEC)
// 2. one() Execution Context
// 3. two() Execution Context
// As two() finishes, it pops off the stack, then one() pops, then program ends.

//In JavaScript, every piece of code runs inside an execution context. There are two main
//types — Global and Function Execution Context. Each context goes through a creation phase 
//(where memory is allocated and this is set) and an execution phase (where code runs). 
//The Call Stack manages all execution contexts, following LIFO (Last In First Out) principle.
//This model is key to understanding concepts like hoisting, scope, and closures."

