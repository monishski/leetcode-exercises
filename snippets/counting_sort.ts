// Sorting an array using Counting Sort
// Use Cases: Finding median of an array
console.clear()

// Inspired by https://www.geeksforgeeks.org/counting-sort/
// Below we are assuming our list only consists of positive single digits
type singleDigits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
const N = 10

const sort = (arr: singleDigits[]): singleDigits[] => {

    let output: singleDigits[] = new Array<singleDigits>(arr.length)

    //Get frequency count of occurance for each value
    let cs: singleDigits[] = new Array<singleDigits>(N).fill(0)
    for (let i = 0; i < arr.length; i++) {
        cs[arr[i]]++
    }

    //Transform array to a cumulative array, so that the value of 'cs' at 'i' is the INDEX position of output
    for (let i = 1; i < N; i++) {
        cs[i] += cs[i - 1]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[cs[arr[i]] - 1] = arr[i]
        cs[arr[i]]-- //Remember to subtract
    }

    return output

}

console.log(sort([1, 4, 1, 2, 7, 5, 2]))