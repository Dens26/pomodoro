let workTimer = 3600;
let restTimer = 600;
let timerId;
let timerRunning = false;

const btnLancer = document.querySelector(`.btn-lancer`);
btnLancer.addEventListener("click", evt => {
    if (!timerRunning)
        timerId = setInterval("timer()", 1000);
}, false)

let workSeconds = document.querySelector(`.work-seconds`);
let workminutes = document.querySelector(`.work-minutes`);
let restSeconds = document.querySelector(`.rest-seconds`);
let restminutes = document.querySelector(`.rest-minutes`);

let cycleValue = document.querySelector(`.cycle-value`);
function timer() {
    if (workTimer != 0) {
        timerRunning = true;
        workTimer -= 1;
        updateTimer();
    }
    else {
        if (restTimer != 0) {
            restTimer -= 1;
            updateTimer();
        }
        else {
            clearInterval(timerId);
            workTimer = 60;
            restTimer = 60;
            updateTimer();
            cycleValue.textContent = parseInt(cycleValue.textContent) + 1;
            timerId = setInterval("timer()", 1000);
        }
    }
}

function updateTimer() {
    workminutes.textContent = `${Math.floor(workTimer / 60).toFixed(0)}`;
    workSeconds.textContent = `${workTimer % 60}`;
    if (parseInt(workSeconds.textContent) < 10) {
        workSeconds.textContent = "0" + workSeconds.textContent;
    }

    restminutes.textContent = `${Math.floor(restTimer / 60).toFixed(0)}`;
    restSeconds.textContent = `${restTimer % 60}`;
    if (parseInt(restSeconds.textContent) < 10) {
        restSeconds.textContent = "0" + restSeconds.textContent;
    }
}

const btnReset = document.querySelector(`.btn-reset`);
btnReset.addEventListener("click", evt => {
    clearInterval(timerId);
    timerRunning = false;
    workTimer = 3600;
    restTimer = 600;
    cycleValue.textContent = "0";
    updateTimer()
}, false)
