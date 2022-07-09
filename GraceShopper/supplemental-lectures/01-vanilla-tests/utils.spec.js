const toCurrency = require('./utils');

describe('toCurrency', () => {
  it('is a defined function', () => {
    expect(typeof toCurrency).toBe('function');
  })
  it('takes a number, returns a string', () => {
    expect(typeof toCurrency(5)).toBe('string');
  })
  it('returns a dollar amount in string form, with a dollar sign preceding. I.e. `$5.00`', () => {
    expect(toCurrency(5)).toBe('$5.00');
  })
  it('handles decimals', () => {
    expect(toCurrency(0.5)).toBe('$0.50');
    expect(toCurrency(10)).toBe('$10.00');
    expect(toCurrency(100.50)).toBe('$100.50');
  })
})