//Your Age in Days

function ageInDays() {
    let birthDate = new Date(prompt("What year were you born? MM-DD-YYYY" ));
    let today = new Date();
    let currentDate = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
    let differenceInTime = currentDate.getTime() - birthDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    console.log(differenceInDays)
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode("You are " + differenceInDays + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}