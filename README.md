bourbon
==============================================================================

bourbon is the ember component library that feeds into [https://github.com/MatchbookLabs/flabongo](flabongo)


Running Server
------------------------------------------------------------------------------
In bourbon run the following commands
* `npm start`

- a new tab will open up to `http://localhost:9001/`

Usage
------------------------------------------------------------------------------

Using bourbon in flabongo

- bourbon styles are included by updating the [bower.json](https://github.com/MatchbookLabs/flabongo/blob/master/bower.json) file in the root directory
- bourbon components are included in the package.json file for each [frontend](https://github.com/MatchbookLabs/flabongo/tree/master/frontend) folder.


Developing locally using bourbon and flabongo
------------------------------------------------------------------------------

In bourbon run the following commands
* `npm link`
* `bower link`

To pick up the changes to the component, you will need to run the following command in the frontend fold you are working in
* `npm link bourbon`
*

## Things to remember
* Using `npm unlink bourbon` will delete `bourbon` from your package.json file
* You need to restart the flabongo server to see changes made in bourbon code.
*


When making changes in bourbon, you will need to restart the flabongo server in order to see the changes.  This is because flabongo is not watching for changes in the `node_modules` folders when freshing the page.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd bourbon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
