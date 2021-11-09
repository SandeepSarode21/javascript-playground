const helloworld = () => console.log("Hello World");

helloworld();

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(array.filter((value) => value < 5));

//Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function (nums) {
  var countArray = [];
  var count = 0;
  for (i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      countArray.push(count);
      count = 0;
    }
  }

  return Math.max(...countArray);
};

//Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12,345,2,6,7896]
// Output: 2

var findNumbers = function (nums) {
  var evenCount = 0;
  for (i = 0; i < nums.length; i++) {
    if (Math.ceil(Math.log10(nums[i] + 1)) % 2 == 0) {
      evenCount++;
    }
  }
  return evenCount;
};
