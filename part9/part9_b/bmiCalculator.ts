interface parsedObj {
  a: number
  b: number
}

const parseArguments = (args: Array<string>): parsedObj => {
  if (args.length < 4) {
    throw new Error('Not enough arguments')
  }
  if (args.length > 4) {
    throw new Error('Too many arguments')
  }
  const a = Number(args[2])
  const b = Number(args[3])
  if (!isNaN(a) && !isNaN(b)) {
    return { a, b }
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

try {
  const { a, b } = parseArguments(process.argv)
  console.log(calculateBmi(a, b))
} catch (error) {
  console.log(error)
}
