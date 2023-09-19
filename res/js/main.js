const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");


let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;

cookie.onclick = () => {
    numberOfCookies+= clickUpgradeIncrease;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
};


//apgrejd

const clickUpgradeFunction = () => {
    if (numberOfCookies>= costOfClickUpgrade) {
        //odecteni ceny
        numberOfCookies -= costOfClickUpgrade;
        //aktualizace poctu
        counter.innerHTML = `Cookies: ${numberOfCookies}`;
        //zvedneme pocet susenek na klik
        clickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;






//CHEATY!!!!!
//function nazev()  {}
function cheats() {
    console.log("cheats on");
    numberOfCookies += 1000000;
    counter.innerHTML = "Cookies: " + numberOfCookies;
}


const cheats2 = () => {
    console.log("cheats on");
    numberOfCookies *= 2;
    counter.innerHTML = "Cookies: " + numberOfCookies;
}


