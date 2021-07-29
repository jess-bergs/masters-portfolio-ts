import CircularArray from '../../src/utils/CircularArray';

const array = ['a', 'b', 'c', 'd', 'e'];

describe('the Circular Array', () => {
    describe('when querying the next item ', () => {
        describe('for an index', () => {
            it('returns the next item', () => {
                const expectedResult = 'b';
                const result = CircularArray.getNext(array, 0);
                expect(result).toEqual(expectedResult);
            });
        });
        describe('for the last index', () => {
            it('returns the first item', () => {
                const expectedResult = 'a';
                const result = CircularArray.getNext(array, 4);
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('when querying the previous item ', () => {
        describe('for an index', () => {
            it('returns the previous item', () => {
                const expectedResult = 'd';
                const result = CircularArray.getPrevious(array, 4);
                expect(result).toEqual(expectedResult);
            });
        });
        describe('for the first index', () => {
            it('returns the last item', () => {
                const expectedResult = 'e';
                const result = CircularArray.getPrevious(array, 0);
                expect(result).toEqual(expectedResult);
            });
        });
    });
});
