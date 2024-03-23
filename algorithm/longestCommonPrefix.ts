function longestCommonPrefix(strs: string[]): string {
    let common = strs[0].split("")
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < common.length; j++) {
            if (common[j] !== strs[i][j]) {
                common = common.splice(0, j);
            }
        }
    }
    return common.join("")
};

console.log(longestCommonPrefix(["flower","flow","flight"]))