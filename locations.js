var Location = 0;
var userScore = 0;

var StudentCenter0 = false;
var Library1 = false;
var Hancock2 = false;
var River3 = false;
var Underpass4 = false;
var AlliedHealth5 = false;
var McCann6 = false;
var Donnelly7 = false;
var TenneyStadium8 = false;
var Foy9 = false;
var Dyson10 = false;

function init() {
    look();
}

function Go() {
    var PlayerText = document.getElementById("Command").value;
    var Response = "";
    if (PlayerText === "N") {
        Response = North();
    } else {
        if (PlayerText === "S") {
            Response = South();
        } else {
            if (PlayerText === "E") {
                Response = East();
            } else {
                if (PlayerText === "W") {
                    Response = West();
                } else {
                    if (PlayerText === "n") {
                        Response = North();   
                    } else {
                        if (PlayerText === "s") {
                            Response = South(); 
                        } else {
                       		if (PlayerText === "e") {
                            	Response = East();	
                            } else {
                        		if (PlayerText === "w") {
                            		Response = West();
                            	} else {	
                            		if (PlayerText === "Help") {
                            			HelpMessage();
                        			} else {
                            			alert("Invalid command.  Valid commands: N, S, E, W, n, s, e, w, Help");
                            		}
                            	}	
                            }	
                        }	
                    }	
                }
            }
        }
    }
}

function North() {
    if (Location === 0) {
        Location = 1;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 1) {
        Location = 2;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 6) {
        Location = 0;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
	} else if (Location === 2) {
        Location = 9;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 8) {
        Location = 7;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 7) {
        Location = 4;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = false;
        look();
    } else {
        updateDisplay("You can't go that way.");
    }
    Score();
}

function South() {
    if (Location === 0) {
        Location = 6;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 1) {
        Location = 0;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 2) {
        Location = 1;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 9) {
        Location = 2;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 4) {
        Location = 7;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 7) {
        Location = 8;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else {
        updateDisplay("You can't go that way.");
    }
    Score();
}

function East() {
    if (Location === 3) {
        Location = 2;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 1) {
        Location = 4;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 4) {
        Location = 5;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 9) {
        Location = 10;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 0) {
        Location = 7;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 6) {
        Location = 8;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = true;
        document.getElementById("bW").disabled = false;
        look();
    } else {
        updateDisplay("You can't go that way.");
    }
    Score();
}

function West() {
    if (Location === 5) {
        Location = 4;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = false;
        look();
    } else if (Location === 4) {
        Location = 1;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 2) {
        Location = 3;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 10) {
        Location = 9;
        document.getElementById("bN").disabled = true;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 7) {
        Location = 0;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = false;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else if (Location === 8) {
        Location = 6;
        document.getElementById("bN").disabled = false;
        document.getElementById("bS").disabled = true;
        document.getElementById("bE").disabled = false;
        document.getElementById("bW").disabled = true;
        look();
    } else {
        updateDisplay("You can't go that way.");
    }
    Score();
}
        
function StudentCenter() {
    var message = "Student Center: You're standing outside of the Student Center.";
    updateDisplay(message);
}
        
function Library() {
    var message = "Library: You're at the library.  Need to do any research?";
    updateDisplay(message);
}
        
function Hancock() {
    var message = "Hancock: You are now at the Hancock Center.  At the Hancock Center you can go to the math lab or programming lab for extra help.";
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
    var message = "Donnelly: You are now at Donnelly.  Here you can find many important offices such as the registrar, security, and the help desk.";
    updateDisplay(message)
}

function TenneyStadium() {
    var message = "Tenney Stadium: You walked to Tenney Stadium.  Enjoy a game of football, soccer, and any other teams that play here.";
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
    if (!StudentCenter0 && Location === 0) {
            userScore = userScore + 5;
            StudentCenter0 = true;
    } else if (!Library1 && Location === 1) {
        userScore = userScore + 5;
        Library1 = true;
    } else if (!Hancock2 && Location === 2) {
        userScore = userScore + 5;
        Hancock2 = true;
    } else if (!River3 && Location === 3) {
        userScore = userScore + 5;
        River3 = true;
    } else if (!Underpass4 && Location === 4) {
        userScore = userScore + 5;
        Underpass4 = true;
    } else if (!AlliedHealth5 && Location === 5) {
        userScore = userScore + 5;
        AlliedHealth5 = true;
    } else if (!McCann6 && Location === 6) {
        userScore = userScore + 5;
        McCann6 = true;
    } else if (!Donnelly7 && Location === 7) {
        userScore = userScore + 5;
        Donnelly7 = true;
    } else if (!TenneyStadium8 && Location === 8) {
        userScore = userScore + 5;
        TenneyStadium8 = true;
    } else if (!Foy9 && Location === 9) {
        userScore = userScore + 5;
        Foy9 = true;
    } else if (!Dyson10 && Location === 10) {
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
	alert("Click the directional buttons to change locations or enter the commands: N, S, E, W, n, s, e, w to change locations.  Locations and compass are displayed.");
	var message = "Click the directional buttons to change locations or enter the commands: N, S, E, W, n, s, e, w to change locations.  Locations and compass are displayed.";
	updateDisplay(message);
}