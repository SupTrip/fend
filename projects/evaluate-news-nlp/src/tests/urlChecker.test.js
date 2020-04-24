const validUrl = require('../client/js/nameChecker')

describe('Test, the import "validUrl" should exist', () => {
    test('It should return true', () => {
        expect(typeof validUrl).toBeDefined();
    });
});