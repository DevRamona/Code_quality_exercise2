const calculateAverage = (numbers) => {
  const sumOfNumbers = numbers.reduce(
    (accumulator, value) => accumulator + value,
    0
  );
  return sumOfNumbers / numbers.length;
};
