/*
eval.js provides helper functions for computing numerical result from a query in string format.
*/
import { polynomial, roots, evaluate } from "mathjs";

/*
compute function computes the numerical result of a query as a string.
Arguments:
- query: a mathematical express as a string
Returns:
- a numerical result of the mathematical expression
*/
export const compute = (query, scope) => {
    const splitEquality = query.split("=").map((part) => part.trim());
    if (splitEquality.length === 1) {
        return {
            variable: "ans",
            value: evaluate(splitEquality[0], scope)
        };
    } else if (splitEquality.length === 2) {
        const variable = splitEquality[0];
        const value = evaluate(splitEquality[1], scope);
        return {
            variable,
            value
        };
    } else {
        throw new Error("Invalid query");
    }
};

/*
getRootsPolynomial function computes the roots of a polynomial whose coefficients are given as an array.
Arguments:
- coefficients: an array that contains the coefficients of a polynomial
Returns:
- an array that contains the root(s) of the polynomial
*/
export const getRootsPolynomial = (coefficients) => {
    if (coefficients.length < 2) return [];
};

/*
function getRootsPolynomial(coefficients) {
  if (!Array.isArray(coefficients) || coefficients.length < 2) {
    throw new Error('Invalid input. The coefficients array should have at least 2 elements.');
  }

  // Create the polynomial expression using the coefficients array
  const polynomial = math.polynomial(coefficients, 'x');

  // Compute the roots of the polynomial
  const roots = math.roots(polynomial);

  return roots.map((root) => math.round(root, 6)); // Round the roots to 6 decimal places
}
*/
