const { needleInHaystack } = require('./utils');

describe('needleInHaystack', () => {
  it('takes a word and a body of text, returns an object of occurance count and array indeces', () => {
    expect(typeof needleInHaystack('needle', 'haystack')).toBe('object');
  })
  it('finds a single word in a short text', () => {
    expect(needleInHaystack('needle', 'needle in the haystack')).toEqual({ wordCount: 1, wordPositions: [0] });
  })
  it('finds a single word in a short text', () => {
    expect(needleInHaystack('needle', 'needle in the haystack')).toEqual({ wordCount: 1, wordPositions: [0] });
  })
  it('finds a repeated word in a short text', () => {
    expect(needleInHaystack('dog', 'My dog barks at every other dog - such a dog thing to do.')).toEqual({ wordCount: 3, wordPositions: [1, 6, 10] });
  })
})