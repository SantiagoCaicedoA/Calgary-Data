"use strict;"

// Declare some global variables
var xhr = new XMLHttpRequest();
var dataSet = [];

// Add the onload event handler that will be called when the web page is loaded and read
window.onload = initaliazer;

function initaliazer() {
    console.log("Welcome")
	if (document.createElement("template").content) {
		console.log("Your browser supports templates!");
	} else {
		console.log("Your browser does not support templates!");
	}
    document.getElementById("description").addEventListener("keyup", function () { searchDescription(this.value); }, false);
    document.getElementById("direction").addEventListener("keyup", function () { searchDirection(this.value); }, false);
    document.getElementById("id").addEventListener("keyup", function () { searchid(this.value); }, false);
}

const searchDescription = (description) => {
    setElementInnerHTML("searchvalue", "Search by description");
    toggleElementClass('output-area', 'hidden', false);
    clearCardCollection('cards');

    const url = "https://data.calgary.ca/resource/35ra-9556.json"
    load(url);

    if (description && description.length > 0) {
        // create a card for output
        var searchname;
        var matchNumber = 0;
        description = description.toLowerCase();
        for (var idx = 0; idx < dataSet.length; idx++) {
            var obj = dataSet[idx];
            searchname = obj.description;
            var foundAt = searchname.toLowerCase().indexOf(description);

            if (foundAt > -1) {
                var newCardId = `card-${matchNumber}`;
                var newCard = getNewCard('card-template-accidents', newCardId);
                if (newCard) {
					var latitude = obj.latitude
					var longitude = obj.longitude
					var link = `https://www.google.ca/maps/place/${latitude},${longitude}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.description)
					setCardElementValue(newCard, 'card-direction', " " + obj.incident_info)
					setCardElementValue(newCard, 'card-accidentID', " " + obj.id)
					setCardElementValue(newCard, 'card-maps', " " + `<a href="${link}"target="_blank">Go to location</a>`)
                    // Add the new card to the collection
                    addCardToCollection('cards', newCard);
                }
                else {
                    console.log(`Could not create new card template`);
                }
                matchNumber++;
            }
        }
        if (matchNumber == 0) {
            setElementInnerHTML('cards', `No matches found for '${description}'`);
        }
    }
}
const searchDirection = (direction) => {
    setElementInnerHTML("searchvalue", "Search by direction");
    toggleElementClass('output-area', 'hidden', false);
    clearCardCollection('cards');

    const url = "https://data.calgary.ca/resource/35ra-9556.json"
    load(url);

    if (direction && direction.length > 0) {
        // create a card for output
        var searchname;
        var matchNumber = 0;
        direction = direction.toLowerCase();
        for (var idx = 0; idx < dataSet.length; idx++) {
            var obj = dataSet[idx];
            searchname = obj.incident_info;
            var foundAt = searchname.toLowerCase().indexOf(direction);

            if (foundAt > -1) {
                var newCardId = `card-${matchNumber}`;
                var newCard = getNewCard('card-template-accidents', newCardId);
                if (newCard) {
					var latitude = obj.latitude
					var longitude = obj.longitude
					var link = `https://www.google.ca/maps/place/${latitude},${longitude}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.description)
					setCardElementValue(newCard, 'card-direction', " " + obj.incident_info)
					setCardElementValue(newCard, 'card-accidentID', " " + obj.id)
					setCardElementValue(newCard, 'card-maps', " " + `<a href="${link}"target="_blank">Go to location</a>`)
                    // Add the new card to the collection
                    addCardToCollection('cards', newCard);
                }
                else {
                    console.log(`Could not create new card template`);
                }
                matchNumber++;
            }
        }
        if (matchNumber == 0) {
            setElementInnerHTML('cards', `No matches found for '${description}'`);
        }
    }
}
const searchid = (id) => {
	setElementInnerHTML("searchvalue", "Search by id");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');

	const url = "https://data.calgary.ca/resource/35ra-9556.json"
	load(url);

	if (id && id.length > 0) {
		// create a card for output
		var searchid;
		var matchNumber = 0;
		id = id.toLowerCase();
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchid = obj.id;
			var foundAt = searchid.indexOf(id);

			if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-accidents', newCardId);
				if (newCard) {
					var latitude = obj.latitude
					var longitude = obj.longitude
					var link = `https://www.google.ca/maps/place/${latitude},${longitude}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.description)
					setCardElementValue(newCard, 'card-direction', " " + obj.incident_info)
					setCardElementValue(newCard, 'card-accidentID', " " + obj.id)
					setCardElementValue(newCard, 'card-maps', " " + `<a href="${link}"target="_blank">Go to location</a>`)
					// Add the new card to the collection
					addCardToCollection('cards', newCard);
				}
				else {
					console.log(`Could not create new card template`);
				}
				matchNumber++;
			}
		}
		if (matchNumber == 0) {
			setElementInnerHTML('cards', `No matches found for '${id}'`);
		}
	}
}
