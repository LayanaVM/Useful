export function jumbleWord(word) {
  if (word.length <= 3) return word;

  const middle = word.slice(1, -1).split('');
  for (let i = middle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middle[i], middle[j]] = [middle[j], middle[i]];
  }

  return word[0] + middle.join('') + word[word.length - 1];
}
