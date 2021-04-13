"use strict;"
// Declare some global variables
var xhr = new XMLHttpRequest();
var dataSet = [];

// Add the onload event handler that will be called when the web page is loaded and read
window.onload = initaliazerCameras;

function initaliazerCameras() {
    console.log("Welcome")
	if (document.createElement("template").content) {
		console.log("Your browser supports templates!");
	} else {
		console.log("Your browser does not support templates!");
	}
    document.getElementById("camera-description").addEventListener("keyup", function () { searchCameraDescription(this.value); }, false);
    document.getElementById("quadrant").addEventListener("keyup", function () { searchQuadrant(this.value); }, false);
    document.getElementById("location").addEventListener("keyup", function () { searchLocation(this.value); }, false);
}

const searchCameraDescription = (description) => {
	setElementInnerHTML("searchvalue", "Search by Description");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');

	const url = "https://data.calgary.ca/resource/k7p9-kppz.json"
	load(url);

	if (description && description.length > 0) {
		// create a card for output
		var searchname;
		var matchNumber = 0;
		description = description.toLowerCase();
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchname = obj.camera_url.description;
			var foundAt = searchname.toLowerCase().indexOf(description);

			if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-cameras', newCardId);
				if (newCard) {
					var coordinates = obj.point.coordinates
					var link = `https://www.google.ca/maps/place/${coordinates[1]},${coordinates[0]}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.camera_url.description)
					setCardElementValue(newCard, 'card-accidentID', " " + obj.quadrant)
					setCardElementValue(newCard, 'card-location', + " " + obj.camera_location)
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

function searchQuadrant(quadrant) {


	setElementInnerHTML("searchvalue", "Search by Quadrant ");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');
	const url = "https://data.calgary.ca/resource/k7p9-kppz.json"
	load(url);

	if (quadrant && quadrant.length > 0) {

		// create a card for output
		var searchQuadrant;
		var matchNumber = 0;
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchQuadrant = obj.quadrant;
			if (searchQuadrant.toLowerCase() == quadrant.toLowerCase()) {

				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-cameras', newCardId);
				if (newCard) {
					var coordinates = obj.point.coordinates
					var link = `https://www.google.ca/maps/place/${coordinates[1]},${coordinates[0]}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.camera_url.description)
					setCardElementValue(newCard, 'card-accidentID', + " " + obj.quadrant)
					setCardElementValue(newCard, 'card-location', + " " + obj.camera_location)
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
			setElementInnerHTML('cards', `No matches found for '${quadrant}'`);
		}
	}
}

function searchLocation(location) {

	setElementInnerHTML("searchvalue", "Search by location ");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');
	const url = "https://data.calgary.ca/resource/k7p9-kppz.json"
	load(url);

	if (location && location.length > 0) {

		// create a card for output
		var searchlocation;
		var matchNumber = 0;
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchlocation = obj.camera_location;	
            var foundAt = searchlocation.toLowerCase().indexOf(location);

            if (foundAt > -1) {
				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-cameras', newCardId);
				if (newCard) {
					var coordinates = obj.point.coordinates
					var link = `https://www.google.ca/maps/place/${coordinates[1]},${coordinates[0]}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.camera_url.description)
					setCardElementValue(newCard, 'card-accidentID', + " " + obj.quadrant)
					setCardElementValue(newCard, 'card-location', + " " + obj.camera_location)
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
			setElementInnerHTML('cards', `No matches found for '${location}'`);
		}
	}
}