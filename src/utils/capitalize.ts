function capitalize(str: string): string {
  const words = str.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return capitalizedWords.join(" ");
}

export default capitalize;
