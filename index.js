const weekStartDates = [];

function getCurrentTime() {
    const now = new Date();
    return now
}

function padWithLeadingZero(i) {
    // Add a leading 0 to a number if it is less than 10, e.g. 9 becomes 09
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timeToStr(time) {
    // Convert time to string in format hh:mm:ss
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hours = padWithLeadingZero(hours);
    minutes = padWithLeadingZero(minutes);
    seconds = padWithLeadingZero(seconds);

    const clockStr = hours + ":" + minutes + ":" + seconds;
    return clockStr;
}

function dateToStr(time) {
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();

    const dateStr = day + "/" + month + "/" + year;
    return dateStr;
}

function timeInRange(time, range) {
    const timeMinutes = convertToMinutes(time);
    const startMinutes = convertToMinutes(range[0]);
    const endMinutes = convertToMinutes(range[1]);
    return timeMinutes >= startMinutes && timeMinutes < endMinutes;
}

function convertToMinutes(time) {
    const parts = time.split(":");
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
}

function calculateNormalPeriod(time) {
    var currentPeriod;
    const regRange = ["08:30", "08:50"];
    const p1Range = ["08:50", "09:50"];
    const p2Range = ["09:50", "10:50"];
    const b1Range = ["10:50", "11:10"];
    const p3Range = ["11:10", "12:10"];
    const b2Range = ["12:10", "13:10"];
    const p4Range = ["13:10", "14:10"];
    const p5Range = ["14:10", "15:10"];

    if (timeInRange(time, regRange)) {
        currentPeriod = "Registration";
    } else if (timeInRange(time, p1Range)) {
        currentPeriod = "Period 1";
    } else if (timeInRange(time, p2Range)) {
        currentPeriod = "Period 2";
    } else if (timeInRange(time, b1Range)) {
        currentPeriod = "Break time";
    } else if (timeInRange(time, p3Range)) {
        currentPeriod = "Period 3";
    } else if (timeInRange(time, b2Range)) {
        currentPeriod = "Activity time/Tutor time";
    } else if (timeInRange(time, p4Range)) {
        currentPeriod = "Period 4";
    } else if (timeInRange(time, p5Range)) {
        currentPeriod = "Period 5";
    } else {
        currentPeriod = "No lesson";
    }
    return currentPeriod;
}

function calculateWednesdayPeriod(time) {
    var currentPeriod;
    const regRange = ["08:30", "08:50"];
    const p1Range = ["08:50", "09:50"];
    const p2Range = ["09:50", "10:50"];
    const b1Range = ["10:50", "11:10"];
    const p3Range = ["11:10", "12:10"];
    const pmTutorRange = ["12:10", "12:30"];
    const b2Range = ["12:30", "13:10"];
    const p4Range = ["13:10", "14:10"];
    const p5Range = ["14:10", "15:10"];
    if (timeInRange(time, regRange)) {
        currentPeriod = "Registration";
    } else if (timeInRange(time, p1Range)) {
        currentPeriod = "Period 1";
    } else if (timeInRange(time, p2Range)) {
        currentPeriod = "Period 2";
    } else if (timeInRange(time, b1Range)) {
        currentPeriod = "Break time";
    } else if (timeInRange(time, p3Range)) {
        currentPeriod = "Period 3";
    } else if (timeInRange(time, pmTutorRange)) {
        currentPeriod = "Tutor time";
    } else if (timeInRange(time, b2Range)) {
        currentPeriod = "Activity time";
    } else if (timeInRange(time, p4Range)) {
        currentPeriod = "Period 4";
    } else if (timeInRange(time, p5Range)) {
        currentPeriod = "Period 5";
    } else {
        currentPeriod = "No lesson";
    }
    return currentPeriod;
}

function calculateFridayPeriod(time) {
    var currentPeriod;
    const regRange = ["08:30", "08:50"];
    const p1Range = ["08:50", "09:50"];
    const p2Range = ["09:50", "10:50"];
    const b1Range = ["10:50", "11:10"];
    const p3Range = ["11:10", "12:10"];
    const b2Range = ["12:10", "12:50"];
    const p4Range = ["12:50", "13:50"];
    const p5Range = ["13:50", "14:50"];
    if (timeInRange(time, regRange)) {
        currentPeriod = "Registration";
    } else if (timeInRange(time, p1Range)) {
        currentPeriod = "Period 1";
    } else if (timeInRange(time, p2Range)) {
        currentPeriod = "Period 2";
    } else if (timeInRange(time, b1Range)) {
        currentPeriod = "Break time";
    } else if (timeInRange(time, p3Range)) {
        currentPeriod = "Period 3";
    } else if (timeInRange(time, b2Range)) {
        currentPeriod = "Activity time";
    } else if (timeInRange(time, p4Range)) {
        currentPeriod = "Period 4";
    } else if (timeInRange(time, p5Range)) {
        currentPeriod = "Period 5";
    } else {
        currentPeriod = "No lesson";
    }
    return currentPeriod;
}

function calculateCurrentPeriod(time) {
    const currentDay = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const hhmm = hours + ":" + minutes;
    // Weekday?
    if (currentDay >= 1 && currentDay <= 5) {
        if (currentDay === 5) {
            // Friday
            currentPeriod = calculateFridayPeriod(hhmm);
        } else if (currentDay === 3) {
            // Wednesday
            currentPeriod = calculateWednesdayPeriod(hhmm);
        } else {
            currentPeriod = calculateNormalPeriod(hhmm);
        }
    } else {
        currentPeriod = "Weekend";
    }
    return currentPeriod;
}

function dateInRange(time, range) {
    return range[0] <= time && time < range[1];
}

function validDate(time) {
    const invalidRanges = [
        [new Date(2024, 9, 25), new Date(2024, 10, 1)], // October 25 to November 1
        [new Date(2024, 11, 21), new Date(2025, 0, 5)], // December 21 to January 5
        [new Date(2025, 1, 17), new Date(2025, 1, 21)], // February 17 to February 21
        [new Date(2025, 4, 4), new Date(2025, 4, 21)], // April 4 to April 21
        [new Date(2025, 5, 26), new Date(2025, 5, 30)] // May 26 to May 30
    ];

    for (let i = 0; i < invalidRanges.length; i++) {
        if (dateInRange(time, invalidRanges[i])) {
            return false;
        }
    }
    return true;
}

function generateWeekDates(startDate) {
    var currentWeekStart = startDate;
    var weekCount = 0;
    const maxWeekNumber = 40;

    while (weekCount < maxWeekNumber) {
        if (validDate(currentWeekStart)) {
            weekStartDates.push(new Date(currentWeekStart.getTime()));
            weekCount += 1;
        }
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    }
}

function calculateCurrentWeek(time) {
    var weekNumber = 1;
    var i = 0
    while (i < weekStartDates.length && time >= weekStartDates[i]) {
        i += 1;
        weekNumber += 1;
    }
    return weekNumber - 1;
}

function init() {
    const week1Start = new Date(2024, 8, 2);
    generateWeekDates(week1Start);
    updateTime();
}

function denaryTo8bitBinary(num) {
    if (num < 0 || num > 255) {
        console.log("Error: Number is out of range for an 8-bit binary representation.");
        return null;
    }

    var binaryString = num.toString(2); // Convert to binary
    while (binaryString.length < 8) {
        binaryString = '0' + binaryString; // Pad with leading zeros
    }

    return binaryString;
}


function denaryTo2DigitHex(num) {
    if (num < 0 || num > 255) {
        console.log("Error: Number is out of range for a 2-digit hexadecimal representation.");
        return null;
    }

    var hexString = num.toString(16); // Convert to hexadecimal
    while (hexString.length < 2) {
        hexString = '0' + hexString; // Pad with leading zeros if necessary
    }

    return hexString.toUpperCase(); // Convert to uppercase for consistency
}


function updateTime() {
    const now = getCurrentTime();
    //const now = new Date(2024, 11, 3, 17, 14);
    const clockStr = timeToStr(now);
    const dateStr = dateToStr(now);
    const periodStr = calculateCurrentPeriod(now);
    const denaryWeek = calculateCurrentWeek(now);
    const binaryWeek = denaryTo8bitBinary(denaryWeek);
    const hexWeek = denaryTo2DigitHex(denaryWeek);
    document.getElementById("clock").textContent = clockStr;
    document.getElementById("date").textContent = dateStr;
    document.getElementById("currentPeriod").textContent = periodStr;
    document.getElementById("currentDenaryWeek").textContent = denaryWeek;
    document.getElementById("currentBinaryWeek").textContent = binaryWeek;
    document.getElementById("currentHexWeek").textContent = hexWeek;
    //document.getElementById("currentWeek").textContent = weekStr;
    setTimeout(updateTime, 1000);
}
