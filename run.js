import { calculateNumberOfIncreasedDepth, calculateNumberOfIncreasedWindows, calculateFinalDepth, calculateFinalDepthWithAim, calculatePowerConsumption } from "./index.js";
import fs from 'fs';
let depths = fs.readFileSync('day2.txt', 'utf8');
let bits = fs.readFileSync('day3.txt', 'utf8');
console.log(calculateNumberOfIncreasedDepth(depths));
console.log(calculateNumberOfIncreasedWindows(depths));
//Day2
console.log(calculateFinalDepth(depths));
console.log(calculateFinalDepthWithAim(depths));

//Day3
console.log(calculatePowerConsumption(bits))