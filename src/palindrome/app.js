function cleanID(id) {
    id = id.toLowerCase();
    return id.replace(/[^a-zA-Z0-9]/, "");
}
function palindrome(str) {
    let str2 = '';
    while (cleanID(str) !== str) {
        str = cleanID(str);
    }
    for (let i = str.length - 1; i >= 0; i--) {
        str2 = str2 + str[i];
    }
    console.log(str, str2)
    if (str.toLowerCase() === str2.toLowerCase()) {
        return true;
    }
    return false;
}

console.log(palindrome("eye"));