import TextField from '@ember/component/text-field';
import { observer } from '@ember/object';

import layout from '../templates/components/bourbon-text-field';

export default TextField.extend({
  classNames: ['BourbonTextField'],
  classNameBindings: [
    'value::empty',
    'isFocused:BourbonTextField--active'
  ],
  attributeBindings: ['autocomplete', 'type', 'autofocus'],

  layout,

  actionOnFocusIn: '',
  actionOnFocusOut: '',
  actionOnEnter: '',
  onFocusOutOrEnter: '',
  autofocus: false,
  value: null,
  isFocused: false,

  focusedElementObserver: observer('autofocus', function() {
    if (this.get("autofocus")) {
      this.set('isFocused', true)
    } else {
      this.set('isFocused', false)
    }
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
