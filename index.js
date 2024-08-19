const colorsEl = document.getElementById('colors');
const hexGen = colorgenerator();
const copyNotifEl = document.getElementById('copiedNotif');

/**Generates colors on page load */
generateColors();

/**When new colors button is clicked, new colors are generated */
document.getElementById('newColorsButton').addEventListener('click', () => {
	generateColors();
});

/**when the lock icon is clicked, the color will not change even when new colors are generated */
colorsEl.addEventListener('click', (event) => {
	if (event.target.getAttribute('data-id') == 'lock') {
		lockColor(event.target.id);
	}
})

/**When a color or its hex code is double clicked, the color is copied to the users dash and an alert is given */
colorsEl.addEventListener('dblclick', (event) => {
	if (event.target.dataset.color) {
		copyColor(event.target.dataset.color)
	}
})

/**A generator function generating random hex codes */
function* colorgenerator() {
	while (true) {
		let color = '#000000'.replace(/0/g,function(){
			return (~~(Math.random()*16)).toString(16)
		});
		yield color;
	}
}

/**Getting random hex codes and displaying them */
function generateColors() {
	const colorOne = hexGen.next().value;
	const colorTwo = hexGen.next().value;
	const colorThree = hexGen.next().value;
	const colorFour = hexGen.next().value;
	const colorFive = hexGen.next().value;
	const colorSix = hexGen.next().value;

	displayColors('1', colorOne);
	displayColors('2', colorTwo);
	displayColors('3', colorThree);
	displayColors('4', colorFour);
	displayColors('5', colorFive);
	displayColors('6', colorSix);
}

/**Displaying the colors if the color isn't locked and isn't already used */
function displayColors(number, color){
	const colorText = document.getElementById(`color${number}Text`);
	const colorDisplay = document.getElementById(`color${number}Display`);
	if (colorText.parentElement.dataset.lock === 'false'){

		let colorDisplayArr = document.getElementsByClassName('color-display');
		let allowedColor = true;
		for (let i = 0; i < colorDisplayArr.length; i++){
			let colorDisplayAttr = colorDisplayArr[i].dataset.color;
			if (colorDisplayAttr === color){
				return allowedColor = false;
			}
		}

		if (allowedColor) {
			colorText.parentElement.dataset.color = `${color}`;
			colorText.dataset.color = `${color}`;
			colorDisplay.dataset.color = `${color}`;
	
			colorText.textContent = color;
			colorDisplay.style.backgroundColor = color;
		} else {
			displayColors(number, hexGen.next().value);
		}

	}
}

/**Turning the lock icon unlocked/locked and changing the lock dataset */
function lockColor(colorId){
	const selectedColorEl = document.getElementById(colorId);

	selectedColorEl.classList.toggle('fa-unlock');
	selectedColorEl.classList.toggle('fa-lock');

	if (selectedColorEl.classList.contains('fa-lock')){
		selectedColorEl.parentElement.dataset.lock = 'true';
	} else if (selectedColorEl.classList.contains('fa-unlock')){
		selectedColorEl.parentElement.dataset.lock = 'false';
	}
}

/**copies color and gives alert */
function copyColor(colorHex){
	navigator.clipboard.writeText(colorHex);

	copyNotifEl.innerHTML = `Successfully copied the hex code ${colorHex} to clipboard!`;
	copyNotifEl.style.display = 'flex';

	setTimeout(() => {
		copyNotifEl.style.display = 'none';
	}, 5000)
}