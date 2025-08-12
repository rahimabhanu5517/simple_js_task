

function lengthOfLongestSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = "";
        for (let j = i; j < s.length; j++) { // if we replace j=i with j=i+1 then it skip the first char if outer loop.
            if (seen.includes(s[j])) {
                break;
            }
            seen += s[j];
            maxLength = Math.max(maxLength, seen.length);
        }
    }

    return maxLength;
}

const input = "abcabcbb";
console.log(lengthOfLongestSubstring(input));
