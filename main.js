const add = (num1, num2) => {
    const sum = num1 + num2
    return sum
}

const timesTwo = (addSum) => {
    const sum = addSum * 2
    return sum
}

const addSum = add(4,14)
const total = timesTwo(addSum)
console.log(total)