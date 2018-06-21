bourbon
==============================================================================

bourbon is the ember component library that feeds into [https://github.com/MatchbookLabs/flabongo](flabongo)

Usage
------------------------------------------------------------------------------

Using bourbon in flabongo

- bourbon styles are included by updating the [bower.json](https://github.com/MatchbookLabs/flabongo/blob/master/bower.json) file in the root directory
- bourbon components are included in the package.json file for each [frontend](https://github.com/MatchbookLabs/flabongo/tree/master/frontend) folder.


Developing locally using bourbon and flabongo
------------------------------------------------------------------------------

In flabongo run the following commands
* `npm link`
* `bower link`

To pick up the changes to the component, you will need to run the following command in the frontend fold you are working in
* `npm link bourbon`

To pick up the styling changes to the component, you will need to run the following command in the root directory of flabongo fold you are working in
* `bower link bourbon`

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
