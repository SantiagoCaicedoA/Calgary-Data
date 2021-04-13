/*jsonfilehandler.js*/

"use strict;"

// Declare some global variables
var xhr = new XMLHttpRequest();
var dataSet = [];

// Add the onload event handler that will be called when the web page is loaded and read
window.onload = initializeWebpage;

function initializeWebpage() {
	if (document.createElement("template").content) {
		console.log("Your browser supports templates!");
	} else {
		console.log("Your browser does not support templates!");
	}
}

function RetrieveRadioButtonValue(groupName) {
	// debugger;
	var value = "";
	var radioButtonGrouping = document.getElementsByName(groupName);
	if (radioButtonGrouping && radioButtonGrouping.length > 0) {
		// We need to search for which radio button was selected
		// by looking at the checked value https://www.w3schools.com/jsref/prop_radio_checked.asp
		for (let idx = 0; idx < radioButtonGrouping.length; idx++) {
			if (radioButtonGrouping[idx]
				&& radioButtonGrouping[idx].value !== undefined
				&& radioButtonGrouping[idx].checked !== undefined) {
				if (radioButtonGrouping[idx].checked) {
					value = radioButtonGrouping[idx].value;
					break;  // No use looking at the next checkboxes because only one can be checked
				}
			}
		}
	}
	else {
		console.log("Could not find radio button group named '" + groupName + "'");
	}
	return value;
}
const load = (url) => {
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			dataSet = JSON.parse(xhr.responseText);

		}
	};
	xhr.open("GET", url, true);
	xhr.send();
}


function setElementInnerHTML(id, htmlFragment) {
	var element = document.getElementById(id);
	if (element && element.innerHTML !== undefined) {
		element.innerHTML = htmlFragment;
	}
	else {
		console.log(`Could not find element id='${id} on the web page`);
	}
	return element;
}

function toggleElementClass(id, className, force) {
	var element = document.getElementById(id);
	if (element && element.classList !== undefined) {
		element.classList.toggle(className, force);
	}
	else {
		console.log(`Could not find element id='${id} on the card`);
	}
	return element;
}

function clearCardCollection(id) {
	var element = document.getElementById(id);
	if (element) {
		element.innerHTML = "";
	}
}

function addCardToCollection(id, card) {
	var element = document.getElementById(id);
	if (element) {
		element.appendChild(card);
	}
}

function getNewCard(templateId, newCardId) {
	// see https://www.w3schools.com/tags/tag_template.asp
	var cardTemplate = document.getElementById(templateId);
	if (cardTemplate && cardTemplate.content !== undefined) {
		// Make a clone of the template
		var newCard = null;
		// Find the first child node that is and element (nodeType = 1) and clone it
		// see https://www.w3schools.com/jsref/prop_node_nodetype.asp
		for (let idx = 0; idx < cardTemplate.content.childNodes.length; idx++) {
			if (cardTemplate.content.childNodes[idx].nodeType === 1) {
				newCard = cardTemplate.content.childNodes[idx].cloneNode(true);
				if (newCard) {
					// Populate the id
					newCard.setAttribute('id', newCardId);
					break;
				}
			}
		}
	}
	else {
		console.log(`Could not find template card id='${templateId}'`);
	}
	return newCard;
}

function setCardElementValue(card, className, htmlFragment) {
	var element = card.getElementsByClassName(className);
	if (element && element.length > 0) {
		element[0].innerHTML = htmlFragment;
	}
	else {
		console.log(`Could not find element id='${id} on the card`);
	}
	return element;
}


