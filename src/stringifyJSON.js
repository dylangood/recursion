// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	var objType = $.type(obj);
	
	// If something is undefined or a function, skip it - return (undefined)
	if( 'function' === objType || 'undefined' === objType ) {
		return;
	}

	// If element is a number, null, boolean, or string, then don't recurse
	  // Instead, choose the correct option and stringify it
	  // Return the string
	if( 'number' === objType || 'boolean' === objType ) {
		return obj.toString();
	}

	if ( 'null' === objType ) {
		return 'null';
	}

	if( 'string' === objType ) {
		return ('"' + obj + '"');
	}

	// If it's a collection, add an opening for the correct type of collection
	if( 'array' === objType ) {
		if( jQuery.isEmptyObject(obj) ) {
			return '[]';
		}
	  // If it's an array, add an opening [, recurse on each value, and then add a closing ]
	  return ('[' + jQuery.map(obj, stringifyJSON) + ']' );
	}

	// If it's a non-array object, check whether it's empty
	if( 'object' === objType ) {
      if( jQuery.isEmptyObject(obj) ) {
      	return '{}';
      }
      return ('{' + jQuery.map(obj, function(elem, i){ 
      	if( 'undefined' !== $.type( stringifyJSON(elem) ) ) {
      		return ('"' + i + '":' + stringifyJSON(elem) ); 
      	} 	
      }) + '}');
	}
	    // Otherwise add the next key, and recurse on next value, and then add a closing }

    // If there are more elements left, add a comma
    // NOTE TO SELF: For some reason this step turned out to be unnecessary. Why not? Where are the commas coming from?
}
