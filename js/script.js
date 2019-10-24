// Assign DOM elements
const spooky = document.querySelector("#spooky");

const getMessage = days => {
    if (days < 0) {
        return `Halloween was ${-days} days ago.`;
    }

    if (days === 0) {
        return "It's Halloween! Stay spooky!";
    }

    if (days === 1) {
        return "Halloween is tomorrow! Be afraid, be very afraid!";
    }

    if (today.date() == 13 && today.isoWeekday() == 5) {
        let message = `Happy <br> <span class="red">Friday the 13th!</span> <br>`
        return message;
    }

    return `There are <br> <span class="red">${days} days</span> <br> until Halloween!`;
};

const today = moment().startOf("day"); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const message = getMessage(halloween.diff(today, "days")); // Calculate difference

// Display message
spooky.innerHTML = message;
