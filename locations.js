var currentLoc = 0;
var userScore = 0;
var inventory = [];
var Location = [];
var Items = [];

function init() {
    look();
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
    } else if	(PlayerText === "list") {
        for (var i = 0; i < inventory.length; ++i) {
            updateDisplay(inventory[i]);
        }
    } else if (PlayerText === "take") {
        takeitem();
    } else {
        alert("Invalid command.  Valid commands: N, S, E, W, Help, List, Take");
    }	
}

function Locations(id, name, description, item) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.item = item;
	this.check = 0;
	this.displayText = function () {
		return(this.description);
	}
}

	var StudentCenter0 = new Locations (0, "Student Center", "Student Center: You're standing outside of the Student Center.  There is a SPC calendar here.  Take it?", "Calendar")
	var Library1 = new Locations (1, "Library", "Library: You're at the library.  Need to do any research?  There is a book on the table.  Take it?", "Book")
	var Hancock2 = new Locations (2, "Hancock", "Hancock: You are now at the Hancock Center.  At the Hancock Center you can go to the math lab or programming lab for extra help.  You can take a drink from Starbucks.", "Coffee")
	var River3 = new Locations (3, "River", "River: You're at the river! Sit on a dock, relax, and enjoy the view!", null)
	var Underpass4 = new Locations (4, "Underpass", "Underpass: You are walking through the underpass to the other side of campus.", null)
	var AlliedHealth5 = new Locations (5, "Allied Health", "Allied Health: You are now near the Allied Health building.  Do you take any science classes here?", null)
	var McCann6 = new Locations (6, "McCann", "McCann: You walked down the stairs and are now at the McCann Center.  Time for a workout?", null)
	var Donnelly7 = new Locations (7, "Donnelly", "Donnelly: You are now at Donnelly.  Here you can find many important offices such as the registrar, security, and the help desk.  You can go take your paycheck.", "Paycheck")
	var TenneyStadium8 = new Locations (8, "Tenney Stadium", "Tenney Stadium: You walked to Tenney Stadium.  Enjoy a game of football, soccer, and any other teams that play here.  They are giving out free tickets right now.  Take one?", "Ticket")
	var Foy9 = new Locations (9, "Foy", "Foy: You are now in the Foy residence area.  This is sophomore housing.", null)
	var Dyson10 = new Locations (10, "Dyson", "Dyson: You're at the Dyson Center.  The Dyson Center holds many business and education classes.", null)
	location[0] = StudentCenter0
	location[1] = Library1
	location[2] = Hancock2
	location[3] = River3
	location[4] = Underpass4
	location[5] = AlliedHealth5
	location[6] = McCann6
	location[7] = Donnelly7
	location[8] = TenneyStadium8
	location[9] = Foy9
	location[10] = Dyson10
	Location.push (StudentCenter0,Library1,Hancock2,River3,Underpass4,AlliedHealth5,McCann6,Donnelly7,TenneyStadium8,Foy9,Dyson10);

function Items(id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.check = 0;
}
	var Calendar = new Items (0,"Calendar","You picked up the SPC Calendar.");
	var Book = new Items (1,"Book","You picked up a book.");
	var Coffee = new Items (2,"Coffee","You got a coffee from Starbucks,");
	var Paycheck = new Items (3,"Paycheck","You picked up your paycheck.");
	var Ticket = new Items (4,"Ticket","You got a ticket to the game.");

	items.push (Calendar,Book,Coffee,Paycheck,Ticket);
	
function takeitem() {
	if (Location[0]) {
		if (Calendar.check == 0) {
			inventory.push(Calendar.name);	
			UpdateInventory(Calendar.description);
			Calendar.check = 1;
		}	
	}
	else if (Location[1]) {
		if (Book.check == 0) {
			inventory.push(Book.name);	
			UpdateInventory(Book.description);
			Book.check = 1;
		}
	}	
	else if (Location[2]) {
		if (Coffee.check == 0) {
			inventory.push(Coffee.name);	
			UpdateInventory(Coffee.description);
			Coffee.check = 1;
		}
	}	
	else if (Location[7]) {
		if (Paycheck.check == 0) {
			inventory.push(Paycheck.name);	
			UpdateInventory(Paycheck.description);
			Paycheck.check = 1;
		}
	}
	else if (Location[8]) {
		if (Ticket.check == 0) {
			inventory.push(Ticket.name);	
			UpdateInventory(Ticket.description);
			Ticket.check = 1;
		}
	}
}	

function listInventory () {
	var message = "inventory:\n" + inventory;
	UpdateInventory(message);
}

function North() {
    if (currentLoc === 0) {
        currentLoc = 1;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 1) {
        currentLoc = 2;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 6) {
        currentLoc = 0;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
	} else if (currentLoc === 2) {
        currentLoc = 9;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 8) {
        currentLoc = 7;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 7) {
        currentLoc = 4;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = false;
        look();
    } else {
        updateDisplay("You can't go that way.");
        return;
    }
    Score();
}

function South() {
    if (currentLoc === 0) {
        currentLoc = 6;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 1) {
        currentLoc = 0;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 2) {
        currentLoc = 1;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 9) {
        currentLoc = 2;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 4) {
        currentLoc = 7;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 7) {
        currentLoc = 8;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else {
        updateDisplay("You can't go that way.");
        return;
    }
    Score();
}

function East() {
    if (currentLoc === 3) {
        currentLoc = 2;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 1) {
        currentLoc = 4;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 4) {
        currentLoc = 5;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 9) {
        currentLoc = 10;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 0) {
        currentLoc = 7;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 6) {
        currentLoc = 8;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else {
        updateDisplay("You can't go that way.");
        return;
    }
    Score();
}

function West() {
    if (currentLoc === 5) {
        currentLoc = 4;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = false;
        look();
    } else if (currentLoc === 4) {
        currentLoc = 1;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 2) {
        currentLoc = 3;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 10) {
        currentLoc = 9;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 7) {
        currentLoc = 0;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (currentLoc === 8) {
        currentLoc = 6;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else {
        updateDisplay("You can't go that way.");
        return;
    }
    Score();
}
        
function StudentCenter() {
    var message = "Student Center: You're standing outside of the Student Center.  There is a SPC calendar here.  Take it?";
    updateDisplay(message);
}
        
function Library() {
    var message = "Library: You're at the library.  Need to do any research?  There is a book on the table.  Take it?";
    updateDisplay(message);
}
        
function Hancock() {
    var message = "Hancock: You are now at the Hancock Center.  At the Hancock Center you can go to the math lab or programming lab for extra help.  You can take a drink from Starbucks.";
    updateDisplay(message);
}
        
function River() {
    var message = "River: You're at the river! Sit on a dock, relax, and enjoy the view!";
    updateDisplay(message);
}
        
function Underpass() {
    var message = "Underpass: You are walking through the underpass to the other side of campus.";
    updateDisplay(message)
}
        
function AlliedHealth() {
    var message = "Allied Health: You are now near the Allied Health building.  Do you take any science classes here?";
    updateDisplay(message)
}
        
function McCann() {
    var message = "McCann: You walked down the stairs and are now at the McCann Center.  Time for a workout?";
    updateDisplay(message)
}

function Donnelly() {
    var message = "Donnelly: You are now at Donnelly.  Here you can find many important offices such as the registrar, security, and the help desk.  You can go take your paycheck.";
    updateDisplay(message)
}

function TenneyStadium() {
    var message = "Tenney Stadium: You walked to Tenney Stadium.  Enjoy a game of football, soccer, and any other teams that play here.  They are giving out free tickets right now.  Take one?";
    updateDisplay(message)
}

function Foy() {
    var message = "Foy: You are now in the Foy residence area.  This is sophomore housing.";
    updateDisplay(message)
}

function Dyson() {
    var message = "Dyson: You're at the Dyson Center.  The Dyson Center holds many business and education classes.";
    updateDisplay(message)
}

function look() {
    var desc = "";
    switch (Location) {
        case 0:
            StudentCenter()
            break;
        case 1:
            Library()
            break;
        case 2:
            Hancock()
            break;
        case 3:
            River()
            break;
        case 4:
            Underpass()
            break;
        case 5:
            AlliedHealth()
            break;
        case 6:
            McCann()
            break;
        case 7:
            Donnelly()
            break;
        case 8:
            TenneyStadium()
            break;
        case 9:
            Foy()
            break;
        case 10:
            Dyson()
            break;
        default:
            desc = "You can't go that way.";
            break;
    }
    updateDisplay(desc);
}

function Score() {
    if (!StudentCenter0 && currentLoc === 0) {
            userScore = userScore + 5;
            StudentCenter0 = true;
    } else if (!Library1 && currentLoc === 1) {
        userScore = userScore + 5;
        Library1 = true;
    } else if (!Hancock2 && currentLoc === 2) {
        userScore = userScore + 5;
        Hancock2 = true;
    } else if (!River3 && currentLoc === 3) {
        userScore = userScore + 5;
        River3 = true;
    } else if (!Underpass4 && currentLoc === 4) {
        userScore = userScore + 5;
        Underpass4 = true;
    } else if (!AlliedHealth5 && currentLoc === 5) {
        userScore = userScore + 5;
        AlliedHealth5 = true;
    } else if (!McCann6 && currentLoc === 6) {
        userScore = userScore + 5;
        McCann6 = true;
    } else if (!Donnelly7 && currentLoc === 7) {
        userScore = userScore + 5;
        Donnelly7 = true;
    } else if (!TenneyStadium8 && currentLoc === 8) {
        userScore = userScore + 5;
        TenneyStadium8 = true;
    } else if (!Foy9 && currentLoc === 9) {
        userScore = userScore + 5;
        Foy9 = true;
    } else if (!Dyson10 && currentLoc === 10) {
        userScore = userScore + 5;
        Dyson10 = true;
    }
    document.getElementById("Score").innerHTML = userScore;
}		
	
function updateDisplay(msg) {
    var target = document.getElementById("TextArea");
    target.value = msg + "\n\n" + target.value;
}

function HelpMessage() {
	alert("Click the directional buttons to change locations or enter the commands: N, S, E, W to change locations.  Locations and compass are displayed.  Enter the command Take to take an item and List to list your inventory.");
	var message = "Click the directional buttons to change locations or enter the commands: N, S, E, W to change locations.  Locations and compass are displayed.  Enter the command Take to take an item and List to list your inventory.";
	updateDisplay(message);
}