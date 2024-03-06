// CommonJS Syntax - CJS
// const { findLargest, findSmallest } = require("./comparison");
import { findLargest, findSmallest } from "./comparison.mjs";

let a = 10;
let b = 12;

console.log(findLargest(a, b));
console.log(findSmallest(a, b));
