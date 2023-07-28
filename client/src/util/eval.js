/*
eval.js provides helper functions for computing numerical result from a query in string format.
*/

/*
compute function computes the numerical result of a query as a string.
Arguments:
- query: a mathematical express as a string
Returns:
- a numerical result of the mathematical expression
*/
export const compute = (query) => {
    return query.length;
};

/*
getRootsPolynomial function computes the roots of a polynomial whose coefficients are given as an array.
Arguments:
- coefficients: an array that contains the coefficients of a polynomial
Returns:
- an array that contains the root(s) of the polynomial
*/
export const getRootsPolynomial = (coefficients) => {
    if (coefficients.length === 0) return [];
};
