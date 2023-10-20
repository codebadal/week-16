let input = "my name is jhon"

function revString() {
   return input.split("").reverse().join("");
}

setTimeout(function () {
    let reverse = revString(input);
    console.log("reverse string is here : " + reverse);
},2000)