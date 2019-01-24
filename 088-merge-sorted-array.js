Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]


本题的解法很简单，从后往前

有一个小技巧，当退出第一个while的循环的时候，如果m>=0的时候，不用赋值
因为那些值刚好就是对应所需要的地方

var merge = function(nums1, m, nums2, n) {
    let index = m + n - 1;
    --m;
    --n;
    
    while(index >= 0 && m >= 0 && n>= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[index] = nums1[m];
            m--;
        } else {
            nums1[index] = nums2[n];
            n--;
        }
        index--;
    }
    
    while (n >= 0) {
        nums1[index] = nums2[n];
        --index;
        --n;
    }
    
    return nums1;
};
