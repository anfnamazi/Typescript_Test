function mergeTwoLists(list1: number[], list2: number[],mergedArr:number[] = []): number[] {
    if (list1[0] === undefined || list2[0] === undefined) {
       return mergedArr.concat(list1,list2);
    }
    if (list1[0] < list2[0]) {
        mergedArr.push(list1[0]);
        list1.shift();
    } else {
        mergedArr.push(list2[0]);
        list2.shift();
    }
   return mergeTwoLists(list1,list2,mergedArr);
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))