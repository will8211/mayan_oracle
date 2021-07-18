export const getPickedCards = () => {
  return {
    mixed: getSequence("mixed"),
    glyphs: getSequence("glyphs"),
    numerals: getSequence("numerals"),
    lenses: getSequence("lenses"),
  };
};

const getSequence = (cardType) => {
  let range;
  switch (cardType) {
    case "glyphs":
      range = [1, 20];
      break;
    case "numerals":
      range = [21, 33];
      break;
    case "lenses":
      range = [34, 44];
      break;
    default:
      range = [1, 44];
  }

  let picked = [];
  while (picked.length < 7) {
    let card = getRandom(range[0], range[1]);
    if (!picked.some((e) => e === card)) {
      picked.push(card);
    }
  }
  return picked;
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
