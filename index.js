'use strict';

module.exports = {
  name: 'ember-addon',

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
  },

  isDevelopingAddon: function () {
    return false;
  }

};
