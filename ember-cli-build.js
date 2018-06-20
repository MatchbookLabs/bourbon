'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

// get environment
const env = EmberAddon.env();

const pluginsToBlacklist = env === 'production' ? ['ember-freestyle'] : [];

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    freestyle: {
      snippetSearchPaths: ['tests/dummy/app']
    },
    addons: {
      blacklist: pluginsToBlacklist
    },
    sourcemaps: {
      enabled: true
    },
    'ember-cli-tailwind': {
      buildTarget: 'app'
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
