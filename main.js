function updateDisplay(numberOfCards) {
    document.getElementById("output").innerHTML = "";
    numberOfCards = parseInt(numberOfCards);
    for (var b = 0; b < numberOfCards; b++) {
        var cardTableId = "ringoCard" + b;
        var cardTable = document.createElement("table");
        cardTable.setAttribute("id", cardTableId);
        cardTable.setAttribute("border", "1");
        document.getElementById("output").appendChild(cardTable);
        generateBingoCard(cardTableId);
    }
}

function generateBingoCard(tableId) {
    var spaces = [
        "Red truck",
        "Hawk",
        "Washington license plate",
        "Black cows",
        "Mountains",
        "Lake",
        "River",
        "Snow",
        "Large sprinkler",
        "Haystack",
        "FedEx truck",
        "Roadkill",
        "Sagebrush",
        "Fruit orchard",
        "Yellow flower",
        "Litter",
        "American flag",
        "Windsock",
        "Cell tower",
        "Solar panel",
        "Windmill",
        "Black and white cow",
        "Horse",
        "Love's truck",
        "Police car",
        "Sheriff's car",
        "Highway patrol",
        "Ambulance",
        "Fire truck",
        "Cattle guard",
        "Porta-potty",
        "Gravel pile",
        "Orange cone",
        "U-Haul truck",
        "U-Haul trailer",
        "Rock larger than player",
        "Military vehicle",
        "Airplane",
        "Tire shreds",
        "Sheep",
        "Camper",
        "Bus",
        "Train",
        "Car transporter",
        "County line",
        "State line",
        "Bridge",
        "Motorcycle",
        "Rumble strip",
        "Road construction",
        "Barn",
        "Mailbox",
        "House",
        "Tractor",
        "Field crop",
        "School",
        "Athletic field",
        "McDonalds",
        "Church",
        "Gas station",
        "Silo"
    ];
    var result = document.getElementById(tableId);
    var resultArray = [];
    var firstRow = ["R", "I", "N", "G", "O"];
    var newRow = document.createElement("tr");
    for (var x = 0; x < 5; x++) {
        var newCell = document.createElement("th");
        var cellHtml = firstRow[x];
        newCell.innerHTML = cellHtml;
        newRow.appendChild(newCell);
    }
    result.appendChild(newRow);
    for (var i = 0; i < 5; i++) {
        var newRow = document.createElement("tr");
        for (var x = 0; x < 5; x++) {
            var newCell = document.createElement("td");
            var randomNumber = Math.floor(Math.random() * spaces.length);
            var cellHtml = spaces[randomNumber];
            newCell.innerHTML = cellHtml;
            newRow.appendChild(newCell);
            spaces.splice(randomNumber, 1);
        }
        result.appendChild(newRow);
    }
}
