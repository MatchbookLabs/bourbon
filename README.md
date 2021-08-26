bourbon
==============================================================================

bourbon is the ember component library that feeds into [https://github.com/MatchbookLabs/flabongo](flabongo) which uses [https://github.com/storybooks/storybook](storybook)


Running Server
------------------------------------------------------------------------------
In bourbon run the following commands
* `ember serve`
* `yarn storybook`

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

In the root directory where `bower.json` exists, run the following command to get the CSS changes
* `bower link bourbon`

## Things to remember
* Using `npm unlink bourbon` will delete `bourbon` from your package.json file
* You need to restart the flabongo server to see changes made in bourbon code. This is because flabongo is not watching for changes in the `node_modules` folders when freshing the page.
* If you run into issue starting your flabongo server after linking the two repos, first try removing the `tmp` file from bourbon and restarting your flabongo server.  If that doesn't solve the issue, then the second step would be to try removing the node modules `rm -Rf node_modules frontend/*/node_modules`  and rerun bin set up `./bin/setup`.


Contributing
------------------------------------------------------------------------------

### Installation

**Pre-requisites**
* [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
* `yarn global add ember-cli`
* watchman - optional, see Ember CLI [Additional steps for Mac and Linux users](https://cli.emberjs.com/release/basic-use/#additionalstepsformacandlinuxusers)

**Then...**
* `git clone <repository-url>`
* `cd bourbon`
* `nvm use`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
