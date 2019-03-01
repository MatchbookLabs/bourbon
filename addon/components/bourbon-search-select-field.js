import Component from '@ember/component';
import layout from '../templates/components/bourbon-search-select-field';
import { isPresent } from '@ember/utils';
import SelectMixin from 'bourbon/mixins/select';

import { A } from '@ember/array';

import { observer, computed } from '@ember/object';

export default Component.extend(SelectMixin, {
  layout,
  classNames: ['BourbonSearchSelectField'],
  classNameBindings: [
    'showDropdown:btw-z-20',
    'showDropdown:BourbonSearchSelectField--active'
  ],
  isOpen: false,
  activeOption: null,

  init() {
    this._super(...arguments);
    this.set('searchList', this.get('content'));

    if (this.get('label') !== null && this.get('value') !== null) {
      this.inputValueObserver();
    } else if (this.get('value')) {
      this.setLabel(this.get('value'));
      this.inputValueObserver();
    }
  },

  value: null,
  prompt: null,
  label: null,
  inputValue: '',
  showDropdown: false,
  searchList: null,
  optionValuePath: null,
  optionLabelPath: null,
  optionEnabledPath: null,
  autofocus: null,

  inputValueObserver: observer('value', function() {
    if (this.get('value')) {
      this.set('inputValue', this.get('label'));
    } else {
      this.set('inputValue', this.get('prompt'));
    }
  }),

  mouseDown(e) {
    this.set('activeOption', null);
    this.set('showDropdown', !this.get('showDropdown'));
    this.set('autofocus', this.get('showDropdown'));


    if (this.get('showDropdown')) {
      this.set('inputValue', '');
    } else {
      this.inputValueObserver();
    }
  },

  focusOut() {
    this.resetPrompt();
    this.set('activeOption', null);
    this.inputValueObserver();
    this.set('showDropdown', false);
    this.set('autofocus', false);
  },

  resetPrompt: observer('label', function() {
    if (this.get('value') === null && this.get('prompt')) {
      this.set('inputValue', this.get('prompt'));
    } else if (this.get('label')) {
      this.set('inputValue', this.get('label'));
    } else if (this.get('prompt') && this.get('inputValue') !== '') {
      this.set('inputValue', this.get('prompt'));
    }
  }),

  noResults: computed('searchList.[]', function() {
    if (this.get('groupedContent')) {
      return this.get('searchList')[0]['items'][0]['label'] === 'No results found.'
    } else if (this.get('searchList')[0]) {
      return this.get('searchList')[0] === 'No results found.' || this.get('searchList')[0]['label'] === 'No results found.'
    }
  }),

  keyDown(e) {
    this.moveUpDown(e);
    // e.keyCode 13 is for 'Enter'
    if (e.keyCode === 13) {
      e.preventDefault();
      // if valid option availble select first option upon enter
      if (!this.get('noResults') &&  this.get('searchList').length > 0) {
        // only select the first option if we have not keyed down
        // to a dfferent selection
        if (this.get('activeOption') === null) {
          this.set('activeOption', 0);
        }
      }
      this.send('updateSearchSelection');
      this.set('showDropdown', false);
      this.set('autofocus', false);
      this.set('activeOption', null);
      document.activeElement.blur();
    } else if (e.keyCode === 8) {
      // e.keyCode 8 is for 'Delete'
      // since inputValue is being set manually we need to
      // manually change the inputValue when the user is
      // using the delete button to change their input
      e.preventDefault();
      this.set('inputValue', this.get('inputValue').slice(0,-1));
    }
  },

  optionValue(option) {
    if (typeof option === 'string') {
      return option.toLowerCase();
    } else if (typeof option.get === 'function') {
      return option.get('label').toLowerCase();
    } else {
      return option.label.toLowerCase();
    }
  },

  getSearchList(searchString) {
    if (this.get('groupedContent')) {
      let searchGroupList = [];

      for (var group of this.get('content')) {
        let newGroupItems = group.items.filter(option =>
          this.optionValue(option).match(searchString)
        );

        if (newGroupItems.length) {
          searchGroupList.push({
            groupHeader: group.groupHeader,
            items: newGroupItems
          });
        }
      }
      return searchGroupList;
    } else {
      return this.get('content').filter(option =>
        this.optionValue(option).match(searchString)
      );
    }
  },

  searchResults: observer('inputValue','content', function() {
    if (this.get('inputValue') === '') {
      this.set('searchList', this.get('content'));
    } else {
      let selectedValue = this.get('inputValue')
        ? this.get('inputValue')
        : this.get('value');

      let searchString = this.optionValue(selectedValue);

      let searchList = this.getSearchList(searchString);
      if (searchList.length === 0) {
        if (this.get('groupedContent')) {
          this.set('searchList', A([{groupHeader: null, items: [{label: 'No results found.' }]}]));
        } else if (this.get('optionLabelPath')) {
          this.set('searchList', A([{ label: 'No results found.' }]));
        } else {
          this.set('searchList', A(['No results found.']));
        }
      } else {
        this.set('searchList', A(searchList));
      }

      return searchList
    }
  }),

  selection: computed('value', {
    get(key) {
      this.getSelection();
    },

    set(key, value) {
      if (isPresent(value)) {
        if (this.get('groupedContent') && value.groupHeader) {
          value = value.items[0]
        }
        this.setLabel(value);
        this.setValue(value);
      }
      this.set('activeOption', null);
      return value;

    }
  }),

  actions: {
    updateSearchSelection() {
      // for key up and down selection
      if (this.get('groupedContent')) {
        let groupList = []
        for (var option of this.get('searchList')) {
          groupList.push(...option.items)
        }
        this.set('selection', groupList[this.get('activeOption')]);

      } else {
        this.set(
          'selection',
          this.get('searchList').objectAt(this.get('activeOption'))
        );
      }

    }
  }
});
