function getElementTextById(elementId) {
	const depositAmountText = document.getElementById(elementId);
	const depositAmountString = depositAmountText.innerText;
	const previewsAmount = parseFloat(depositAmountString);
	return previewsAmount;
}

function getElementInputById(elementId) {
	const inputField = document.getElementById(elementId);
	const inputFieldString = inputField.value;
	const inputValue = parseFloat(inputFieldString);
	inputField.value = '';
	return inputValue;
}


function calculationById(elementId, newValue) {
	const elementText = document.getElementById(elementId);
	elementText.innerText = newValue;
}

document.getElementById('deposit__submit').addEventListener('click', function () {

	const newInputValue = getElementInputById('deposit__input');
	const previewsAmountTotal = getElementTextById('depositAmount');
	const previewsBalance = getElementTextById('balance__total');


	const newValueTotal = previewsAmountTotal + newInputValue;
	const newBalanceTotal = previewsBalance + newInputValue;

	calculationById('depositAmount', newValueTotal);
	calculationById('balance__total', newBalanceTotal);

})