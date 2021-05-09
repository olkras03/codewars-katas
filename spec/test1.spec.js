const letterCounter = require ('../letterCounter');

describe ('letters counter', () => {
    it ('should count all occuring characters in a string', () => {
        const result = letterCounter.count();
        expect(result).toBe(1);
  })
})