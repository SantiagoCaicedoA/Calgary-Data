"use strict;"
// Declare some global variables
var xhr = new XMLHttpRequest();
var dataSet = [];

// Add the onload event handler that will be called when the web page is loaded and read
window.onload = initaliazerCrimes;

function initaliazerCrimes() {
    console.log("Welcome")
	if (document.createElement("template").content) {
		console.log("Your browser supports templates!");
	} else {
		console.log("Your browser does not support templates!");
	}
    document.getElementById("crime-category").addEventListener("keyup", function () { searchCrime(this.value); }, false);
    document.getElementById("sector").addEventListener("keyup", function () { searchSector(this.value); }, false);
    document.getElementById("month").addEventListener("keyup", function () { searchMonth(this.value); }, false);
}

function searchCrime(crime) {
    console.log("hola")
	setElementInnerHTML("searchvalue", "Search by Crime ");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');
	const url = "https://data.calgary.ca/resource/848s-4m4z.json"
	load(url);

	if (crime && crime.length > 0) {

		// create a card for output
		var searchcrime;
		var matchNumber = 0;
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchcrime = obj.category.toLowerCase();
			var foundAt = searchcrime.indexOf(crime);
			if (foundAt > -1) {

				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-crime', newCardId);
				if (newCard) {
                    var latitude = obj.geocoded_column.latitude
					var longitude = obj.geocoded_column.longitude
					var link = `https://www.google.ca/maps/place/${latitude},${longitude}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.category)
					setCardElementValue(newCard, 'card-accidentID', + " " + obj.sector)
					setCardElementValue(newCard, 'card-month', + " " + obj.month)
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
			setElementInnerHTML('cards', `No matches found for '${crime}'`);
		}
	}
}
function searchSector(sector) {
	setElementInnerHTML("searchvalue", "Search by sector ");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');
	const url = "https://data.calgary.ca/resource/848s-4m4z.json"
	load(url);

	if (sector && sector.length > 0) {

		// create a card for output
		var searchsector;
		var matchNumber = 0;
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchsector = obj.sector.toLowerCase();
			var foundAt = searchsector.indexOf(sector);
			if (foundAt > -1) {

				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-crime', newCardId);
				if (newCard) {
                    var latitude = obj.geocoded_column.latitude
					var longitude = obj.geocoded_column.longitude
					var link = `https://www.google.ca/maps/place/${latitude},${longitude}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.category)
					setCardElementValue(newCard, 'card-accidentID', + " " + obj.sector)
					setCardElementValue(newCard, 'card-month', + " " + obj.month)
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
			setElementInnerHTML('cards', `No matches found for '${sector}'`);
		}
	}
}
function searchMonth(month) {
	setElementInnerHTML("searchvalue", "Search by month ");
	toggleElementClass('output-area', 'hidden', false);
	clearCardCollection('cards');
	const url = "https://data.calgary.ca/resource/848s-4m4z.json"
	load(url);

	if (month && month.length > 0) {

		// create a card for output
		var searchmonth;
		var matchNumber = 0;
		for (var idx = 0; idx < dataSet.length; idx++) {
			var obj = dataSet[idx];
			searchmonth = obj.month.toLowerCase();
			var foundAt = searchmonth.indexOf(month);
			if (foundAt > -1) {

				var newCardId = `card-${matchNumber}`;
				var newCard = getNewCard('card-template-crime', newCardId);
				if (newCard) {
                    var latitude = obj.geocoded_column.latitude
					var longitude = obj.geocoded_column.longitude
					var link = `https://www.google.ca/maps/place/${latitude},${longitude}`
					// Copy the template
					setCardElementValue(newCard, 'card-id', (matchNumber + 1))
					setCardElementValue(newCard, 'card-description', " " + obj.category)
					setCardElementValue(newCard, 'card-accidentID', + " " + obj.sector)
					setCardElementValue(newCard, 'card-month', + " " + obj.month)
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
			setElementInnerHTML('cards', `No matches found for '${month}'`);
		}
	}
}