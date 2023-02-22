const homeScore = document.getElementById("homeScore");
let scoreHome = 0

function plus1home() {
    console.log("button clicked");
    scoreHome = scoreHome+1;
    homeScore.textContent = scoreHome;
}

function plus2home() {
    console.log("button clicked");
    scoreHome = scoreHome+2;
    homeScore.textContent = scoreHome;
}

function plus3home() {
    console.log("button clicked");
    scoreHome = scoreHome+3;
    homeScore.textContent = scoreHome;
}

function minus1home() {
    console.log("button clicked");
    scoreHome = scoreHome-1;
    homeScore.textContent = scoreHome;
}

function minus2home() {
    console.log("button clicked");
    scoreHome = scoreHome-2;
    homeScore.textContent = scoreHome;
}

function minus3home() {
    console.log("button clicked");
    scoreHome = scoreHome-3;
    homeScore.textContent = scoreHome;
}

const guestScore = document.getElementById("guestScore");
let scoreGuest = 0

function plus1guest() {
    console.log("button clicked");
    scoreGuest = scoreGuest+1;
    guestScore.textContent = scoreGuest;
}

function plus2guest() {
    console.log("button clicked");
    scoreGuest = scoreGuest+2;
    guestScore.textContent = scoreGuest;
}

function plus3guest() {
    console.log("button clicked");
    scoreGuest = scoreGuest+3;
    guestScore.textContent = scoreGuest;
} 

function newgame() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = scoreHome;
    guestScore.textContent = scoreGuest;
}

function minus1guest() {
    console.log("button clicked");
    scoreGuest = scoreGuest-1;
    guestScore.textContent = scoreGuest;
}

function minus2guest() {
    console.log("button clicked");
    scoreGuest = scoreGuest-2;
    guestScore.textContent = scoreGuest;
}

function minus3guest() {
    console.log("button clicked");
    scoreGuest = scoreGuest-3;
    guestScore.textContent = scoreGuest;
} 

let hlHome = document.getElementById("homeScore")

function highlightHome() {
    if(scoreHome > scoreGuest) {
        hlHome.style.color = "white";
        hlGuest.style.color = "#F94F6D";
    } else {
        hlHome.style.color = "#F94F6D";  
    }
}

let hlGuest = document.getElementById("guestScore")

function highlightGuest() {
    if(scoreGuest > scoreHome) {
        hlGuest.style.color = "white";
        hlHome.style.color = "#F94F6D";
    } else {
        hlGuest.style.color = "#F94F6D";  
    }
}
