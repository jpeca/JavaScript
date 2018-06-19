function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
	}
    return find(1, "1");
}
console.log(findSolution(24));

// Define recurcive function 
function isEven(n){
    if (n == 0) return true;
	if (n == 1) return false;
	return isEven(n-2);
}
txtParnost = n => isEven(n) ? n + ' je paran': n + ' nije paran'
console.log (`${txtParnost(50)}`);
console.log (`${txtParnost(75)}`);