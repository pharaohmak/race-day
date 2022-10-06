let raceNumber = Math.floor(Math.random() * 1000);

let registededEarly = true;

const age = 18;

if (age > 18 && registededEarly) {
    raceNumber += 1000;
}

if (age > 18 && registededEarly) {
    console.log(`${raceNumber}: You will race at 9:30 am.`);
} else if (age > 18 && !registededEarly) {
    console.log(`${raceNumber}: You will race at 11:00 am.`);
} else if (age < 18) {
    console.log(`${raceNumber}: You will race at 12:30 pm.`);
} else {
    console.log('Please see registration desk');
}