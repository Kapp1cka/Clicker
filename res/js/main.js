const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClicker = document.getElementById("autoClicker");
const upgradeResource = document.getElementById("upgradeResource");
const progressBar = document.getElementById("progressBar").getAttribute("aria-valuenow");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let automatickeklikani;
let autoclickerPrice = 100;
let upgradeCount = 0;
let resourceUpgradePrice = 10;
let resourcePrice = 2000;

upgradeResource.onclick = () => {
    if (upgradeCount >= resourceUpgradePrice && numberOfCookies >= resourcePrice) {
        if (document.getElementById("cookie").getAttribute("src") == "/res/img/dirt.avif") {
            document.getElementById("cookie").src = "res/img/wood.jpeg";
            resetProgress();
        }
          else if (document.getElementById("cookie").getAttribute("src") == "res/img/wood.jpeg") {
            document.getElementById("cookie").src = "res/img/stone.jpeg";
            resetProgress();
        } 
         if (document.getElementById("cookie").getAttribute("src") == "res/img/stone.jpeg") {
            document.getElementById("cookie").src = "res/img/copper.jpeg";
            resetProgress();
        } 
         if (document.getElementById("cookie").getAttribute("src") == "res/img/copper.jpeg") {
            document.getElementById("cookie").src = "res/img/tin.jpeg";
            resetProgress();
        } 
         if (document.getElementById("cookie").getAttribute("src") == "res/img/tin.jpeg") {
            document.getElementById("cookie").src = "res/img/tantalum.jpg";
            resetProgress();
        } 
         if (document.getElementById("cookie").getAttribute("src") == "res/img/tantalum.jpg") {
            document.getElementById("cookie").src = "res/img/lithium.jpeg";
            resetProgress();
        } 
         if (document.getElementById("cookie").getAttribute("src") == "res/img/lithium.jpeg") {
            document.getElementById("cookie").src = "res/img/cobalt.png";
            resetProgress();
        } 
          if (document.getElementById("cookie").getAttribute("src") == "res/img/cobalt.jpeg") {
            document.getElementById("cookie").src = "res/img/gold.jpeg";
            resetProgress();
        } 
          if (document.getElementById("cookie").getAttribute("src") == "res/img/gold.jpeg") {
            document.getElementById("cookie").src = "res/img/diamond.jpeg";
            resetProgress();
        }  if (document.getElementById("cookie").getAttribute("src") == "res/img/diamond.jpeg"){
            upgradeResource.innerHTML = "MAXED";
            progressBar.innerHTML = " ";
           
        } else {
            console.log(document.getElementById("cookie").getAttribute("src"));
        }
        

    } else {
        alert("not enough money/resources");
    }
}




function pictureChange() {
    if (document.getElementById("shopIcon").getAttribute("src") == "/res/img/shopicon.png") {
        document.getElementById("shopIcon").src = "res/img/close.png";
    } else {
        document.getElementById("shopIcon").src = "/res/img/shopicon.png";
    }
}

document.getElementById("shopIcon").addEventListener('click', pictureChange);



cookie.onclick = () => {
    numberOfCookies += clickUpgradeIncrease;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
};


//apgrejd
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
    resourceUpgradePrice *= 2;
    
    progressBar == 0;
    document.getElementById("progressBar").style.width = 0 + "%";
    x = 100 / resourceUpgradePrice;
    y = x;
    console.log(`${resourceUpgradePrice} ${resourcePrice} ${x}`);
}

const clickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade) {
        //odecteni ceny
        numberOfCookies -= costOfClickUpgrade;
        //aktualizace poctu
        counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
        //zvedneme pocet susenek na klik
        clickUpgradeIncrease++;
        costOfClickUpgrade *= 1.5;
        clickUpgrade.innerHTML = `Buy better tools: ${Math.round(costOfClickUpgrade)}`
        Math.round(costOfClickUpgrade);
        updateProgress();
        x +=y
        upgradeCount++;

    }
};

clickUpgrade.onclick = clickUpgradeFunction;

autoClicker.onclick = () => {
    if (numberOfCookies >= autoclickerPrice) {
        numberOfCookies -= autoclickerPrice;
        //aktualizace poctu
        counter.innerHTML = `MONEY: ${numberOfCookies}`;
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
            counter.innerHTML = `MONEY: ${Math.round(numberOfCookies)}`;
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





let i = 0;
while (i<20) {
    cheats();
    cheats2();
    i++;
}