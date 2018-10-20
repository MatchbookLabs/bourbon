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

  value: null,
  label: null,
  inputValue: "",
  showDropdown: false,
  searchList: null,
  optionValuePath: null,
  optionLabelPath: null,

  inputValueObserver: observer('value', function() {
    this.set('inputValue', this.get('value'))
  }),

  optionValue(option) {
    if (typeof option === 'string') {
      return option.toLowerCase();
    } else if (option.__data) {
      return option.__data.label.toLowerCase();
    } else {
      return option.label.toLowerCase()
    }
  },

  searchResults: observer('inputValue', 'content', function () {
    if (this.get('inputValue') === "") {
      this.set('searchList', this.get('content'));
      return this.get('content');
    } else {
      let searchString = this.get('inputValue').toLowerCase();
      let searchList = this.get('content').filter(option => this.optionValue(option).match(searchString));

      if (searchList.length === 0) {
        if (this.get('optionLabelPath')) {
          this.set('searchList', A([{label: 'No results found.'}]));
        } else {
          this.set('searchList', A(['No results found.']));
        }
      } else {
        this.set('searchList', A(searchList))
      }
    }

  }),

  actions: {
    showContent() {
      this.set('showDropdown', true);
    },

    hideContent() {
      if (this.get('value') === null && this.get('currentValue') && this.get('label')) {
        this.set('inputValue', this.get('label'))
      }

      this.set('showDropdown', false);
    }
  }

});
