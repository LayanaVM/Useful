export function jumbleText(text) {
  return text
    .split(" ")
    .map(word =>
      word.length > 2
        ? word[0] +
          word
            .slice(1, -1)
            .split("")
            .sort(() => 0.5 - Math.random())
            .join("") +
          word[word.length - 1]
        : word
    )
    .join(" ");
}
