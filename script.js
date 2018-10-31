//TITLE SCREEN

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hidden");
    document.querySelector(".button_play").addEventListener("click", hideStart);
    document.querySelector(".button_settings").addEventListener("click", hideStartButtons);
    document.querySelector(".button_quit").addEventListener("click", hideStart);
}

function hideStart() {
    console.log("hideStart");
    document.querySelector(".button_play").removeEventListener("click", hideStart);
    document.querySelector(".button_play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

//START GAME

function startGame() {
    console.log("startGame");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
    document.querySelector("#game").classList.add("fade_in");
}



//SETTINGS SCREEN

function hideStartButtons() {
    console.log("hideStartButtons");
    document.querySelector(".button_play").removeEventListener("click", hideStart);
    document.querySelector(".button_settings").removeEventListener("click", hideStartButtons);
    document.querySelector(".button_quit").removeEventListener("click", hideStart);
    document.querySelector(".button_settings").classList.remove("pulse");
    document.querySelector(".button_play").classList.add("fade_out");
    document.querySelector(".button_settings").classList.add("fade_out");
    document.querySelector(".button_quit").classList.add("fade_out");
    document.querySelector(".button_settings").addEventListener("animationend", showSettings);
}

function showSettings() {
    console.log("showSettings");
    document.querySelector(".button_settings").removeEventListener("animationend", showSettings);
    document.querySelector("#settings").classList.remove("hidden");
    document.querySelector("#settings").classList.add("fade_in");
    document.querySelector(".button_back").addEventListener("click", hideSettings);
}

//BACK TO TITLE



function hideSettings() {
    console.log("hideSettings");
    document.querySelector(".button_back").removeEventListener("click", hideSettings);
    document.querySelector(".button_back").classList.remove("pulse");
    document.querySelector(".button_music").classList.add("fade_out");
    document.querySelector(".button_effects").classList.add("fade_out");
    document.querySelector(".button_back").classList.add("fade_out");
    document.querySelector(".button_back").addEventListener("animationend", showStartButtons);
}


function showStartButtons() {
    console.log("showStartButtons");
    document.querySelector(".button_back").addEventListener("animationend", showStartButtons);
    document.querySelector(".button_play").classList.add("fade_in");
    document.querySelector(".button_settings").classList.add("fade_in");
    document.querySelector(".button_quit").classList.add("fade_in");
    document.querySelector(".button_play").addEventListener("click", hideStart);
    document.querySelector(".button_settings").addEventListener("click", hideStartButtons);
    document.querySelector(".button_quit").addEventListener("click", hideStart);
}
