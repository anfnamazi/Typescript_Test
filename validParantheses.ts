function isValid(s: string): boolean {
    const map = new Map();
    map.set(")", "(");
    map.set("}", "{");
    map.set("]", "[");
    const stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] && stack[stack.length - 1] === map.get(s[i])) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0;
};

console.log(isValid("{[({[}])]}"))