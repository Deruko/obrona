window.onload = () => {
	let button = document.querySelector("#btn");

	
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	
	let height = parseInt(document
			.querySelector("#height").value);

	
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	
	if (height === "" || isNaN(height))
		result.innerHTML = "Wprowadź prawidłowy wzrost!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Wprowadź prawidłową wagę!";

	
	else {

		
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		
		if (bmi < 18.6) result.innerHTML =
			`Niedowaga : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Waga w normie : <span>${bmi}</span>`;

		else result.innerHTML =
			`Nadwaga : <span>${bmi}</span>`;
	}
}
