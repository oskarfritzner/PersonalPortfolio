//page-btns
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

//pages
const homePage = document.getElementById("homepage-content-container");
const portfolio = document.getElementById("portfolio-content-container");
const about = document.getElementById("about-content-container");

const navOptions = document.getElementsByClassName("navItem");

let counter = 0;

function goRight() {

    switch (counter) {
        case 0: 
            homePage.style.display="none";
            portfolio.style.display="block";
            navOptions[0].innerHTML = '<a class="nav-link">Home</a';
            navOptions[1].innerHTML = '<a class="chosenPage" class="nav-link">Portfolio</a';
            navOptions[2].innerHTML = '<a class="nav-link">About</a';
            leftBtn.style.display = "block";
        return counter += 1;
        case 1: 
            portfolio.style.display="none";
            about.style.display="block";
            navOptions[0].innerHTML = '<a class="nav-link">Home</a';
            navOptions[1].innerHTML = '<a class="nav-link">Portfolio</a';
            navOptions[2].innerHTML = '<a class="chosenPage" class="nav-link">About</a';
            rightBtn.style.display = "none";
        return counter += 1;
        case 2: 
            about.style.display="none";
            homePage.style.display="block";
            navOptions[0].innerHTML = '<a class="chosenPage" class="nav-link">Home</a';
            navOptions[1].innerHTML = '<a class="nav-link">Portfolio</a';
            navOptions[2].innerHTML = '<a class="nav-link">About</a';
        counter = 0;
        break;
    }
}

function goLeft() {
    switch (counter) {
        case 0: 
            homePage.style.display="none";
            about.style.display="block";
            navOptions[0].innerHTML = '<a class="nav-link">Home</a';
            navOptions[1].innerHTML = '<a class="nav-link">Portfolio</a';
            navOptions[2].innerHTML = '<a class="chosenPage" class="nav-link">About</a';
        return counter = 2;
        case 1: 
            portfolio.style.display="none";
            homePage.style.display="block";
            navOptions[0].innerHTML = '<a class="chosenPage" class="nav-link">Home</a';
            navOptions[1].innerHTML = '<a class="nav-link">Portfolio</a';
            navOptions[2].innerHTML = '<a class="nav-link">About</a';
            leftBtn.style.display = "none";
        return counter -= 1;
        case 2: 
            about.style.display="none";
            portfolio.style.display="block";
            navOptions[0].innerHTML = '<a class="nav-link">Home</a';
            navOptions[1].innerHTML = '<a class="chosenPage" class="nav-link">Portfolio</a';
            navOptions[2].innerHTML = '<a class="nav-link">About</a';
            rightBtn.style.display = "block";
        return counter -= 1;
    }
}

//Linking page btns



//DarkMode functions

//Styling-btns
const colourModeBtn = document.getElementById("colour-mode-btn");
const professionalMode = document.getElementById("style-mode-btn");

//Elements to style
const pageContainer = document.getElementById("page-container");
const navBar = document.getElementById("navBar");
const navItems = document.getElementsByClassName("navItem");
const webPage = document.getElementById("webpage");
const gridItems = document.getElementsByClassName("grid-element");

console.log(navItems);
let darkModeOn = false;


function changeColourMode() {
    if(darkModeOn != true) {
        colourModeBtn.innerHTML = "Light Mode"
        pageContainer.style.backgroundColor = "black";
        colourModeBtn.style.color = "black";
        colourModeBtn.style.backgroundColor = "blanchedalmond";
        professionalMode.style.color = "black";
        professionalMode.style.backgroundColor = "blanchedalmond";
        navBar.style.borderBottom = "1px solid blanchedalmond";
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "blanchedalmond";
        };
        pageContainer.style.color = "blanchedalmond";
        webPage.style.boxShadow = "0 0 30px blanchedalmond"

        for(let i = 0;i < gridItems.length; i++) {
            gridItems[i].style.boxShadow = "0 0 50px blanchedalmond";
        }

        return darkModeOn = true;
    } else {
        colourModeBtn.innerHTML = "Dark Mode"
        pageContainer.style.backgroundColor = "blanchedalmond";
        colourModeBtn.style.color = "white";
        colourModeBtn.style.backgroundColor = "black";
        professionalMode.style.color = "white";
        professionalMode.style.backgroundColor = "black";
        navBar.style.borderBottom = "1px solid black";
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "black";
        };
        pageContainer.style.color = "black";

        for(let i = 0; i < gridItems.length; i++) {
            gridItems[i].style.boxShadow = "0 0 50px blanchedalmond";
        }
        return darkModeOn = false;
    }
};

colourModeBtn.addEventListener("click", changeColourMode);
rightBtn.addEventListener("click", goRight);
leftBtn.addEventListener("click", goLeft);