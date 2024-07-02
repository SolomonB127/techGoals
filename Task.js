// Date-Time Data
document.addEventListener("DOMContentLoaded", () =>{
    function timeUpDate(){
        const present = new Date();
        const timeElement = document.getElementById("time");
        const presentDay = document.getElementById("day");
        const options = {weekday : 'long'};

        timeElement.textContent = present.toUTCString().split(" ")[4]; //Time Display in UTC
        presentDay.textContent = new Intl.DateTimeFormat('en-US', options).format(present); // Display Day of the Week
    }

    timeUpDate();
    setInterval(timeUpDate,1000); //Updates every second
})