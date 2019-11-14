//Test Git Hub izmena na remote repo 
function range(rngStart, rngStop, step = 1 ) {
    //if (isNaN(rngStart) || isNaN(rngStart) || isNan(step)) return undefined;
    let result = [];
	if (step == 0 ) return result;
	if (step > 0 ) {
		rngStop = Math.max(rngStart, rngStop) 
		for (let i=rngStart; i <= rngStop; i += step) {
			result.push(i);
		}
    } else {
		rngStop =  Math.min(rngStart, rngStop) 
		for (let i=rngStart; i >= rngStop; i += step) {
			result.push(i);
		}
	}
    return result;
}

function sum(array) {
    let summation= 0;
    for (let e of array ){
        summation += e;
    }
    return summation;

}

console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
