function updateDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const now = new Date();

    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true
    };

    dateTimeDisplay.innerHTML = now.toLocaleDateString('en-US', options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initialize the date and time on page load
updateDateTime();
