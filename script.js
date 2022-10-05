function $(qry) {return document.querySelector(qry)}

const ss = window.sessionStorage;
// Contrary to popular belief, this is NOT social studies!

if(window.location.pathname == "/") {
    $("#topbar-title").href = "#"
} else {
    $("#topbar-title").href = window.location.host
}
var theme = "light"

if((ss.getItem("vw.introFinished") || window.location.hash) && window.location.pathname == "/") {
    $("#heading-picture").className = "finished";
    $("#topbar").className = "finished";
    $("body").className = `${theme} finished`
} else {
    ss.setItem("vw.introFinished", true)
}

function setUpList() {
    let projectDisplay = $("#beautiful-display");
    if(projectDisplay) {
        let projects = projectDisplay.querySelectorAll("div");
        for(let i = 0; i < projects.length; i++) {
            projects[i].addEventListener("click", ({ctrlKey, shiftKey}) => {
                if(ctrlKey || shiftKey) {
                    open(projects[i].getAttribute("link"), "_blank");
                } else {
                    location.href = projects[i].getAttribute("link");
                }
            })
            projects[i].addEventListener("keydown", ({key, ctrlKey, shiftKey}) => {
                if(key == "Enter") {
                    if(ctrlKey || shiftKey) {
                        open(projects[i].getAttribute("link"), "_blank");
                    } else {
                        location.href = projects[i].getAttribute("link");
                    }
                }
            })
        }
    }

    let projectsList = $("#projects-list");
    if(projectsList) {
        let projects = projectsList.querySelectorAll("ul li[link]");
        for(let i = 0; i < projects.length; i++) {
            projects[i].addEventListener("click", ({ctrlKey, shiftKey}) => {
                if(ctrlKey || shiftKey) {
                    open(projects[i].getAttribute("link"), "_blank");
                } else {
                    location.href = projects[i].getAttribute("link");
                }
            })
            projects[i].addEventListener("keydown", ({key, ctrlKey, shiftKey}) => {
                if(key == "Enter") {
                    if(ctrlKey || shiftKey) {
                        open(projects[i].getAttribute("link"), "_blank");
                    } else {
                        location.href = projects[i].getAttribute("link");
                    }
                }
            })
        }
    }
}
setUpList();