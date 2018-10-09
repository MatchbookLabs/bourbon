import Component from '@ember/component';
import layout from '../templates/components/bourbon-search-select-field';
import { A } from '@ember/array';

import { computed, observer } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['bourbon-search-select-field'],
  isOpen: false,
  showSearchIcon: computed('showDropdown', function () {
    return !this.get('showDropdown');
  }),

  init() {
    this._super(...arguments);
    this.set('searchList', this.get('content'));
  },

  value: '',
  showDropdown: false,

  searchResults: observer('value', function () {
    let results = this.get('content');
    let searchList = [];

    results.filter(option => {
      if (option.indexOf(this.get('value')) !== -1) {
        searchList.push(option)
      }

    })

    this.set('searchList', A(searchList))

    return A(searchList);
  }),

  actions: {
    showContent() {
      this.set('showDropdown', true);
    },

    hideContent() {
      this.set('showDropdown', false);
      this.set('searchList', this.get('content'));
    }
  }

});
