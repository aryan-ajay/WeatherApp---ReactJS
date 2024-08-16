# Weather Search App

This React application allows users to search for weather information using the OpenWeatherMap API. Users can input a city name, and the app fetches current weather data such as temperature, humidity, and weather description.

## Features

- **Search Functionality**: Input a city name to fetch weather data.
- **Error Handling**: Displays an error message if the city entered is not found in the API.
- **UI Components**: Utilizes Material-UI components for a clean and responsive user interface.

## Installation

To run the project locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.

## Usage

1. Enter a city name in the search box.
2. Press the "Search" button to fetch weather information.
3. View the current temperature, humidity, and weather description for the specified city.
4. Errors will be displayed in case of invalid city names or API failures.

## Technologies Used

- React
- Material-UI
- OpenWeatherMap API

## API Key Note

Ensure you have your own OpenWeatherMap API key (`API_KEY`) to use this application. Replace `"bf60af70b933f53427ac3743927132f83502110506"` with your API key in `SearchBox.js`.
