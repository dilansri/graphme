export const pairs = (inputArr: Array<string>) : Array<Array<string>> => {
  const result = inputArr.reduce((accumulator, value, index) => {
    const nextIndex = index + 1

    if(nextIndex >= inputArr.length) {
      return accumulator
    }

    accumulator.push([inputArr[index], inputArr[nextIndex]])

    return accumulator
  }, [] as Array<Array<string>>)
  return result
}