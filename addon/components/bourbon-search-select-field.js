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
  noShowInput: false,
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

  showSelecteFieldOption: observer('value', 'showDropdown', function () {
    if (this.get('currentValue') && (this.get('showDropdown') === false)) {
      this.set('noShowInput', true)
    } else {
      this.set('noShowInput', false)
    }
  }),

  searchResults: observer('inputValue', 'content', function () {

    if (this.get('inputValue') === "null" || this.get('inputValue') === "") {
      this.set('searchList', this.get('content'));
      return this.get('content');
    } else {
      let results = this.get('content');
      let searchList = [];
      results.filter(option => {
        let optionStringValue = this.optionValue(option);
        if (optionStringValue.indexOf(this.get('inputValue').toLowerCase()) !== -1) {
          searchList.push(option)
        }
      })

      let response;
      if (searchList.length === 0) {
        if (this.get('optionLabelPath')) {
          response = A([{label: 'No results found.'}]);
        } else {
          response = A(['No results found.']);
        }
      } else {
        response =  A(searchList);
      }

      this.set('searchList', response)
    }

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
