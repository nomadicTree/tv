const week1Start = new Date(2024, 8, 2); // Start date of week 1
const inactivityPeriod = 3000; // Time in milliseconds (e.g., 3000ms = 3 seconds)
const weekStartDates = [];
var availableQuestions = [];
var questionTime = true; // If true, a new question should be displayed. If false, the answer needs to be revealed.
var currentQuestion;
var inactivityTimeout;

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

/**
 * Update the question displayed.
 * Reveal the answer if it has not been shown yet.
 * Replace the question if the answer has been revealed.
 */
function cycleQuestion() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    if (availableQuestions.length !== 0) {
        if (questionTime) {
            currentQuestion = availableQuestions.pop();
            questionElement.innerHTML = currentQuestion.question;
            answerElement.innerHTML = "";
        } else {
            answerElement.innerHTML = currentQuestion.answer;
        }
    } else {
        resetAvailableQuestions();
    }
    questionTime = !questionTime;
}

/**
 * Wrap given text in <sub> tags. 
 * @param {String} text 
 * @returns {String} - text wrapped in <sub> tags
 */
function createSubscriptElement(text) {
    var subscript = document.createElement("sub");
    subscript.textContent = text;
    return subscript;
}

/**
 * Updates the displayed week information showing the week in denary, binary, and hex.
 * @param {number} denaryWeekNumber - the current week number as a denary integer.
 */
function updateWeek(denaryWeekNumber) {
    const currentDenaryWeekElement = document.getElementById("currentDenaryWeek");
    const currentBinaryWeekElement = document.getElementById("currentBinaryWeek")
    const currentHexWeekElement = document.getElementById("currentHexWeek");
    const binaryWeekNumber = denaryTo8bitBinary(denaryWeekNumber);
    const hexWeekNumber = denaryTo2DigitHex(denaryWeekNumber);
    currentDenaryWeekElement.textContent = "Week " + denaryWeekNumber;
    currentDenaryWeekElement.appendChild(createSubscriptElement(10));
    currentBinaryWeekElement.textContent = binaryWeekNumber;
    currentBinaryWeekElement.appendChild(createSubscriptElement(2));
    currentHexWeekElement.textContent = hexWeekNumber;
    currentHexWeekElement.appendChild(createSubscriptElement(16));
}

/**
 * Update the clock
 * @param {String} clockStr 
 */
function updateClock(clockStr) {
    const clockElement = document.getElementById("clock");
    clockElement.textContent = clockStr;
}

/**
 * Update the date
 * @param {String} dateStr 
 */
function updateDate(dateStr) {
    const dateElement = document.getElementById("date");
    dateElement.textContent = dateStr;
}

/**
 * Update the period
 * @param {String} currentPeriod 
 */
function updatePeriod(currentPeriod) {
    const currentPeriodElement = document.getElementById("currentPeriod");
    currentPeriodElement.textContent = currentPeriod;
}

/**
 * Update the page for the current time.
 */
function updateEverything() {
    const now = getCurrentTime();
    const clockStr = timeToStr(now);
    updateClock(clockStr);
    const dateStr = dateToStr(now);
    updateDate(dateStr);
    const currentPeriod = calculateCurrentPeriod(now);
    updatePeriod(currentPeriod);
    const denaryWeekNumber = calculateCurrentWeek(now);
    updateWeek(denaryWeekNumber);
    if (now.getSeconds() % 15 === 0) {
        cycleQuestion();
    }
    setTimeout(updateEverything, 1000);
}

/**
 * Hide the cursor
 */
function hideCursor() {
    document.body.classList.add('cursor-hidden');
}

/**
 * Show the cursor
 */
function showCursor() {
    document.body.classList.remove('cursor-hidden');
}

/**
 * Reset the inactivity timer for hiding the cursor
 */
function resetInactivityTimer() {
    showCursor(); // Show cursor on user activity
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(hideCursor, inactivityPeriod);
}

/**
 * Attach event listeners to detect user activity and start the inactivity timer.
 */
function startInactivityTimer() {
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keypress', resetInactivityTimer);
    document.addEventListener('mousedown', resetInactivityTimer);
    document.addEventListener('scroll', resetInactivityTimer);
    resetInactivityTimer();
}

/**
 * Initialize the application.
 */
function init() {
    startInactivityTimer();
    generateWeekDates(week1Start);
    resetAvailableQuestions();
    cycleQuestion();
    updateEverything();
}
