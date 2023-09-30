const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClicker = document.getElementById("autoClicker")

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let automatickeklikani;
let autoclickerPrice = 100;
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

autoClicker.onclick = () => {
    if (numberOfCookies >= autoclickerPrice) {
        numberOfCookies -= autoclickerPrice;
        //aktualizace poctu
        counter.innerHTML = `Cookies: ${numberOfCookies}`;
        //zvyseni ucinnosti
        autoclickIncrease++;
        //cena
        autoclickerPrice *= 2;
        autoClicker.innerText = "Buy slave: " + autoclickerPrice; 
        //clear
        clearInterval(automatickeklikani);
        //interval
        automatickeklikani = setInterval(() => {
            numberOfCookies += autoclickIncrease;
            counter.innerHTML = `Cookies: ${numberOfCookies}`;
        }, 1000);

    }



}







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





cheats();