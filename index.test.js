import { calculateNumberOfIncreasedDepth, calculateNumberOfIncreasedWindows } from ".";


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
})
