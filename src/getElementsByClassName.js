// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
	var result = [];
	var childElement;
	var focusElement = node || document.body; 

	if( focusElement.classList.contains(className) ) {
		result.push(focusElement);
	}

	for( var i = 0; i < focusElement.children.length; i++ ) {
		childElement = focusElement.children[i];
		console.log('We got one!');
		console.log(childElement);
		result = result.concat( getElementsByClassName(className, childElement) );
	}

    return result;
};
