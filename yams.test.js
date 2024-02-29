const { throwOfDice, getRandomInt } = require("./yams.js");

describe("throwOfDice", () => {
  test("should return a number", () => {
    expect(typeof throwOfDice(5)).toBe("number");
  });

  test("should throw an error if the argument is not a number", () => {
    expect(() => throwOfDice("5")).toThrow(
      "Invalid input. Please provide a number."
    );
  });

  test("should return a random integer between min and max (inclusive)", () => {
    const min = 1;
    const max = 6;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });
});
