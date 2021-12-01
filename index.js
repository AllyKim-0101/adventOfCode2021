
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