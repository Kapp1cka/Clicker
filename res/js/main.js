const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClicker = document.getElementById("autoClicker");
const upgradeResource = document.getElementById("upgradeResource");
const progressBar = document.getElementById("progressBar").getAttribute("aria-valuenow");
const Otrokarna = document.getElementById("Otrokarna");
const perSec = document.getElementById("perSec");
const excavatorUpgrade = document.getElementById("excavatorUpgrade");



let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let automatickeklikani;
let autoclickerPrice = 100;
let upgradeCount = 0;
let resourceUpgradePrice = 10;
let resourcePrice = 2000;
let lepsiOtrok = 0;
let lepsiOtrokCena = 5000;
let otrok;
let costOfExcavator = 1000;
let ExcavatorIncrease = 10;
  



upgradeResource.onclick = () => {
    if (upgradeCount >= resourceUpgradePrice && numberOfCookies >= resourcePrice) {
        if (document.getElementById("cookie").getAttribute("src") == "/res/img/dirt.png") {
            document.getElementById("cookie").src = "res/img/wood.png";
            resetProgress();
        }
          else if (document.getElementById("cookie").getAttribute("src") == "res/img/wood.png") {
            document.getElementById("cookie").src = "res/img/stone.png";
            resetProgress();
        } 
        else if (document.getElementById("cookie").getAttribute("src") == "res/img/stone.png") {
            document.getElementById("cookie").src = "res/img/copper.png";
            resetProgress();
        } 
        else if (document.getElementById("cookie").getAttribute("src") == "res/img/copper.png") {
            document.getElementById("cookie").src = "res/img/tin.png";
            resetProgress();
        } 
        else if (document.getElementById("cookie").getAttribute("src") == "res/img/tin.png") {
            document.getElementById("cookie").src = "res/img/tantalum.png";
            resetProgress();
        } 
        else if (document.getElementById("cookie").getAttribute("src") == "res/img/tantalum.png") {
            document.getElementById("cookie").src = "res/img/lithium.png";
            resetProgress();
        } 
        else if (document.getElementById("cookie").getAttribute("src") == "res/img/lithium.png") {
            document.getElementById("cookie").src = "res/img/cobalt.png";
            resetProgress();
        } 
        else  if (document.getElementById("cookie").getAttribute("src") == "res/img/cobalt.png") {
            document.getElementById("cookie").src = "res/img/gold.png";
            resetProgress();
        } 
        else  if (document.getElementById("cookie").getAttribute("src") == "res/img/gold.png") {
            document.getElementById("cookie").src = "res/img/diamond.png";
            resetProgress();
        } 
        else if (document.getElementById("cookie").getAttribute("src") == "res/img/diamond.png"){
            upgradeResource.innerHTML = "MAXED";
            progressBar.innerHTML = " ";
           
        } else {
            console.log(document.getElementById("cookie").getAttribute("src"));
        }
        

    } else {
        alert("not enough money/resources");
    }
}



let x = 100 / resourceUpgradePrice;
let y =x
function updateProgress() {
    const progressTxt = document.getElementById("progressTxt");
    console.log(x);
    progressBar == x;
    document.getElementById("progressBar").style.width = x + "%";
    progressTxt.innerHTML = x + "% / " + "100%";
}
function resetProgress() {
    numberOfCookies -= resourcePrice;
    clickUpgradeIncrease += 10;
    resourcePrice *= 8;
    resourceUpgradePrice += 10;
    upgradeCount = 0;
    progressBar == 0;
    document.getElementById("progressBar").style.width = 0 + "%";
    x = 100 / resourceUpgradePrice;
    y = x;
    console.log(`${resourceUpgradePrice} ${resourcePrice} ${x}`);
}
function pictureChange() {
    if (document.getElementById("shopIcon").getAttribute("src") == "res/img/shopicon.png") {
        document.getElementById("shopIcon").src = "res/img/close.png";
    } else {
        document.getElementById("shopIcon").src = "res/img/shopicon.png";
    }
}

document.getElementById("shopIcon").addEventListener('click', pictureChange);



cookie.onclick = () => {
    numberOfCookies += clickUpgradeIncrease;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
};


//apgrejd

const clickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade) {
        //odecteni ceny
        numberOfCookies -= costOfClickUpgrade;
        //aktualizace poctu
        counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        //zvedneme pocet susenek na klik
        clickUpgradeIncrease++;
        costOfClickUpgrade *= 1.2;
        clickUpgrade.innerHTML = `Buy better tools: ${Math.round(costOfClickUpgrade)}`
        updateProgress();
        x +=y
        upgradeCount++;

    }
};
const excavatorUpgradeFunction = () => {
    if (numberOfCookies >= costOfExcavator) {
        //odecteni ceny
        numberOfCookies -= costOfExcavator;
        //aktualizace poctu
        counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        //zvedneme pocet susenek na klik
        ExcavatorIncrease+=10;
        costOfExcavator *= 1.2;
        excavatorUpgrade.innerText = `Buy excavator: ${Math.round(costOfExcavator)}`;

    }
};


clickUpgrade.onclick = clickUpgradeFunction;
excavatorUpgrade.onclick = excavatorUpgradeFunction;

autoClicker.onclick = () => {
    if (numberOfCookies >= autoclickerPrice) {
        numberOfCookies -= autoclickerPrice;
        //aktualizace poctu
        counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        //zvyseni ucinnosti
        autoclickIncrease++;
        //cena
        autoclickerPrice *= 1.3;
        autoClicker.innerText = "Buy slave: " + Math.round(autoclickerPrice);
        //clear
        clearInterval(automatickeklikani);
        //interval
        automatickeklikani = setInterval(() => {
            numberOfCookies += autoclickIncrease;
            counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        }, 1000);

    }
}
Otrokarna.onclick = () => {
    if (numberOfCookies >= lepsiOtrokCena) {
        numberOfCookies -= lepsiOtrokCena;
        //aktualizace poctu
        counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        //zvyseni ucinnosti
        lepsiOtrok+= 10;
        //cena
        lepsiOtrokCena *= 1.3;
        Otrokarna.innerText = "Buy slave: " + Math.round(lepsiOtrokCena);
        //clear
        clearInterval(otrok);
        //interval
        otrok = setInterval(() => {
            numberOfCookies += lepsiOtrok;
            counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        }, 1000);

    }

    


}
function update() {
    setInterval(() => {
       let y = lepsiOtrok + autoclickIncrease;
        perSec.innerHTML = `MONEY: ${y}/sec`;
    }, 100);
}
update();





// //CHEATY!!!!!
// //function nazev()  {}
// function cheats() {
//     console.log("cheats on");
//     numberOfCookies += 1000000;
//     counter.innerHTML = "Cookies: " + numberOfCookies;
// }


// const cheats2 = () => {
//     console.log("cheats on");
//     numberOfCookies *= 2;
//     counter.innerHTML = "Cookies: " + numberOfCookies;
// }

