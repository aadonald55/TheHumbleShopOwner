//window.onload = function() {
//  if(localStorage.getItem["save"] !== null) {
//      load();
//  }
//};

//	----Variables----

var publicity = 0.1, income = 0, money = 0;
var publicityUnlocked = false, upgradesUnlocked = false, optionsUnlocked = false, empireUnlocked = false;
var flyer = 0;
var flyerIncome = 0.1;
var marketStall = 1, market = 0, townShop = 0;

function startGame(){
	document.getElementById("startButton").className = "hidden";
	document.getElementById("marketStallButton").className = "btn btn-link";
	document.getElementById("moneyTab").className = "pull-right";
	document.getElementById("incomeTab").className = "pull-right";
	updateIncome();
}

//	----Updaters----

function updateIncome(){
	publicity = Math.round((0.1 + (flyer * flyerIncome)+(0 * 0)+(0 * 0))*10)/10;
	income = Math.round(publicity * (marketStall + (market * 10) + (townShop * 100) + (0 * 1000))*10)/10;
	document.getElementById("income").innerHTML = income;
}

function refreshMoney(){
	money += income;
	money = Math.round(money*100000)/100000;
	document.getElementById("money").innerHTML = money;
}

//	----Shops----

function buildMarketStall(number){
	marketStall += number;
	updateIncome();
}

function buildMarket(){
	market += number;
	updateIncome();
}

//	----Publicity----

function makeFlyer(number){
	flyer += number;
	updateIncome();
}

function upgradeFlyer(){
	flyerIncome *= 2;
	updateIncome();
}

//	----Unlocks----

function unlockPublicity(){
	if(money >= 5){
		publicityUnlocked = true;
		document.getElementById("publicityTab").className = "";
		document.getElementById("flyerRow").className = "";
	}
}

function unlockUpgrades(){
	if(income >= 1){
		upgradesUnlocked = true;
		document.getElementById("upgradesTab").className = "";
	}
}

function unlockOptions(){
	if(money >= 50){
		optionsUnlocked = true;
		document.getElementById("dropdownMenu").className = "dropdown";
	}
}

function unlockEmpire(){
	document.getElementById("empireTab").className = "";
	document.getElementById("unlockEmpire").className = "hidden";
}

//	----Loop----

window.setInterval(function(){
	refreshMoney();
	if(publicityUnlocked == false){
		unlockPublicity();
	}
	if(upgradesUnlocked == false){
		unlockUpgrades();
	}
	if(optionsUnlocked == false){
		unlockOptions();
	}
},100)
