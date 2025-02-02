# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript and its solution. The `bug.ts` file shows code that attempts to add a number and a string, resulting in a type error. The `bugSolution.ts` file provides a solution using type guarding to ensure that the function only receives numbers as input.

## Bug Description

The bug occurs because the function `add` expects two number arguments but receives a string as the second argument. TypeScript's type system prevents this incorrect operation, resulting in a type error.

## Solution

The solution uses a type guard to check if the input arguments are numbers. The `typeof` operator is used to check the type of each argument. If both arguments are numbers, the function proceeds normally; otherwise, an error message is displayed, or an alternative strategy can be used to handle incompatible types.