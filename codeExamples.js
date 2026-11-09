//CHAPTER ONE CODE 

// ARRAY EXAMPLE CODE
{ // curly brace STARTS the 'paragraph' block

// first two lines declare our variables
let x; // semicolons END the statement
let y;

x = 2; // assigning x=2
y = 7; // assigning y=7

// CHALLENGE: Try removing a semicolon from ONE or ALL lines! Notice what happens! 
// Javascript has a safety net that avoids an error here, but keeping them IS the standard to prevent bugs occuring! 

// returns both of our elements at the SAME time
return[x,y]  
} // curly brace ENDS the block

// SEQUENTIAL FLOW STATEMENT EXAMPLE
{
let x,y,z; // first statement declares the variables
x=5; // assigning x=5
y=6; // assigning y=6;
z=x+y; //adds values together (5+6)
return z; // displays the final answer 

// CHALLENGE: change the value for x to 20 and the value y to 56. Run the code again to see how your output changes!
}


//CONDITIONAL FLOW STATEMENT EXAMPLE
{
let x; // declaring variable 'x'
let number; // declaring variable 'number'
x=700; // assigning x=700
if(x>80){ // if value is GREATER than 80
  number = "ERROR! This number is too BIG!"; // prints this message
} else{ // if value is LESS than 80
  number = "This number meets the range requirements!"; // prints this message
}
return number; // returns printed statement to the main output

// CHALLENGE: change the value of x and see what output you'll get this time!
}

//FOR LOOP EXAMPLE
{
let output = ""; // holds our counting lines 
for(let i = 0; i<=5 ; i++){ 
  //1.let i = 0 is our STARTING point 
  //2.i<=5 is our CONDITION 
  //3.i++ increases each value by ONE
  
 output +=("Counting: " + i + ". "); // prints the statement FIRST, then the value NEXT, and closes off with a period
  }
  return output; // displays overall output 
}

//WHILE LOOP EXAMPLE
{
let i=0; // declare i = 0 ; The STARTING point 
let text= ""; // declaring text
 while(i<10){ // while value is LESS than 10
  text += " The number is " + i + "."; // prints statement FIRST, then values LESS than 9 NEXT
  i++; // increments value by ONE 
  }
return text; // displays output
}

//CHAPTER TWO CODE

// ARRAY (DATA STRUCTURE) EXAMPLE
//NOTE:
// I COULD create a list declaring each fruit individually like so: 
 // let fruit1 = "apple";
 // let fruit2 = "banana";
 // let fruit3 = "orange";
 // let fruit4 = "grapes";

// But if you have MANY items, creating a new variable (fruit1,fruit2,fruit3,etc.)for each item can be time consuming. 
//What if you had 50 fruits?

//Here is where the ARRAY comes in! It lets you group them into one SINGLE variable!

//Here we have an array of fruits (fruits being the variable) 
  {
  const fruits = ["apple", "banana", "orange", "grapes"];
  let firstFruit = fruits[0]; 
    // create a NEW variable called firstFruit!
    // the [0] means the FIRST ITEM ONLY will be displayed!
    
  return firstFruit; // displays the output 

    //CHALLENGE: CHANGE THE THE NUMBER 0 TO EITHER 1,2, OR 3. 
    //SEE WHAT OUTPUT YOU GET!
}

//LINKED LIST EXAMPLE
// Here are individual nodes listed below:

{
const node1 = {value: 3, next:null }; // node1 had a value of 3
const node2 = {value: 8, next:null }; // node2 has a value of 8
const node3 = {value: 93, next:null }; // node3 has a value of 93

node1.next = node2; // the value 3 is going to point to 8
node2.next = node3; // the value 8 will point to 93

//The STARTING point of the linked list
const head = node1; 

let listOutput = ""; // builds out visual chain layout
let currentNode = head; // starts POINTER at beginning of the list

while(currentNode !== null){
  listOutput +=currentNode.value + "->"; // adds the current value to our text
  currentNode = currentNode.next; // moves pointer to the next node
}
listOutput += "null"; // end of list
return listOutput; // returns the whole sequence at the SAME time
}

//STACK EXAMPLE
{
  let stack = []; // create an empty array that acts as a STACK container 

  let x= 45; // assigning x= 45
  let y= 89; // assigning x = 89
  let z= 30056; // assigning x= 30056


  // These 3 lines of code INSERT our elements (values) in the stack
  
  stack.push(x); // BOTTOM of stack (Index 0)
  stack.push(y); // Index 1
  stack.push(z); // TOP of stack (Index 2) 
 

// This returns ALL values in the stack
return stack; 
    
// What if I want to merely LOOK at the top element WITHOUT deleting it? 
// Since Javascript doesn't have a peek(), We have to look at the last item manually 


//NOTE: Make sure that the 'return stack' line is a comment when trying out this part!
  
// let peekedElement = stack[stack.length-1];


//   // to REMOVE an element/elements 
// let removedElement = stack.pop(); 

// //  // takes the stack length -1 (Index 2 - 1 = Index 1)  
// let newTop = stack[stack.length -1]; 
 
  
//    // displays BOTH the removed element and the new output! 
// return{
    
//      itemRemoved: removedElement,
//      currentTop: newTop

// //CHALLENGE: add/remove elements to familiarize yourself with this concept. 

// //Notice how the output changes!
//   }
}

//QUEUE EXAMPLE
{
  let queue = []; // creates an empty array that acts as our QUEUE container

  // 1. Adding people to the queue line
  queue.push("Customer A"); // element at the FRONT of the line (Index 0)
  queue.push("Customer B");
  queue.push("Customer C"); // element at the BACK of the line (Index 2) 
  

  // 2. Serving the first person in line
  let served = queue.shift(); // Looks at "Customer A" at REMOVES them from queue

  // 3. PEEK: Who is next?
  let nextUp = queue[0]; // Looks at index 0, which is NOW "Customer B"

  // displays the output for BOTH the person served and the next customer
  return {
    personServed: served,
    whoIsNext: nextUp

//CHALLENGE: Like you did with stacks, add/remove elements to familiarize yourself with this concept. 

//Notice how the output changes! 
  };
}

//CHAPTEER THREE CODE 

//STANDARD OOP CODE EXAMPLE
{
  // The blueprint (Class)
  class Building {
    constructor(address, color) {
      
      // the properties 
      this.address = address; 
      this.color = color;     
    }

    // The Method (what has HAPPENED to the building)
    describe() {
      return "The building at " + this.address + " is painted " + this.color + ".";
    }
  }

  // The Object that was created from the Class 

  const skyscraper = new Building("555 Market St", "glass and silver");

  // Return the description of our skyscraper object
  return skyscraper.describe();

//CHALLENGE: Add more properties and change the text inside the 'const skyscrpaer' line. 

//Notice how the output changes! 
}

// ENCAPSULATION EXAMPLE
{ // Curly brace STARTS the capsule block

  class VendingMachine {
    // The '#' encapsulates this inventory, making it strictly PRIVATE
    // NOTE: If you want to hide anything, make sure to declare it in the BEGINNING of the program! 
    #snackCount = 50; 

    // An approved, public "button" to safely buy a snack
    purchaseSnack() {
      if (this.#snackCount > 0) {
        this.#snackCount--; // subtract snackCount by ONE 
        return "Enjoy your snack! Snacks left: " + this.#snackCount;
      }
      return "Out of stock!";
    }
  }

  const machine = new VendingMachine();

  // CHALLENGE: Try to reach inside and wildly change the inventory by uncommenting the line below!
  //machine.#snackCount = 100; 

  // Using the approved public button instead:
  return machine.purchaseSnack();

} // Curly brace ENDS the capsule block



