document.querySelector("#button1").addEventListener("click", button1);
document.querySelector("#button2").addEventListener("click", button2);
document.querySelector("#button3").addEventListener("click", button3);

let pageroot = document.querySelector(":root").style;

function button1() {
    pageroot.setProperty("--textColour", "midnightblue");
    pageroot.setProperty("--backgroundColour", "darkseagreen");
    pageroot.setProperty("--headerColour", "lightseagreen");
    pageroot.setProperty("--blurColour", "white");
}

function button2() {
    pageroot.setProperty("--textColour", "maroon");
    pageroot.setProperty("--backgroundColour", "lightsteelblue");
    pageroot.setProperty("--headerColour", "rosybrown");
    pageroot.setProperty("--blurColour", "white");
}

function button3() {
    pageroot.setProperty("--textColour", "black");
    pageroot.setProperty("--backgroundColour", "gainsboro");
    pageroot.setProperty("--headerColour", "lightblue");
    pageroot.setProperty("--blurColour", "black");
}

let changeText = document.getElementById("greeting");
let day = new Date();
let time = day.getHours();

if(time < 12){
    changeText.textContent = "Good Morning";
}else if(time < 19){
    changeText.textContent = "Good Afternoon";
}else{
    changeText.textContent = "Good Evening";
}

