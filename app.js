/*
Task:
The goal is to build a simple CLI-based weather app that uses an external module to
fetch and display data (simulated, no actual API requests). The app will:
1. Parse command-line arguments for a city name.
2. Use a module to simulate fetching weather data.
3. Display a weather summary in the console.

2. Implement the App:
○ Create a file named app.js.
○ Use yargs to parse a --city argument provided by the user.
○ Simulate fetching weather data by returning a hardcoded response for
different cities.
○ Use chalk to style the output, emphasizing the city name and weather
details
**/

const yargs = require('yargs'); 
const chalk = require('chalk');
const { hideBin } = require('yargs/helpers')


const weather_Data = {
    "New York": { temperature: "78°F", condition: "Sunny" }, 
    "London": { temperature: "65°F", condition: "Cloudy" },
    "Saint Louis": { temperature: "80°F", condition: "Cloudy" }
};


const argv = yargs(hideBin(process.argv))
  .option('city', {
    name: "name",
    temperature:  "temperature",
    condition: "condition"
  })
  .parse()

// console.log(argv.name);
// console.log(argv.condition);
// console.log(argv.temperature);

console.log('City Name: ' + chalk.blue.bgRed.bold(argv.name) + ' ,Temperature: ' + chalk.red(argv.temperature) +' ,condition: ' + chalk.green(argv.condition));

// const argv = yargs(hideBin(process.argv))
//   .option('city', {
//     alias: "c",
//     description: "city name"
//   })
//   .parse()

// console.log(argv);
// const argv1 = yargs(hideBin(process.argv)).parse()

// console.log(argv1);


// console.log(JSON.stringify(argv));

