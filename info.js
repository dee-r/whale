document.querySelector("#notification").addEventListener("click", () => {
    document.body.style.setProperty("transform", "rotate(180deg)")
    
});

Notification.requestPermission().then((result) => {
    if(result === "granted"){
        new Notification("Welcome to the info page!");
    }
  });