const endDate = "20 January 2024 3:08 PM"
const inputs = document.querySelectorAll("input")

document.getElementById("end-date").innerText = endDate

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000

    // console.log(end);
    // console.log(now);

    if (diff < 0) return;

    console.log(diff);
    
    //! Calculate Days
    inputs[0].value = Math.floor(diff / 3600 / 24)

    //! Calculate Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    //! Calculate Minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    //! Calculate Seconds
    inputs[3].value = Math.floor(diff) % 60;
}


setInterval(() => {
    clock()
}, 1000);


//! For Reference 
/*
    * 1 day = 24 hrs
    * 1 hr = 60 mins
    * 60 mins = 3600 sec
*/