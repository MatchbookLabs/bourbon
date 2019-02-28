import Component from '@ember/component';
import { computed, observer } from '@ember/object';
import { isPresent } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import SelectMixin from 'bourbon/mixins/select';

import layout from '../templates/components/bourbon-select-field';

export default Component.extend(SelectMixin, {
  layout,

  init() {
    this._super(...arguments);
    if (this.get('hasPrompt') && this.get('value') === null) {
      this.set('selection', this.get('prompt'));
      this.set('label', this.get('prompt'));
    } else if (typeof this.get('value') === 'string') {
      let value = this.findValueObject(this.get('value'));
      this.set('selection', value);
    }
  },

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

  inputValueObserver: observer('value', function() {
    if (this.get('value') === null) {
      this.set('label', this.get('prompt'));
    }
  }),

  focusOut() {
    this.set('activeOption', null);
    this.set('showList', false);
  },

  mouseDown(e) {
    let el = $(e.target);
    if (el.find('BourbonSelectField-option')) {
      this.set('activeOption', el.attr('index'));
      this.send("updateSelection");

    } else {
      this.set('activeOption', null);
    }
    this.set('showList', !this.get('showList'));
  },

  findValueObject(valueString) {
    return this.get('content').find(v => v.label == valueString || v.value == valueString );
  },

  keyDown(e) {
    this.moveUpDown(e);
    // e.keyCode 13 is for 'Enter'
    if (e.keyCode === 13) {
      e.preventDefault();
      this.send('updateSelection');
      this.set('showList', false);
      this.set('activeOption', null);
      document.activeElement.blur();
    }
  },

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

  action: null,

  _sendAction: observer('selection', function() {
    if (typeof this.get('action') === 'function') {
      this.send('action', this.get('selection'));
    }
  }),

  _valuePath: computed('optionValuePath', function() {
    if (this.get('optionValuePath') !== null) {
      return this.get('optionValuePath').replace(/^content\.?/, '');
    }
  }),

  _initSelection: observer('searchTerm', function() {
    scheduleOnce('afterRender', this, function() {
      if (this.get('content')) {
        this.send('updateSelection');
      }
    });
  }),

  didInsertElement() {
    this._initSelection();
  },

  actions: {
    // only used for initial load - rest of changes are coming through the bourbon select field option
    updateSelection() {
      let selectedIndex = this.$('select')[0].selectedIndex;

      if (this.get('activeOption')) {
        this.set('selection', this.get('content').objectAt(this.get('activeOption')))
      } else {
        if (this.get('prompt')) {
          selectedIndex -= 1;
        }

        this.set('selection', this.get('content').objectAt(selectedIndex));

      }
    }
  }
});
