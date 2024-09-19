const greetMessage = document.getElementById("greetMessage");
const date = new Date();
const timeOfPageLoad = date.getHours();


switch (true) {
    case (timeOfPageLoad >= 0 && timeOfPageLoad < 12):
        greetMessage.innerText = "Good Morning";
        break;
    case (timeOfPageLoad >= 12 && timeOfPageLoad < 18):
        greetMessage.innerText = "Good Afternoon";
        break;
    case (timeOfPageLoad >= 18 && timeOfPageLoad < 22):
        greetMessage.innerText = "Good Evening";
        break;
    case (timeOfPageLoad == 22 || timeOfPageLoad == 23):
        greetMessage.innerText = "Good Night";
        break;
    default:
        greetMessage.innerText = "you are in an invalid time";
}