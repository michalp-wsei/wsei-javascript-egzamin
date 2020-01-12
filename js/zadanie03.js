function bigestSumOfTwoElements(array) {
    if (!array.length) {
        return false;
    }

    if (array.length == 1) {
        return array[0];
    }

    let result = 0;

    result += Math.max(...array);
    array.splice(array.indexOf(Math.max(...array)))
    result += Math.max(...array);
    return result;
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68