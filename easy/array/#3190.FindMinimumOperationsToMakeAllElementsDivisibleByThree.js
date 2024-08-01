/**You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.

  */

/**Example 1:

Input: nums = [1,2,3,4]

Output: 3

Explanation:

All array elements can be made divisible by 3 using 3 operations:

Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.
 */

/**Runtime 54 ms
Beats 80.88%
 */

/**Memory 49.67 MB
Beats 68.02%
 */

var minimumOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 1 || nums[i] % 3 === 2) {
      count++;
    }
  }
  return count;
};

minimumOperations([1, 2, 3, 4]);
