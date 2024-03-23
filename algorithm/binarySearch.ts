function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1
    let mid = l+r >> 1;
    while (l<=r) {
        if(nums[mid] === target){
            return mid
        }

        if (target < nums[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
        mid = l + r >> 1;
    }
    return mid + 1;
};

console.log(searchInsert([1,3,5,6],4))
console.log(searchInsert([1,3,5,6],6))