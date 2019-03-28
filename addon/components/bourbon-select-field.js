import Component from '@ember/component';
import { computed, observer } from '@ember/object';
import { isPresent } from '@ember/utils';
import SelectMixin from 'bourbon/mixins/select';

import layout from '../templates/components/bourbon-select-field';

export default Component.extend(SelectMixin, {
  layout,
  classNames: ['BourbonSelectField'],
  classNameBindings: [
    'hasValue',
    'fullWidth:btw-block',
    'showList:BourbonSelectField--active'
  ],
  content: null,
  optionValuePath: null,
  optionLabelPath: null,
  optionEnabledPath: null,
  groupedContent: false,
  showList: false,
  prompt: null,
  hasPrompt: computed.notEmpty('prompt'),
  value: null,
  hasValue: computed.notEmpty('value'),
  activeOption: null,

  focusOut() {
    this.set('activeOption', null);
    this.set('showList', false);
  },

  mouseDown(e) {
    this.set('showList', !this.get('showList'));
  },

  keyDown(e) {
    this.moveUpDown(e);
    // e.keyCode 13 is for 'Enter'
    if (e.keyCode === 13) {
      e.preventDefault();
      this.send('updateSelection', this.get('activeOption'));
      this.set('showList', false);
      this.set('activeOption', null);
      document.activeElement.blur();
    }
  },

  selection: computed('value', 'content.[]',  {
    get(key) {
      this.getSelection();
    },

    set(key, value) {
      if (isPresent(value)) {
        if (this.get('groupedContent') && value.groupHeader) {
          value = value.items[0]
        }
        this.setValue(value);
      } else {
        this.set('value', null)
      }
      this.set('activeOption', null);
      return value;
    }
  }),

  action: null,

  _sendAction: observer('selection', function() {
    if (typeof this.get('action') === 'function') {
      this.get('action')(this.get('selection'));
    }
  }),

  _initSelection: observer('content', 'value', function() {
    this.send('updateSelection');
  }),

  didInsertElement() {
    this.send('updateSelection');
  },

  actions: {
    updateSelection(selectedIndex) {
      if (selectedIndex === undefined) {
        if (isPresent(this.findValueObject(this.get('value')))) {
          this.set('selection', this.findValueObject(this.get('value')));
          return;
        } else {
          selectedIndex = 0
          if (this.get('prompt')) {
            selectedIndex -= 1;
          }
        }
      }

      this.set('selection', this.get('content').objectAt(selectedIndex));
    }
  }
});
