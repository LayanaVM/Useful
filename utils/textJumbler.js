export function jumbleText(text) {
  return text
    .split(' ')
    .map(word => {
      if (word.length <= 3) return word;
      const middle = word.slice(1, -1).split('').sort(() => Math.random() - 0.5).join('');
      return word[0] + middle + word[word.length - 1];
    })
    .join(' ');
}
