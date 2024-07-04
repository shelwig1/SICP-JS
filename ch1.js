//1.2
//(5 + 4 + (2  - (3 - (6 + (4/5)))))   /  (3 * ( 6-2) * (2-7))

//1.3
function sumOfTwoLargestNumbers(x,y,z) {
    // Determine the two largest numbers
    const num1 = x > y || x > z ? x : y

    const num2 = y > z ? y : z

    console.log(num1, " " , num2)
    return (num1 * num1 + num2 * num2)
    // Return the sume of the squares of the numbers
}

//console.log(sumOfTwoLargestNumbers(3,1,2))

//1.4
function plus(a, b) { 
    return a + b; 
}
function minus(a, b) {
     return a - b; 
}
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}
// If b is greater or equal to zero, we use the plus function, else we use the minus IOT subtract the negative
// a_plus_abs_b evaluates to a function that then takes the (a,b) inputs and resolves that way.

//console.log(a_plus_abs_b(1,-2))

//1.5
function p() {
    return p(); 
}
function test(x, y) {
    return x === 0 ? 0 : y;
}

//test(0, p())
/*
Applicative-order -> Arguments before the function itself
1. Evaluates x into 0
2. Attempts to evaluate y into p(), but gets stuck into a recursive loop that does not resolve

Normal Order -> Delays evaulation of function args until needed
1. return (0) === 0 ? 0 : y
2. return true ? 0 : y
3. 0 
*/


//1.6
function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
} 
function square(x) {
    //console.log("Called square function")
    return x * x }

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough(guess, x) {
    return Math.abs(square(guess) - x) < 0.001;
}

function sqrt(x) {
    return sqrt_iter(1, x);
}
    
function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

/* function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
                        guess,
                        sqrt_iter(improve(guess, x),x)
                    );
} */
// What happens when we try to use the square root program?
// Looks like it loops recursively without ever stopping (that sucks, goofy ass)
console.log(sqrt(100000))

//1.7
// Examples of how our stuff fails for large and small numbers.
// Alternate strategy: is_good_enough -> watch how the guesses change from one iteration and stop and when the the change is a small fraction of the guess. Design a square root function that uses this implementation. Does it work for small and large numbers?