function removeDuplicates(nums: number[]): number[] {
    let l = 1;
    let r = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[r] !== nums[i]) {
            nums[l] = nums[i];
            l++;
        }
        r = i
    }
    return nums.splice(0,l);
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))