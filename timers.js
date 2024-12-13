// JavaScript file containing all the JavaScript code for the task to be completed under Part 2: Implementing Timers in JavaScript.

// Task 1: countdown timer
let countdownInterval;
const currentDateTime = new Date().getTime();
const timerDisplay = document.getElementById("countdownTimer");
const startButton = document.getElementById("startButton");
const durationInput = document.getElementById("timerDuration");

startButton.addEventListener("click", () => {
    let duration = durationInput.value;

    // check for appropriate duration
    if (duration <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    // update timer
    const updateTimer = () => {
        if (duration <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            timerDisplay.textContent = duration;
            duration--;
        }
    };

    // start countdown
    timerInterval = setInterval(updateTimer, 1000);
});


// Task 2: timeout display
setTimeout(function() {
    document.getElementById("timeoutDisplay").textContent = "It has been 15 seconds since you opened this web page!";
}, 15000);


// Task 3: repeated message
let repeatMessage = setInterval(function() {
    alert("Time to click ok!")
}, 5000)

// stop repeated message
stopAlert.addEventListener("click", () => {
    clearInterval(repeatMessage)
})