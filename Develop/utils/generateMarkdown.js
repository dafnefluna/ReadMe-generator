import { makeBadge, ValidationError } from "badge-maker";

// const format = {
//   label: license,
//   message: licenseLink,
//   color: "brightgreen",
// };

// const svg = makeBadge(format);
// console.log(svg); // <svg...

// try {
//   makeBadge({});
// } catch (e) {
//   console.log(e); // ValidationError: Field `message` is required
// }
// the error message is because I have not completed the other functions here. The svg should be pathed into the generate markdown for readme
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license);

  const format = {
    label: license,
    message: licenseLink,
    color: "brightgreen",
  };

  const svg = makeBadge(format);
  console.log(svg); // <svg...

  try {
    makeBadge({});
  } catch (e) {
    console.log(e); // ValidationError: Field `message` is required
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[https://www.apache.org/licenses/LICENSE-2.0]";
    case "BSD Licenses":
      return "[https://opensource.org/license/bsd-3-clause]";
    case "Creative Commons Licenses":
      return "[https://creativecommons.org/share-your-work/cclicenses/]";
    case "GNU General Public License v3.0":
      return "[https://www.gnu.org/licenses/gpl-3.0.html]";
    case "MIT License":
      return "[https://opensource.org/licenses/MIT]";
    case "Mozilla Public License":
      return "[https://www.mozilla.org/en-US/MPL/]";
    case "other":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
This project is licensed under the terms of the ${license}. Visit  for more information

If the project license is listed as other or has no license, please email the developers for more information.

## Badges
${renderLicenseBadge()}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##  Description
${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}


## How to Contribute
As contributors and maintainers of this project, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, or religion.

If you'd like to contribute further to the development of this project you can do so like this:
${data.contributing}


## Tests
${data.test}

## Contact Us
For more information about our project please visit our Github Repo ${
    data.githublink
  }. Check out our other projects by vising our github at ${
    data.github
  } or email us at ${data.email}
`;
}

export default generateMarkdown;
// the data here is the inqirere responses
