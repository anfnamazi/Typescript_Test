function strStr(haystack: string, needle: string): number {
    for (let l = 0; l < haystack.length; l++) {
        if (haystack.slice(l, l + needle.length) === needle) {
            return l;
        }
    }
    return -1;

    // return haystack.search(needle);
};

console.log(strStr("sadbutsad","sad"))