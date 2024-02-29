const throwOfDice = (nbOfThrows) => {
  const NB_OF_DICE = 5;
  let total = 0;

  for (let throwIndex = 0; throwIndex < nbOfThrows; throwIndex++) {
    let dice = [];
    for (let index = 0; index < NB_OF_DICE; index++) {
      dice.push(getRandomInt(1, 6));
    }

    let counter = {};
    for (const value of dice) {
      counter[value] ? (counter[value] += 1) : (counter[value] = 1);
    }

    let maxPoints = 0;
    let selectedFigure = null;

    for (const key in counter) {
      const occurrences = counter[key];
      let points = 0;

      switch (occurrences) {
        case 5:
          points = 50;
          break;
        case 4:
          points = 35;
          break;
        case 3:
          if (selectedFigure === null) {
            points = 28;
          } else {
            points = 30;
          }
          break;
        case 2:
          if (selectedFigure === 3) {
            points = 30;
          }
          break;
        case 1:
          const sortedDice = [...dice].sort((a, b) => a - b);
          const isLargeStraight =
            sortedDice[0] === sortedDice[1] - 1 &&
            sortedDice[1] === sortedDice[2] - 1 &&
            sortedDice[2] === sortedDice[3] - 1 &&
            sortedDice[3] === sortedDice[4] - 1;
          points = isLargeStraight
            ? 40
            : dice.reduce((acc, value) => acc + value, 0);
          break;
        default:
          points = dice.reduce((acc, value) => acc + value, 0);
      }

      if (points > maxPoints) {
        maxPoints = points;
        selectedFigure = occurrences;
      }
    }

    total += maxPoints;

    console.log(`Lancer ${throwIndex + 1}: Dés: ${dice}, Points: ${maxPoints}`);
  }

  console.log(`Total: ${total}`);
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

throwOfDice(5);
