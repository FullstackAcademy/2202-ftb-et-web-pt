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
    function innerChecker(daysInWeek){
        console.log(daysInWeek, daysInYear)
    }
}

function blockChecker(){
    let numVal = 30;
    if (numVal > 30){
        let secretPhrase = "We're in the if statements scope"
    } else {
        console.log(secretPhrase);
    }
}