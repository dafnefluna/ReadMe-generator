import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please provide a description of your project:",
  },
  {
    name: "installation",
    type: "input",
    message: "Please provide installation instructions for your project:",
  },
  {
    name: "usage",
    type: "input",
    message: "Please provide usage guidance for your project:",
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license for your project:",
    choices: [
      {
        name: "Apache License 2.0",
        value: "Apache-2.0",
        link: "https://www.apache.org/licenses/LICENSE-2.0",
      },
      {
        name: "BSD Licenses",
        value: "BSD-3",
        link: "https://opensource.org/license/bsd-3-clause",
      },
      {
        name: "Creative Commons Licenses",
        value: "ccl",
        link: "https://creativecommons.org/share-your-work/cclicenses/",
      },
      {
        name: "GNU General Public License v3.0",
        value: "GPL-3.0",
        link: "https://www.gnu.org/licenses/gpl-3.0.html",
      },
      {
        name: "MIT License",
        value: "MIT",
        link: "https://opensource.org/licenses/MIT",
      },
      {
        name: "Mozilla Public License",
        value: "MPL",
        link: "https://www.mozilla.org/en-US/MPL/",
      },
      {
        name: "Other",
        value: "other",
        link: "https://choosealicense.com/",
      },
    ],
  },
  {
    name: "contributing",
    type: "input",
    message: "Please tell us how others can contribute to your project:",
  },
  {
    name: "test",
    type: "input",
    message: "Please describe testing methods for your project:",
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "githubLink",
    type: "input",
    message: "Please provide a link to your GitHub Repo:",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email address:",
  },
];

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("generatedREADME.md", generateMarkdown(data));
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file created and content written successfully!");
  });
}

init();
