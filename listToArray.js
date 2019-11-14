// Eloquent JavaScript Excercise 4.3
// Builds up a list structure value, rest, with array as argument
//
function arrayToList(array){
	let list = null;
	for (i = array.length-1 ; i >=0; i--)
	{
	   list = { value:array[i], rest:list };
	}
	return list;
}
// Produce array from list
function listToArray(list){
  let output = [];
  if (list == null) {
		return output;
  } else {
		output.push(list.value);
		return output.concat(listToArray(list.rest))
  }
}
/* From solution 
u for petlji uslov node - ako je null tu se prekida ako ne uzima se node.rest
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
*/


// Helper function prepend, which takes an element and a list 
// and creates a new list that adds the element to the front of the input list
function prepend(element, list) {
     return {value:element, rest:list};
}

// Helper function nth, which takes a list and a number and returns the element at the given position in the list 
// (with zero referring to the first element) or undefined when there is no such element.
function nth(list, n) {
 	if (list == null) return undefined;
	else if (num == 0) return list.value;
    else return nth(list.rest, num-1);
}

/* From solution  !list umesto list == null
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
*/

