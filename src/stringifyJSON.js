// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	
	// If something is undefined or a function, skip it - return (undefined)
	if( 'function' === $.type(obj) || 'undefined' === $.type(obj) ) {
		return undefined;
	}
	  //Unfortunately, when called recursively, the above 2 results should apparently be 'null'
	  //NOTE: I shall have to come back and fix this later!!!
    var recursiveStringifyJSON = function(obj) {
      var result = stringifyJSON(obj);
      if( 'undefined' === $.type(result) ) {
      	return 'null';
      } else {
      	return result;
      }
    }
	// If element is a number, null, boolean, or string, then don't recurse
	  // Instead, choose the correct option and stringify it
	  // Return the string
	if( jQuery.isNumeric(obj) || 'boolean' === $.type(obj) ) {
		return obj.toString();
	}

	if ( 'null' === $.type(obj) ) {
		return 'null';
	}

	if( 'string' === $.type(obj) ) {
		return ('"' + obj + '"');
	}
	// If it's a collection, add an opening for the correct type of collection
	  // If it's a non-array object, check whether it's empty
	    // If empty, add a closing }
	    // Otherwise add the next key, and recurse on next value, and then add a closing }
	  // If it's an array, add an opening [, recurse on each value, and then add a closing ]
    // If there are more elements left, add a comma
};
