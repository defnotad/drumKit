var documents = document.querySelectorAll(".drum");
var audio = new Audio("sounds/tom-1.mp3");

document.addEventListener("keypress", function (event) {
    switch (event.key) {
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
});

for (var i = 0; i < documents.length; i++) {
    documents[i].addEventListener("click", function () {
        var audio;
        switch (this.innerText) {
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
    });
}