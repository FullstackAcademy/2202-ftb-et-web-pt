//globally scoped
const daysInYear = 365; 
const daysInWeek = 7

//locally scoped
function dayChecker(){
    let currentDay = "Tuesday";
    console.log(currentDay, daysInYear, daysInWeek)
}

function badDayChecker(){
    console.log(currentDay);
}

function outerChecker(daysInYear){
    function innerChecker(daysInWeek){ //5
        console.log(daysInWeek, daysInYear)
    }
    innerChecker(5)
}

function blockChecker(){
    let numVal = 30;
    if (numVal > 30){
        let secretPhrase = "We're in the if statements scope"
    } else {
        console.log(secretPhrase);
    }
}

// closure 
function daysFunctionCreator(daysInYear){
    function innerChecker(daysInWeek){ //5
        console.log(daysInWeek, daysInYear)
    }
    return innerChecker;
    // Look up js closure explained
}

let myInnerChecker = daysFunctionCreator(200);
// myInnerChecker(1);


let testObj = {
    name: "Brendan",
    toot: {
        test: function(){
            console.log(this);
        }
    }
}

testObj.toot.test();



