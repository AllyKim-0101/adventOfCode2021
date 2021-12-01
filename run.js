import { calculateNumberOfIncreasedDepth, calculateNumberOfIncreasedWindows } from "./index.js";
import fs from 'fs';
let depths = fs.readFileSync('day1.txt', 'utf8');

console.log(calculateNumberOfIncreasedDepth(depths));
console.log(calculateNumberOfIncreasedWindows(depths));
