var currentLoc = 0;
var userScore = 0;
var inventory = [];
var Items = [];

function init() {
    message = "Student Center: You're standing outside of the Student Center.  There is a SPC calendar here.  Take it?";
    updateDisplay(message);
}

function Go() {
    var PlayerText = document.getElementById("Command").value;
    PlayerText = PlayerText.toLowerCase();
    var Response = "";
    if (PlayerText === "n") {
        Response = North();
    } else if (PlayerText === "s") {
        Response = South();
    } else if (PlayerText === "e") {
    	Response = East();
    } else if (PlayerText === "w") {
        Response = West();
    } else if (PlayerText === "help") {
        HelpMessage();
    } else if	(PlayerText === "inventory") {
        for (var i = 0; i < inventory.length; ++i) {
            updateDisplay(inventory[i]);
        }
    } else if (PlayerText === "take") {
        takeitem();
    } else {
        alert("Invalid command.  Valid commands: N, S, E, W, Help, Inventory, Take");
    }	
}

function Locations(id, name, description, item) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.item = item;
	this.check = false;
		this.toString=function() {
			return this.description;
	}
}

	var Calendar = new item (0,"Calendar","There is a SPC calendar here.  Take it?");
	var Book = new item (1,"Book","There is a book here.  Take it?");
	var Coffee = new item (2,"Coffee","Want to get a drink from Starbucks?");
	var Paycheck = new item (7,"Paycheck","Want to go pick up your paycheck?");
	var Ticket = new item (8,"Ticket","They are handing out tickets for the game.  Take one?");

	var items = new Array();
	items[0]= Calendar;
	items[1]= Book;
	items[2]= Coffee;
	items[7]= Paycheck;
	items[8]= Ticket;
	
	var StudentCenter0 = new Locations (0, "Student Center", "Student Center: You're standing outside of the Student Center.", Calendar);
	var Library1 = new Locations (1, "Library", "Library: You're at the library.  Need to do any research?", Book);
	var Hancock2 = new Locations (2, "Hancock", "Hancock: You are now at the Hancock Center.  At the Hancock Center you can go to the math lab or programming lab for extra help.", Coffee);
	var River3 = new Locations (3, "River", "River: You're at the river! Sit on a dock, relax, and enjoy the view!", null);
	var Underpass4 = new Locations (4, "Underpass", "Underpass: You are walking through the underpass to the other side of campus.", null);
	var AlliedHealth5 = new Locations (5, "Allied Health", "Allied Health: You are now near the Allied Health building.  Do you take any science classes here?", null);
	var McCann6 = new Locations (6, "McCann", "McCann: You walked down the stairs and are now at the McCann Center.  Time for a workout?", null);
	var Donnelly7 = new Locations (7, "Donnelly", "Donnelly: You are now at Donnelly.  Here you can find many important offices such as the registrar, security, and the help desk.", Paycheck);
	var TenneyStadium8 = new Locations (8, "Tenney Stadium", "Tenney Stadium: You walked to Tenney Stadium.  Enjoy a game of football, soccer, and any other teams that play here.", Ticket);
	var Foy9 = new Locations (9, "Foy", "Foy: You are now in the Foy residence area.  This is sophomore housing.", null);
	var Dyson10 = new Locations (10, "Dyson", "Dyson: You're at the Dyson Center.  The Dyson Center holds many business and education classes.", null);
	var locations = [StudentCenter0,Library1,Hancock2,River3,Underpass4,AlliedHealth5,McCann6,Donnelly7,TenneyStadium8,Foy9,Dyson10];

function item (id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.check = 0;
	this.toString=function () {
		return this.description;
	}	
}

function takeitem() {
	var checkItem = locations[currentLoc];
	if (checkItem.item === null) {
		var message = "There is nothing to take here."
		updateDisplay(message)
	} else {
		inventory.push(items[currentLoc].name);
		updateDisplay("You have picked up " + items[currentLoc].name);
		locations[currentLoc].item = null;
	}
}	

function listInventory () {
	var message = "inventory:\n" + inventory;
	UpdateInventory(message);
}

function look() {
	var message = "";
	message = locations[currentLoc];
	var checkItem = locations[currentLoc].item;
	console.log(locations[currentLoc].item)
	if (checkItem !== null) {
		message = message + checkItem;
	}
	updateDisplay(message);
}

function North() {
	switch (currentLoc) {
		case 0:
			currentLoc = 1;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 1:
			currentLoc = 2;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 6:
			currentLoc = 0;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
		case 2:
			currentLoc = 9;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 8:
			currentLoc = 7;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 7:
			currentLoc = 4;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	default:
        	updateDisplay("You can't go that way.");
        	return;
    	}
    Score();
}

function South() {
	switch (currentLoc) {
    	case 0:
			currentLoc = 6;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 1:
			currentLoc = 0;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 2:
			currentLoc = 1;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 9:
			currentLoc = 2;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 4:
			currentLoc = 7;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 7:
			currentLoc = 8;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	default:
        	updateDisplay("You can't go that way.");
        	return;
    	}
    Score();
}

function East() {
	switch (currentLoc) {
    	case 3:
			currentLoc = 2;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 1:
			currentLoc = 4;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 4:
			currentLoc = 5;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 9:
			currentLoc = 10;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 0:
			currentLoc = 7;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 6:
			currentLoc = 8;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = true;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	default:
        	updateDisplay("You can't go that way.");
        	return;
    	}
    Score();
}

function West() {
	switch (currentLoc) {
    	case 5:
			currentLoc = 4;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = false;
			look();
			break;
    	case 4:
			currentLoc = 1;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 2:
			currentLoc = 3;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 10:
			currentLoc = 9;
			document.getElementById("bN").disabled = true;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 7:
			currentLoc = 0;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = false;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	case 8:
			currentLoc = 6;
			document.getElementById("bN").disabled = false;
			document.getElementById("bS").disabled = true;
			document.getElementById("bE").disabled = false;
			document.getElementById("bW").disabled = true;
			look();
			break;
    	default:
        	updateDisplay("You can't go that way.");
        	return;
    	}
    Score();
}

function Score() {
	var scoring = locations[currentLoc];
	if(scoring.check === false) {
		userScore += 5;
		document.getElementById("Score").innerHTML = userScore;
		scoring.check = true;
	}
}		
	
function updateDisplay(msg) {
    var target = document.getElementById("TextArea");
    target.value = msg + "\n\n" + target.value;
}

function HelpMessage() {
	alert("Click the directional buttons to change locations or enter the commands: N, S, E, W to change locations.  Locations and compass are displayed.  Enter the command Take to take an item and Inventory to list your inventory.");
	var message = "Click the directional buttons to change locations or enter the commands: N, S, E, W to change locations.  Locations and compass are displayed.  Enter the command Take to take an item and Inventory to list your inventory.";
	updateDisplay(message);
}