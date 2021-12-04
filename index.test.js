import { calculateNumberOfIncreasedDepth, calculateNumberOfIncreasedWindows, calculateFinalDepth } from ".";

//day 1
describe('day one', () => {
    let depths = `199
200
208
210
200
207
240
269
260
263`
    test('part 1', () => {
        let result = calculateNumberOfIncreasedDepth(depths);
        expect(result).toEqual(7)
    })

    test('part 2', () => {
        let result = calculateNumberOfIncreasedWindows(depths);
        expect(result).toEqual(5)
    })
});
//day 2
describe('day two', () => {
    let depths = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

    test('part1', () => {
        let result = calculateFinalDepth(depths);
        expect(result).toEqual(150)
    })
})
