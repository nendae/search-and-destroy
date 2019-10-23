'use strict';

// Complete this algo
const binarySearch = (array, target, counter = ) => {
	if(counter === 0 || array[counter] === target|| counter === array.length){
		console.log('counter: ', counter)
		return array[counter] === target
	} else {
		// const left = array.slice(0, Math.floor(array.length/2))
		// const right = array.slice(Math.floor(array.length/2))
		// const middle = Math.floor(array.length/2)
		counter = counter || Math.floor(array.length/2)
		console.log('counter before if: ', counter)
			if(array[counter] === target){
				return true
			} else if(array[counter] > target){
				counter --
				console.log('counter decrease: ', counter)
				return binarySearch(array, target, counter)
			} else if (array[counter] < target){
				counter ++
				console.log('counter increase: ', counter)
				return binarySearch(array, target, counter)
			}
			return false
	}
	// 	if(left[left.length-1]===target){
	// 		return true
	// 	} else if(left[left.length-1] > target) {
	// 		return binarySearch(left, target)
	// 	}
	// 	if (right[0]===target){
	// 		return true
	// 	} else if(right[0]< target) {
	// 		return binarySearch(right, target)
	// }
	// return false
	// }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
