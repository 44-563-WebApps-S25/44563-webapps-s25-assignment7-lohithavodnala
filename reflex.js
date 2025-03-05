// Part 5 - Declare the halt time variable
let haltTime = undefined;

// Part 5 - Record the time when Halt is pressed
function recordTime() {
    haltTime = Date.now();
    console.log("Halt Time Recorded:", haltTime);
}

// Attach the function to the Halt button via HTML inline onclick
// This is already set in reflex.html: <button onclick="recordTime()">Halt</button>

// Part 6 - Countdown and Timing Logic
function beginTime() {
    // Start a 5 second countdown (5...4...3...2...1...0)
    for (let i = 0; i <= 5; i++) {
        setTimeout(function() {
            document.getElementById("counter").innerText = `Count: ${5 - i}`;
        }, i * 1000);
    }

    // After countdown finishes (5 seconds), check timing accuracy
    setTimeout(function() {
        if (haltTime === undefined) {
            document.getElementById("target").innerText = "Not soon enough";
        } else {
            let targetTime = Date.now();
            let elapsed = targetTime - haltTime;

            document.getElementById("target").innerText = `Time was ${elapsed} ms`;
        }

        // Reset for next round
        haltTime = undefined;
    }, 5000);
}

// The "Go" button is already linked via HTML: <button onclick="beginTime()">Go</button>
