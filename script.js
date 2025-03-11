document.getElementById('search-bar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const city = event.target.value;
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    // Call a weather API here, such as OpenWeatherMap
    // Mock response for now:
    const weatherData = `Weather data for ${city}`;
    
    document.getElementById('city-weather').innerText = weatherData;
}







document.getElementById('tables-link').addEventListener('click', function() {
    // Logic to load tables page content, in this case, it can be done dynamically
    // For now, it will just log that the Tables page is active
    console.log('Tables Page Activated');
});

document.getElementById('chatbot-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const userMessage = event.target.value;
        processChatbotMessage(userMessage);
        event.target.value = ''; // Clear the input field
    }
});

function processChatbotMessage(message) {
    const chatbotResponse = `You said: ${message}`; // Simple echo response
    document.getElementById('chatbot-output').innerText = chatbotResponse;
}



function convertTemp() {
    const tempUnit = document.getElementById("temp-unit").value;
    const tempElement = document.getElementById("temperature");

    if (tempUnit === 'Celsius') {
        tempElement.innerText = tempCelsius.toFixed(2);
    } else {
        const tempFahrenheit = (tempCelsius * 9/5) + 32;
        tempElement.innerText = tempFahrenheit.toFixed(2);
    }
}