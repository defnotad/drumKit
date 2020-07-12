var documents = document.querySelectorAll(".drum");
var audio;

function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    setTimeout(function () { active.classList.remove("pressed"); }, 100);
}

function checker(checker) {
    switch (checker) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    audio.play();
}

document.addEventListener("keypress", function (event) {
    checker(event.key);
    buttonAnimation(event.key);
});

for (var i = 0; i < documents.length; i++) {
    documents[i].addEventListener("click", function () {
        checker(this.innerText);
        buttonAnimation(this.innerText);
    });
}