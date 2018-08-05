# learning-project
Learning project to understand the basics of Nightwatch.js framework


## Requirements

- Node.js & Npm
- Java
- Nightwatch.js
- Selenium server & Chrome driver

## Installation

1. Download Node.js from official website: https://nodejs.org/uk/
2. Install it on your PC using instructions for specified platform
3. Open command line and verify the installation running ```node -v``` and ```npm -v``` commands
4. Download Java from official website: https://www.java.com/en/download/
5. Install it on your PC: http://barancev.github.io/how-to-install-java-on-windows/
6. Open command line and verify installation running ```java -version``` command
7. Clone this project to your local machine
8. Download latest Selenium Server JAR from: http://selenium-release.storage.googleapis.com/index.html
9. Put it into *selenium* folder
10. Download latest Chrome Driver from: https://sites.google.com/a/chromium.org/chromedriver/downloads
11. Un-zip it and put into *selenium* folder

## Running the tests

1. Open command line and navigate to a folder with project
2. Run ```npm install``` to install all needed node modules
3. Switch to `selenium` folder
4. Start Selenium Server by executing command ```java -jar selenium-server-standalone-{VERSION}.jar```
5. Check the message that Selenium Server is running on port 4444
6. Open new command line window without closing window with running selenium server
7. Navigate to a folder with project
8. Run a command ```npm test```
9. If everything is installed right a new chrome window with running tests should be opened

## Writing new tests

1. Documentation on [Nightwatch Developer Guide](http://nightwatchjs.org/guide) should be followed
2. Once new test has been added and tested locally, create a new branch called “feat-” and push your work to GitHub with a descriptive commit message
3. Then, create a pull request from your branch to the master branch, but do not merge it to master
