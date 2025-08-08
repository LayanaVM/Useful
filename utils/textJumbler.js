export function jumbleText(text) {
  return text.split(' ').map(word => {
    if (word.length <= 3) return word;
    const mid = word.slice(1, -1).split('');
    for (let i = mid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mid[i], mid[j]] = [mid[j], mid[i]];
    }
    return word[0] + mid.join('') + word[word.length - 1];
  }).join(' ');
}
