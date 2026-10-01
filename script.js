console.log("script.js is connected");
let hasRSVPED = false
let officerTabOpen = false
function handleRSVP(element) {
    if (!hasRSVPED){
        const message = document.getElementById("replace")
        message.textContent = "You're on the list — see you there!";
        message.classList.add("feedback-message");

        const rsvpButton = document.getElementById("rsvpBtn");
        rsvpButton.after(message);
        hasRSVPED = true;
        element.setAttribute("style", "cursor: not-allowed; background-color: #c7c7c7;")
    }
}
function renderOfficerInfo(element){
    if (!officerTabOpen){
        element.innerHTML = "---------Close--------"
        let sec = document.createElement("div");
        sec.classList.add("removable");
        sec.style.backgroundColor = "#eeeeee"
        sec.style.marginRight = "70%";
        sec.style.marginLeft = '20px';
        sec.innerHTML = "<p>Our fearless leader John Pro Gramer has been running our club since his freshmen year! He is passionate about programing and belives everybody should learn web-dev, even with AI.</p>";
        let button = document.getElementById("officerButton");
        button.after(sec);
        officerTabOpen=true;
    }else{
        element.innerHTML = "About our club Officer"
        rem = document.getElementsByClassName("removable")[0]
        console.log(rem)
        rem.remove()
        officerTabOpen=false;
    }
}