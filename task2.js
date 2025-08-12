const input = "Hello World!";
const reversed = input.split(" ").map(word => word.split("").reverse().join("")).join(" ");

console.log(reversed);


for (let i = 0; i< s.length; i++){

    let seen= "";
    for(let j = i+1; j< s.length; j++){
        if (seen.includes(s[j])){
            break;
        }
        seen += s[j];
        maxlength = Math.max(maxlength, seen.length);
    }
    }
