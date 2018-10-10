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
  searchList: null,
  optionValuePath: null,
  optionLabelPath: null,

  optionValue(option) {
    if (typeof option === 'string') {
      return option.toLowerCase();
    } else {
      return option.label.toLowerCase()
    }
  },

  searchResults: observer('value', function () {
    let results = this.get('content');
    let searchList = [];

    results.filter(option => {
      let optionStringValue = this.optionValue(option);
      if (optionStringValue.indexOf(this.get('value').toLowerCase()) !== -1) {
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
    }
  }

});
