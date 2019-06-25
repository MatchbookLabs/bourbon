import Component from '@ember/component';
import { observer, computed } from '@ember/object';

import layout from '../templates/components/bourbon-text-field';

export default Component.extend({
  classNames: ['BourbonTextField'],
  classNameBindings: [
    'isFocused:BourbonTextField--active',
    'isNotEmpty:BourbonTextField--not-empty'
  ],

  layout,

  actionOnFocusIn: '',
  actionOnFocusOut: '',
  actionOnEnter: '',
  onFocusOutOrEnter: null,
  autofocus: false,
  readonly: null,
  value: null,
  textInput: null,
  isFocused: false,
  noLabel: false,

  fieldType: computed('type', function() {
    return this.get('type') ? this.get('type') : 'text';
  }),

  // attribute binding doesn't work for readonly = false
  // https://stackoverflow.com/questions/16109358/what-is-the-correct-readonly-attribute-syntax-for-input-text-elements
  boundReadOnly: computed('readonly', function() {
    return this.get('readonly') || null;
  }),

  focusedElementObserver: observer('autofocus', function() {
    this.set('isFocused', this.get('autofocus'));
  }),

  isNotEmpty: computed('textInput', function() {
    return this.get('textInput') && !this.get('noLabel');
  }),

  didInsertElement() {
    if (this.get('autofocus')) {
      this.$().focus();
      this.set('isFocused', true);
    }
  },

  focusIn() {
    this.set('isFocused', true);
    if (this.get('actionOnFocusIn')) {
      this.get('actionOnFocusIn')();
    }
  },

  input(e) {
    let el = $(e.currentTarget);
    let textInput = el.find('.BourbonTextField-input').val();

    // setting value directly here was causing the cursor to
    // jump to the end of the input field in safari.
    this.set('textInput', textInput);
  },

  focusOut() {
    this.set('isFocused', false);
    this.set('value', this.get('textInput'));
    document.activeElement.blur();

    if (this.get('onFocusOutOrEnter')) {
      this.get('onFocusOutOrEnter')(this.get('value'));
    }

    if (this.get('actionOnFocusOut')) {
      this.get('actionOnFocusOut')(this.get('value'));
    }
  },

  keyDown(e) {
    if (e.keyCode === 13) {
      this.set('value', this.get('textInput'));

      if (this.get('actionOnEnter')) {
        this.get('actionOnEnter')(this.get('value'));
      }

      if (this.get('onFocusOutOrEnter')) {
        this.get('onFocusOutOrEnter')(this.get('value'));
      }
    }
  }
});
