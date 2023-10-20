function rendomNumber() {
    return Math.round(Math.random()*100)
}

function displyRandomNo(timeCount) {
    console.log("your random number disply in "+ timeCount);
    let count = 3;
    const intervelForNumber = setInterval(() => {
        console.log(`${count} seconds remaning`);
        count--;
        if (count === 0) {
            clearInterval(intervelForNumber);
            console.log("your number - " + rendomNumber());
        }
    }, 1000);
}

displyRandomNo(3)