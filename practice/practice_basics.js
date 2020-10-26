/*
*Write a JavaScript program to display the current day and time in the following format.  Go to the editor
* Sample Output : Today is : Tuesday.
* Current time is : 10 PM : 30 : 38
*
* */
const weekDays = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
async function currentDateInfo(){
    let date = new Date()
    let hours = date.getHours();
    hours = (hours > 12) ? (hours - 12) +" PM": hours+ "AM";
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    await console.log("Today is : ", weekDays[date.getDay()],"\n",`Current time is: ${hours} : ${minutes} : ${seconds}`);
}

