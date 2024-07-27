// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// inport the generatemarkdown.js in this file
// const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please provide a description of your project",
  },
  {
    name: "installation",
    type: "input",
    message: "Please provide installation instructions for your project",
  },
  {
    name: "usage",
    type: "input",
    message: "Please provide usage guidance for your project",
  },
  //   {
  //     name: "license",
  //     type: "list",
  //     message: "Choose a license for your project:",
  //     choices: [],
  //   },
  {
    name: "contributing",
    type: "input",
    message: "Please tell us how others can contribute to your project",
  },
  {
    name: "test",
    type: "input",
    message: "Please describe testing methods for your project",
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email address",
  },
];

// const questionString = JSON.stringify(questions);

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("test.md", generateMarkdown(data));
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data),
    (err) => {
      if (err) {
        console.error.apply(err);
        return;
      }
      console.log("file created and content written successfully!");
    };
}

init();
