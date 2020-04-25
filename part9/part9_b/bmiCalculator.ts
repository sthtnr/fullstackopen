interface parsedObj {
  height: number
  weight: number
}

const parseQuerys = (args: any): parsedObj => {
  const height = Number(args.height)
  const weight = Number(args.weight)
  if (!isNaN(height) && !isNaN(weight)) {
    return { height, weight }
  } else {
    throw new Error('Provided values were not numbers')
  }
}

const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi < 25) {
    return 'Normal'
  } else if (bmi < 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

export { parseQuerys, calculateBmi }
