document.addEventListener("DOMContentLoaded", function() {
    // Populate options for day, month, and year
    populateOptions();

    // Add event listener to submit button
    document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action of the link

        // Get selected values
        var day = parseInt(document.getElementById("daySelect").value);
        var month = parseInt(document.getElementById("monthSelect").value);

        // Validate selected date
        if (isNaN(day) || isNaN(month) || day < 1 || month < 1 || month > 12) {
            alert("Please select a valid date.");
            return;
        }

        // Get zodiac sign based on the selected date
        var zodiacSign = getZodiacSign(day, month);

        // Display the zodiac sign
        alert("Your Zodiac Sign is: " + zodiacSign);

        // Reset form data by reloading the page
        location.reload();
    });
});

function populateOptions() {
    // Populate options for day (1-31)
    var daySelect = document.getElementById("daySelect");
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        daySelect.add(option);
    }

    // Populate options for month (1-12)
    var monthSelect = document.getElementById("monthSelect");
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        monthSelect.add(option);
    }
}

function getZodiacSign(day, month) {
    // Determine zodiac sign based on day and month
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return "Gemini";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        return "Libra";
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else {
        return "Pisces";
    }
}
