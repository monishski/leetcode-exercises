var smallerNumbersThanCurrent = function(nums) {
    const output = new Array(nums);
    for (let i=0; i<nums.length; i++) {
        subArr = nums.slice(0, i).concat(nums.slice(i+1))
        output.push(subArr.filter(elem => elem<nums[i]).length)
    }
    return output.slice(1) //I am not sure why but the first value NaN
};

//If you sort the array before hand, you can easily solve the task by quite a bit
// var smallerNumbersThanCurrent = function(nums) {
//     const sorted = [...nums].sort((a, b) => a - b);
//     return nums.map(num => sorted.indexOf(num));
//     // e.g. input of [8, 1, 2, 2, 3] => [1, 2, 2, 3, 8] i.e. its index (assume 0 index) tell you the # of elemns less than it
// };
