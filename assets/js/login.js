let username
let password
let loggedIn = False


function getDetails() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(username)
    loggedIn = True
}

function achievementLoad() {
    fillWithSchoolName()
}

function fillWithSchoolName() {
    let schoolName = document.getElementById("schoolName");

    if(loggedIn) {
        console.log('hi')
        schoolName.innerHTML = username;
    } else {
        schoolName.innerHTML = "please log in";

    }

}