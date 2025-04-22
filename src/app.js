const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

const monthOfTheYear = (date = new Date()) => {

    const month = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return month[date.getMonth()];
}

try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}
// add lots of thing more please work now

exports.dayOfTheWeek = dayOfTheWeek;
exports.monthOfTheYear = monthOfTheYear;