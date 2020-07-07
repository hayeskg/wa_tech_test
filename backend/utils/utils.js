exports.needleInHaystack = (needle, haystack) => {
  const occurances = { wordCount: 0, wordPositions: [] };
  let toSearch = needle.toLowerCase()
  const regex = new RegExp(`\\b${toSearch}\\b`, 'gi');
  let found = haystack.match(regex);
  if (found) {
    occurances.wordCount = found.length;
  }
  haystack = haystack.split(' ');
  haystack.forEach((word, index) => {
    if (word === needle) {
      occurances.wordPositions.push(index)
    }
  })
  return occurances;
}