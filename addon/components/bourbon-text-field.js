import TextField from '@ember/component/text-field';
import { observer, computed } from '@ember/object';

import layout from '../templates/components/bourbon-text-field';

export default TextField.extend({
  classNames: ['BourbonTextField'],
  classNameBindings: [
    'value::empty',
    'isFocused:BourbonTextField--active'
  ],
  attributeBindings: ['autocomplete', 'type', 'autofocus', 'boundReadOnly:readonly'],

  layout,

  actionOnFocusIn: '',
  actionOnFocusOut: '',
  actionOnEnter: '',
  onFocusOutOrEnter: '',
  autofocus: false,
  readonly: null,
  value: null,
  isFocused: false,

  // attribute binding doesn't work for readonly = false
  // https://stackoverflow.com/questions/16109358/what-is-the-correct-readonly-attribute-syntax-for-input-text-elements
  boundReadOnly: computed('readonly', function() {
    return this.get('readonly') || null;
  }),

  focusedElementObserver: observer('autofocus', function() {
    this.set('isFocused', this.get('autofocus'))
  }),

  didInsertElement()  {
    if (this.get('autofocus')) {
      this.$().focus()
      this.set('isFocused', true);
    }
  },

  focusIn() {
    this.set('isFocused', true)
    if (this.get('actionOnFocusIn')) {
      this.get('actionOnFocusIn')();
    }
  },

  focusOut() {
    this.set('isFocused', false)

    if (this.get('onFocusOutOrEnter')) {
      this.get('onFocusOutOrEnter')(this.get('value'))
    }

    if (this.get('actionOnFocusOut')) {
      this.get('actionOnFocusOut')(this.get('value'));
    }
  },

  keyDown(e) {
    if (e.keyCode === 13) {
      if (this.get('actionOnEnter')) {
        this.get('actionOnEnter')(this.get('value'));
      }

      if (this.get('onFocusOutOrEnter')) {
        this.get('onFocusOutOrEnter')(this.get('value'));
      }
    }
  }

});
