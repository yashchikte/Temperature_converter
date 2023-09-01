document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
        const toCelsius = document.getElementById("toCelsius").checked;
        const resultElement = document.getElementById("result");

        if (isNaN(inputTemperature)) {
            alert("Please enter a valid temperature number!");
            return;
        }

        let result;
        if (toCelsius) {
            result = (inputTemperature - 32) * 5 / 9;
            resultElement.innerHTML = `Result : ${inputTemperature}°F = ${result.toFixed(2)}°C`;
        } else {
            result = (inputTemperature * 9 / 5) + 32;
            resultElement.innerHTML = `Result : ${inputTemperature}°C = ${result.toFixed(2)}°F`;
        }
    });
});
