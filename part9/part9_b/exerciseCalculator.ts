const parseArguments4ExCalc = (args: Array<string>): Array<number> => {
  const [, , ...argv] = args;
  const Args2number = argv.map((x) => {
    if (isNaN(Number(x))) {
      throw new Error('Provided values were not numbers');
    }
    return Number(x);
  });
  return Args2number;
};

interface ReturnObj {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (args: Array<number>): ReturnObj => {
  const target = args[0];
  const periodLength = args.length - 1;
  const average =
    (args.reduce((acc, cur) => acc + cur) - args[0]) / periodLength;
  const trainingDays = args.filter((x) => x !== 0).length - 1;
  const success = average >= target ? true : false;
  const rating = average < target * 0.33 ? 1 : average < target * 0.66 ? 2 : 3;
  const ratingDescription =
    rating === 1 ? 'bad' : rating === 2 ? 'so-so' : 'good';

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

console.log(calculateExercise(parseArguments4ExCalc(process.argv)));
