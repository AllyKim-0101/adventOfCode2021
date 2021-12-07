import { calculateNumberOfIncreasedDepth, calculateNumberOfIncreasedWindows, calculateFinalDepth, calculateFinalDepthWithAim } from "./index.js";
import fs from 'fs';
let depths = fs.readFileSync('day2.txt', 'utf8');

console.log(calculateNumberOfIncreasedDepth(depths));
console.log(calculateNumberOfIncreasedWindows(depths));
//Day2
console.log(calculateFinalDepth(depths));
console.log(calculateFinalDepthWithAim(depths));