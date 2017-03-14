// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // 1. Find all the elements on the current level that have 'class="className"'
     //  a. Define the edges of the "current level"
     //  b. Between those edges, iterate through each element
     //  c. Check each one to see if it has className, keeping in mind that there may be other classes
  // 2. Push them onto a results array
     //  a. Research: Do the arrayed copies have to leave out sub-nodes or include them?
     //  b. Research: Or are they supposed to return the entire collection, filtering out any nodes that lack the class?
     //  c. Research: When I'm testing the original function in the browser, these objects are really deep!!! This seems like a lot of work for one exercise.
  // 3. For the ones that don't have the class, recursively call the function on their content.
     //  a. Exactly how to do this depends a lot on the answers to 2a and 2b, above.
};
