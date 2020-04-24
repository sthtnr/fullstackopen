interface returnObj {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const calculateExercise = (args: Array<number>): returnObj => {
  const target = 2
  const periodLength = args.length
  const average = args.reduce((acc, cur) => acc + cur) / periodLength
  const trainingDays = args.filter((x) => x !== 0).length
  const success = average >= target ? true : false
  const rating = average < target * 0.33 ? 1 : average < target * 0.66 ? 2 : 3
  const ratingDescription =
    rating === 1 ? 'bad' : rating === 2 ? 'so-so' : 'good'

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1]))
