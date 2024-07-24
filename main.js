document.getElementById('getRaceTime').addEventListener('click', () => {
    let raceNumber = Math.floor(Math.random() * 1000);
    const registeredEarly = document.getElementById('registeredEarly').value === 'yes';
    const age = parseInt(document.getElementById('age').value);
    let raceDetails = '';

    if (age > 18 && registeredEarly) {
        raceNumber += 1000;
        raceDetails = `${raceNumber}: You will race at 9:30 am.`;
    } else if (age > 18 && !registeredEarly) {
        raceDetails = `${raceNumber}: You will race at 11:00 am.`;
    } else if (age < 18) {
        raceDetails = `${raceNumber}: You will race at 12:30 pm.`;
    } else {
        raceDetails = 'Please see registration desk';
    }

    document.getElementById('raceDetails').innerText = raceDetails;
});