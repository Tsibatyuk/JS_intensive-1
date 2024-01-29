let prefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res = prefix(["flower","flow","flight"]);

console.log(res);

res = prefix(["ra1dog", "ra1cecar", "ra1car"])

console.log(res);
