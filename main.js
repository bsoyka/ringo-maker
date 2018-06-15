function updateDisplay(numberOfCards) {
    document.getElementById("output").innerHTML = "";
    numberOfCards = parseInt(numberOfCards);
    if (numberOfCards === 1) {
        document.getElementById("cardS").style.display = "none";
    } else {
        document.getElementById("cardS").style.display = "inline";
    }
    for (var b = 0; b < numberOfCards; b++) {
        var cardTableId = "ringoCard" + b;
        var cardTable = document.createElement("table");
        cardTable.setAttribute("id", cardTableId);
        cardTable.setAttribute("border", "1");
        document.getElementById("output").appendChild(cardTable);
        generateBingoCard(cardTableId);
    }
}

var originalSpaces = [];

function onBodyLoad() {
    axios({
        method: "get",
        url: "https://api.airtable.com/v0/appg8uLn0QeZuqdPI/Words?view=Active%20words",
        headers: {
            "Authorization": "Bearer keyAgG52BdBvlu1p6"
        }
    }).then(function (response) {
        var airtableRecords = response.data.records;
        for (var b = 0; b < airtableRecords.length; b++) {
            originalSpaces.push(airtableRecords[b].fields.Word);
        }
        updateDisplay(1);
        document.getElementById("loadingScreen").style.display = "none";
    }).catch(function (error) {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("errorScreenNumber").innerHTML = error.response.status;
        document.getElementById("errorScreenText").innerHTML = error.response.data.error.message;
        document.getElementById("errorGitHubLink").href = "https://github.com/bsoyka/ringo-maker/issues/new?title=" + encodeURIComponent(error.response.status + " error") + "&body=" + encodeURIComponent("# Server response\n" + error.response.data.error.message) + "&labels=bug&assignee=bsoyka";
        document.getElementById("errorScreen").style.display = "block";
        document.title = error.response.status + ' Error';
    });
}

function generateBingoCard(tableId) {
    var spaces = [];
    for (var h = 0; h < originalSpaces.length; h++) {
        spaces[h] = (originalSpaces[h]);
    }
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
            if (i === 2 && x === 2) {
                var cellHtml = "Road";
            } else {
                var randomNumber = Math.floor(Math.random() * spaces.length);
                var cellHtml = spaces[randomNumber];
                spaces.splice(randomNumber, 1);
            }
            newCell.innerHTML = cellHtml;
            newRow.appendChild(newCell);
        }
        result.appendChild(newRow);
    }
}
