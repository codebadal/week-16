let regEx = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/gi

const URL = "https://pwskills.com"

if (regEx.test(URL) === true) {
    console.log("vaillid url");
} else {
    console.log("invailid url");
}