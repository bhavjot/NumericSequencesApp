# Numeric Sequence Calculator using Angular seed template.

This project [![Build Status](https://travis-ci.org/bhavjot/NumericSequencesApp.svg?branch=master)](https://travis-ci.org/bhavjot/NumericSequencesApp) is simple exercise to quickly use angular seed template for displaying numeric Sequences (Odd, Even, Fibonacci)


### Prerequisites
You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet 
  normalize.css         --> minimal stylesheet for basic styles courtesy [http://getskeleton.com]
  skelton.css               --> skeleton stylesheet for basic styles
  calculator/                --> the calculator view template and logic
    calculator.html            --> the partial template
    calculator.js              --> the controller logic
    calculator_test.js         --> tests of the controller
    calculatorService.js       --> service used by controller
    calculatorService_test.js  --> tests of the calculatorService
  help/                --> the help view template and logic
    help.html            --> the partial template
    help.js              --> the controller logic
    help_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)  
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the application: Unit tests and End to End tests.

### Running Unit Tests

The app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

####Numeric Sequence Calculator

User Stories

####Story ID: S1 Instructions
####Story:

    As a USER I want to read some instructions on how to use the application so that it works first time for me.

####Acceptance Criteria: 

1. The instructions shall be short and to the point.

####Story ID: S2 Enter Data
####Story: 

As a USER I want to enter a number and initiate the calculation of the numeric sequences so that I can view the results.

####Acceptance Criteria:
 
1. Input shall accept positive, whole numbers only.
2. Where an input is invalid an error message shall be displayed.


####Story ID: S3 Results
####Story: 

As a USER I want to view the results of the numeric sequences
so that [TBD].

####Acceptance Criteria:

The following numeric sequences shall be displayed:

1. All numbers up to and including the number entered,
2. All odd numbers up to and including the number entered,
3. All even numbers up to and including the number entered,
4. All numbers up to and including the number entered, except when,
  * A number is a multiple of 3 output C, and when,
  * A number is a multiple of 5 output E, and when,
  * A number is a multiple of both 3 and 5 output Z,
5. All fibonacci number up to and including the number entered.

## Contact 

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[http-server]: https://github.com/nodeapps/http-server