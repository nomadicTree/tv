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
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

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

function calculateCurrentPeriod(time) {
    const today = time.getDate();
    
    // Weekday?
    if (today >= 1 && today <= 5) {
        // Mon-Fri?
        if (today != 5) {
        
        } else {
            // Friday
        }

    } 
}

function updateTime() {
    const now = getCurrentTime();
    const clockStr = timeToStr(now);
    const dateStr = dateToStr(now);
    document.getElementById("clock").textContent = clockStr;
    document.getElementById("date").textContent = dateStr;
    setTimeout(updateTime, 1000);
}
