const linkedinRegEx = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;



const url = 'https://www.linkedin.com/in/badal-45a24/'

if (linkedinRegEx.test(url)=== true) {
    console.log(`${url} is vaild`);
} else {
    console.log(`${url} is invaild`);

}