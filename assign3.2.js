/*
Acadgild, Angular Course, Session 3 (ES6 Part II), Assignment 3.2 (map, set)
Michele Cannito, student

IMPORTANT:  CONTROL SCREEN OUTPUT USING MORE PIPE ( | more ) WHEN EXECUTING!
Otherwise, console.log() output will scroll off the top before you see it.
node assign3.2.js | more

3.2. Problem Statement
A. Map and Set:
    ● Create map instance object using new Map() and set value using set().
    Add values here (Key can be string, object and function.)
    ● Create Set() instance and then add values using add() method
    Note: Check new property before adding, if it’s there or not using has()
    method.
    ● Add multiple values using Set(), then iterate them using for loop.
    ● Create an array(stringArray) of strings,
    then set this array to Set instance using:
    var mySet = new Set(stringArray);
    Now check if all values are there or not using set’s has() method.
    Print all values of array in one time(using spread operator)
*/

// Create a Map instance object.
let myMap = new Map();

// Set some values using set().
myMap.set("Golden Gate Bridge", "San Francisco");
myMap.set("Big Ben", "London");

// Create string, object, and function keys to use in a Map.
// This will demonstrate that any value can be a key, even an object.
let keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// Set values for above keys using set().
myMap.set(keyString, "value of string");
myMap.set(keyObj, {"monument": "Eifel Tower", "location": "Paris"});
myMap.set(keyFunc, function sqr(x) {return x * x;});

//Create a Set instance object. 
let stoneSet = new Set;

// Add values to the set using add() method.
stoneSet.add("sandstone");
stoneSet.add("marble");

// Use the has() method to check for uniqueness before adding to a set. 
// Since code would be repeated, I first created a function.
// Note: `${ setName }` returns [object Set] so not used.
function addToSet(setName, property) {
    if ( setName.has(property) ) {
        console.log(`The set has ${ property } already. Not added.`);
    } else {
        setName.add(property);
        console.log( `${ property } successfully added to the set.`);
    }
}

addToSet(stoneSet, "Tiger's eye");
addToSet(stoneSet, "jasper");
addToSet(stoneSet, "Tiger's eye"); // test already added function logic

// Add multiple values using set(). 
// ERROR in Directions: Use add() with a set. Use set() with a map.
stoneSet.add("Ruby").add("Topaz").add("Sapphire");
// Both set() and add() are chainable.
myMap.set("Jan.", "Garnet").set("Feb.", "Amethyst").set("March", "Aquamarine" );

// Iterate through them using a for loop.
// Iterate through a Set.
console.log("\n Iterate through stoneSet:");  // added to clarify output
for (let stone of stoneSet) {
  console.log(stone);
}

// Iterate through a Map.
// entries() returns the entries of the map as an iterable; 
// entry[0] is key, and entry[1] is value in each let entry of map.entries() result.
console.log("\n Iterate through myMap:");  // added to clarify output
for (let entry of myMap.entries()) {
    console.log(entry[0], entry[1]);
}

// Same result using destructuring:
console.log("\n Iterate through myMap using destructuring"); // added to clarify output
for (let [key, value] of myMap.entries()) {
    console.log(key, value);
}
// Since the default way of iterating over a map is entries(), can shorten code:
console.log("\n Iterate through myMap using shortened code:"); // added to clarify output
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Create an array(stringArray) of strings.
let stringArray = ["Coast Redwood", "Giant Sequoia", "Monterey Pine", "Balsam Fir"];

// Set this array to a Set instance using var mySet = new Set(stringArray).
var mySet = new Set(stringArray);

// Check if all values are there or not using set’s has() method.
console.log("\n Check that values there. Check for Douglas Fir not there.");
console.log( `Redwood there? ${ mySet.has("Coast Redwood") }` );
console.log( `Giant Sequoi there? ${ mySet.has("Giant Sequoia") }` );
console.log( `Monterey Pine there? ${ mySet.has("Monterey Pine") }` );
console.log( `Balsam Fir there? ${ mySet.has("Balsam Fir") }` );
console.log( `Douglas Fir there? ${ mySet.has("Douglas Fir") }` );

// Print all values of array at one time (using spread operator).
console.log("\n Print mySet using spread operator:");  // added to clarify output
console.log([...mySet]);

console.log("\n Print stoneSet using spread operator:");  // added to clarify output
console.log([...stoneSet]);

console.log("\n Print myMap using spread operator:");  // added to clarify output
console.log([...myMap]);

// Extra Credit:
// Determine size of a map
console.log(`\n myMap's size is ${ myMap.size } before clearing. `);
// Clearing a map. Results in size being zero.
myMap.clear();
console.log(` myMap's size is ${ myMap.size } after clearing. `);
// Determine size of a set
console.log(`\n mySet's size is ${ mySet.size } before clearing. `);
// Clearing a set; results in size equal zero.
mySet.clear();
console.log(` mySet's size is ${ mySet.size } after clearing. `);