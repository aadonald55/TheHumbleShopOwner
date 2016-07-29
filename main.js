//window.onload = function() {
//  if(localStorage.getItem["save"] !== null) {
//      load();
//  }
//};


var flyer = 0, income = 0; money = 0;

function startGame(){
	document.getElementById("startButton").className = "hidden";
	document.getElementById("flyerButton").className = "btn btn-info";
}

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

function activeUpgrades(){
	$('#upgrades').tab('show')
	//document.getElementsByClassName("navbarTab active").className = "navbarTab";
	//document.getElementById("upgradeTab").className = "navbarTab active";
}

function updateIncome(){
	income = Math.round(((flyer * 0.1)+(0 * 0)+(0 * 0))*100000)/100000;
}

function refreshMoney(){
	money += income;
	money = Math.round(money*100000)/100000;
	document.getElementById("money").innerHTML = money;
}

function makeFlyer(number){
	flyer += number;
	updateIncome();
}

window.setInterval(function(){
	refreshMoney();
},1000)
