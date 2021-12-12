import {
    calculateNumberOfIncreasedDepth, calculateNumberOfIncreasedWindows, calculateFinalDepth, calculateFinalDepthWithAim, calculatePowerConsumption
    , calculateFrequency
} from ".";

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

    test('part2', () => {
        let result = calculateFinalDepthWithAim(depths);
        expect(result).toEqual(900)
    })
})

//day3
describe('day three', () => {
    let bits = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

    test(`part1`, () => {
        let result = calculatePowerConsumption(bits);
        expect(result).toEqual(198)
    })

    describe('calculateFrequency', () => {
        test(`it Calculates frequency`, () => {
            let result = calculateFrequency(["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"])
            expect(result).toEqual({ 0: 5, 1: 7 })
        })
    })
})
