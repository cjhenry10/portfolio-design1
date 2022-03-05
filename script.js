// for the menu on mobile screens
function responsive() {
    let x = document.getElementById("nav-left")
    // if (x.className === "item") {
    //     x.className += " active"
    // }
    // else {
    //     x.className = "item";
    // }
    x.classList.toggle("active");
}

function responsiveClose() {
    let x = document.getElementById("nav-left");
    if (x.classList == "item active") {
        x.classList = "item";
    }
}

// dark/light theme
// body, header, #nav-left, #nav-right, svg, i

let domArray = []
domArray.push(document.getElementsByTagName("body")[0]);
domArray.push(document.getElementsByTagName("header")[0]);
domArray.push(document.getElementById("nav-left"));
domArray.push(document.getElementById("nav-right"));
domArray.push(document.getElementsByTagName("svg")[0]);
domArray.push(document.getElementsByClassName("theme")[0]);

let h1s = document.getElementsByTagName("h1");
let h1Array = Array.prototype.slice.call(h1s);
h1Array.forEach(element => {
    domArray.push(element);
})
let h3s = document.getElementsByTagName("h3");
let h3Array = Array.prototype.slice.call(h3s);
h3Array.forEach(element => {
    domArray.push(element);
})


let themeToggle = document.getElementById("theme-toggle");
themeToggle.checked = false;

function theme() {
    if (themeToggle.checked) {
        domArray.forEach(element => {
            element.classList.add("light");
        });
    }
    else {
        domArray.forEach(element => {
            element.classList.remove("light");
        });
    }
}

// scrollspy clone https://dev.to/nikhilroy2/how-to-create-javascript-scrollspy-vanilla-js-tutorial-35o9
let menuSection = document.querySelectorAll("#nav-right li");

// click
menuSection.forEach(v => {
    v.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove("active"))
        v.classList.add('active')
        }, 300)
    })
})

// scroll
window.onscroll = (() => {
    let mainSection = document.querySelectorAll("main > div");

    mainSection.forEach((v, i) => {
        let rect = v.getBoundingClientRect().y
        if (rect < window.innerHeight-(0.9 * window.innerHeight)) {
            menuSection.forEach(v => v.classList.remove("active"))
            menuSection[i].classList.add("active")
        }
    })
})
console.log(window.innerHeight)