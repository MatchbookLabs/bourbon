'use strict';

module.exports = {
  name: 'bourbon',

  included() {
    this._super.included.apply(this, arguments);
  },

  isDevelopingAddon: function () {
    return false;
  },

  options: {
    'ember-cli-tailwind': {
      buildTarget: 'addon'
    }
  }
};
