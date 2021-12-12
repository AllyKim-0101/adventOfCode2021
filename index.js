
export function calculateNumberOfIncreasedDepth(depths) {
    //convert string to array by new lines
    let arrOfDepths = depths.split('\n').map(Number);
    //initialise result to 0
    let result = 0;
    //loop over each element and compare current ele with previous one
    //start from the 2nd element as the first one has no previous one
    for (let i = 1; i < arrOfDepths.length; i++) {
        //if the current one is bigger than previous one
        if (arrOfDepths[i] > arrOfDepths[i - 1]) {
            //add 1 to result 
            result += 1;
        }
    }
    return result
}


export function calculateNumberOfIncreasedWindows(depths) {

    //convert string to array by new lines
    let arrOfDepths = depths.split('\n').map(Number);
    //initialise result
    let result = 0;
    let arr = []
    for (let i = 0; i < arrOfDepths.length - 2; i++) {
        //loop over each element and add the every three elements
        let threeSum = arrOfDepths[i] + arrOfDepths[i + 1] + arrOfDepths[i + 2]
        //push each sum to array 
        arr.push(threeSum);
    }
    //if the current one is bigger than the previous one then return true to count
    return arr.filter((ele, index) => ele > arr[index - 1]).length
}

// Day2

export function calculateFinalDepth(depths) {
    let x = 0;
    let y = 0;
    //split depths by new line and split each line by space
    depths.split('\n')
        //forEach was used to signify that it will only change values of x and y rather than creating a new array with changed output like map
        .forEach(ele => {
            let num = Number(ele.split(" ")[1]);
            let operation = ele.split(" ")[0];
            //convert forward to +, which becomes x using IF statement rather than SWITCH statement(personal opinion :p)
            if (operation == "forward") {
                x += num;
            } else if (operation == "up") {
                y -= num;
            } else {
                y += num;
            }
        })
    //multiply x y
    return x * y
}


export function calculateFinalDepthWithAim(depths) {
    let x = 0;
    let y = 0;
    let aim = 0;
    depths.split('\n')
        //forEach was used to signify that it will only change values of x and y rather than creating a new array with changed output like map
        .forEach(ele => {
            let num = Number(ele.split(" ")[1]);
            let operation = ele.split(" ")[0];
            //convert forward to +, which becomes x using IF statement rather than SWITCH statement(personal opinion :p)
            if (operation == "forward") {
                x += num;
                y += (aim * num)
            } else if (operation == "up") {
                aim -= num;
            } else {
                aim += num;
            }
        })
    return x * y
}

//Day 3

export const calculateFrequency = (array) => {
    const result = {};
    array.forEach(element => {
        if (element in result) {
            result[element] += 1
        } else {
            result[element] = 1
        }
    });
    return result;
}

export function calculatePowerConsumption(bits) {
    const bitsArr = bits.split('\n');
    const mostFrequent = [];
    const leastFrequent = [];
    for (let i = 0; i < 12; i++) {
        const col = bitsArr.map(ele => ele[i]);
        const frequncy = calculateFrequency(col);
        const mostFrequentBitOfCol = Object.entries(frequncy)
            .sort(([, a], [, b]) => a - b)[1][0];

        const leastFrequentBitOfCol = Object.entries(frequncy)
            .sort(([, a], [, b]) => a - b)[0][0];
        mostFrequent.push(mostFrequentBitOfCol);
        leastFrequent.push(leastFrequentBitOfCol);
    }
    const gamma = parseInt(mostFrequent.map(Number).join(''), 2);
    const epsilon = parseInt(leastFrequent.map(Number).join(''), 2);
    return gamma * epsilon;
}