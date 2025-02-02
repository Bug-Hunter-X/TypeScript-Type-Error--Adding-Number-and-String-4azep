function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(5, 10); // Works correctly

try {
  let result2 = add(5, '10'); //Throws an error
} catch (error) {
  console.error(error.message); //Error Handling
}

//Alternative Strategy using type assertion (Use with caution)
function addAlternative(a: any, b: any): number {
  return parseFloat(a) + parseFloat(b);
}

let result3 = addAlternative(5, '10'); // Works but potential loss of precision