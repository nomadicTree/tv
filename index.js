const weekStartDates = [];
var availableQuestions = [];
var questionTime = true;
var currentQuestion;



/**
 * Convert a denary (decimal) number to an 8-bit binary string.
 * @param {number} num - The number to convert.
 * @returns {string|null} - The 8-bit binary string or null if the number is out of range.
 */
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

/**
 * Convert a denary (decimal) number to a 2-digit hexadecimal string.
 * @param {number} num - The number to convert.
 * @returns {string|null} - The 2-digit hexadecimal string or null if the number is out of range.
 */
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

/**
 * Get the current time as a Date object.
 * @returns {Date} - The current date and time.
 */
function getCurrentTime() {
    const now = new Date();
    return now
}

/**
 * Add a leading zero to a number if it is less than 10.
 * @param {number} i - The number to pad.
 * @returns {string} - The padded number as a string.
 */
function padWithLeadingZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/**
 * Convert a time to a string in the format hh:mm:ss.
 * @param {Date} time - The time to convert.
 * @returns {string} - The time as a string.
 */
function timeToStr(time) {
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hours = padWithLeadingZero(hours);
    minutes = padWithLeadingZero(minutes);
    seconds = padWithLeadingZero(seconds);

    const clockStr = hours + ":" + minutes + ":" + seconds;
    return clockStr;
}

/**
 * Convert a date to a string in the format dd/mm/yyyy.
 * @param {Date} time - The date to convert.
 * @returns {string} - The date as a string.
 */
function dateToStr(time) {
    var day = time.getDate();
    var month = time.getMonth() + 1;
    const year = time.getFullYear();

    day = padWithLeadingZero(day);
    month = padWithLeadingZero(month);

    const dateStr = day + "/" + month + "/" + year;
    return dateStr;
}

/**
 * Determines if a given time is within a specified range.
 * @param {string} time - The current time in HH:MM format.
 * @param {Array<string>} range - An array with two elements representing the start and end times in HH:MM format.
 * @returns {boolean} - True if the time is within the range, otherwise false.
 */
function timeInRange(time, range) {
    const timeMinutes = convertToMinutes(time);
    const startMinutes = convertToMinutes(range[0]);
    const endMinutes = convertToMinutes(range[1]);
    return timeMinutes >= startMinutes && timeMinutes < endMinutes;
}

/**
 * Convert a time in HH:MM format to minutes.
 * @param {string} time - The time to convert.
 * @returns {number} - The time in minutes.
 */
function convertToMinutes(time) {
    const parts = time.split(":");
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
}

/**
 * Calculates the current period based on the given time and day.
 * @param {string} time - The current time in HH:MM format.
 * @param {string} day - The current day of the week.
 * @returns {string} - The current period.
 */
function calculatePeriod(time, day) {
    var currentPeriod;

    // Define the period schedules for different days
    const schedules = {
        normal: [
            { range: ["08:30", "08:50"], period: "Registration" },
            { range: ["08:50", "09:50"], period: "Period 1" },
            { range: ["09:50", "10:50"], period: "Period 2" },
            { range: ["10:50", "11:10"], period: "Break time" },
            { range: ["11:10", "12:10"], period: "Period 3" },
            { range: ["12:10", "13:10"], period: "Activity/Tutor time" },
            { range: ["13:10", "14:10"], period: "Period 4" },
            { range: ["14:10", "15:10"], period: "Period 5" }
        ],
        wednesday: [
            { range: ["08:30", "08:50"], period: "Registration" },
            { range: ["08:50", "09:50"], period: "Period 1" },
            { range: ["09:50", "10:50"], period: "Period 2" },
            { range: ["10:50", "11:10"], period: "Break time" },
            { range: ["11:10", "12:10"], period: "Period 3" },
            { range: ["12:10", "12:30"], period: "Tutor time" },
            { range: ["12:30", "13:10"], period: "Activity time" },
            { range: ["13:10", "14:10"], period: "Period 4" },
            { range: ["14:10", "15:10"], period: "Period 5" }
        ],
        friday: [
            { range: ["08:30", "08:50"], period: "Registration" },
            { range: ["08:50", "09:50"], period: "Period 1" },
            { range: ["09:50", "10:50"], period: "Period 2" },
            { range: ["10:50", "11:10"], period: "Break time" },
            { range: ["11:10", "12:10"], period: "Period 3" },
            { range: ["12:10", "12:50"], period: "Activity time" },
            { range: ["12:50", "13:50"], period: "Period 4" },
            { range: ["13:50", "14:50"], period: "Period 5" }
        ]
    };

    // Select the correct schedule based on the day
    var selectedSchedule;
    if (day === "Wednesday") {
        selectedSchedule = schedules.wednesday;
    } else if (day === "Friday") {
        selectedSchedule = schedules.friday;
    } else {
        selectedSchedule = schedules.normal;
    }

    // Determine the current period based on the time
    for (var i = 0; i < selectedSchedule.length; i++) {
        if (timeInRange(time, selectedSchedule[i].range)) {
            currentPeriod = selectedSchedule[i].period;
            break;
        }
    }

    // If no period is found, set to "No lesson"
    if (!currentPeriod) {
        currentPeriod = "No lesson";
    }

    return currentPeriod;
}

/**
 * Calculate the current period based on the given time.
 * @param {Date} time - The current date and time.
 * @returns {string} - The current period.
 */
function calculateCurrentPeriod(time) {
    const currentDay = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const hhmm = hours + ":" + minutes;
    // Weekday?
    if (currentDay >= 1 && currentDay <= 5) {
        if (currentDay === 5) {
            // Friday
            currentPeriod = calculatePeriod(hhmm, "Friday");
        } else if (currentDay === 3) {
            // Wednesday
            currentPeriod = calculatePeriod(hhmm, "Wednesday");
        } else {
            currentPeriod = calculatePeriod(hhmm, "Normal");
        }
    } else {
        currentPeriod = "Weekend";
    }
    return currentPeriod;
}

/**
 * Checks if a given date is within a specified range.
 * @param {Date} time - The date to check.
 * @param {Array<Date>} range - An array with two elements representing the start and end dates.
 * @returns {boolean} - True if the date is within the range, otherwise false.
 */
function dateInRange(time, range) {
    return range[0] <= time && time < range[1];
}

/**
 * Validates if the given date is within the valid date ranges.
 * @param {Date} time - The date to validate.
 * @returns {boolean} - True if the date is valid, otherwise false.
 */
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

/**
 * Generate week start dates from the given start date.
 * @param {Date} startDate - The start date for generating week dates.
 */
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

/**
 * Calculate the current week number based on the given date.
 * @param {Date} time - The current date and time.
 * @returns {number} - The current week number.
 */
function calculateCurrentWeek(time) {
    var weekNumber = 1;
    var i = 0;
    while (i < weekStartDates.length && time >= weekStartDates[i]) {
        i += 1;
        if (i === 1 && time < weekStartDates[i]) {
            break;
        }
        weekNumber += 1;
    }
    return weekNumber;
}
function shuffleArray(array) {
    // Create a copy of the original array to avoid mutating the original
    const shuffledArray = [...array];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function cycleQuestion() {
    if (availableQuestions.length !== 0) {
        if (questionTime) {
            currentQuestion = availableQuestions.pop();
            document.getElementById("question").textContent = currentQuestion.question;
            document.getElementById("answer").textContent = "";
        } else {
            document.getElementById("answer").textContent = currentQuestion.answer;
        }
    } else {
        resetAvailableQuestions();
    }
}

function resetAvailableQuestions() {
    availableQuestions = addAdditionalQuestions(questionData.questions);
    availableQuestions = shuffleArray(availableQuestions);
}


/**
 * Initialize the application by generating week start dates and updating the time.
 */
function init() {
    const week1Start = new Date(2024, 8, 2);
    generateWeekDates(week1Start);
    resetAvailableQuestions();
    console.log(availableQuestions);
    update();
}

/**
 * Update the displayed time, date, period, and week numbers in various formats.
 */
function update() {
    const now = getCurrentTime();
    //const now = new Date(2024, 8, 3, 17, 14);
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
    if (now.getSeconds() % 15 === 0) {
        cycleQuestion();
        questionTime = !questionTime;
    }
    setTimeout(update, 1000);
}
