import TextField from '@ember/component/text-field';
import { observer } from '@ember/object';

import layout from '../templates/components/bourbon-text-field';

export default TextField.extend({
  classNames: ['bourbon-text-field'],
  classNameBindings: ['value::empty'],
  layout,

  actionOnFocusIn: '',
  actionOnFocusOut: '',
  actionOnEnter: '',
  onFocusOutOrEnter: '',
  autofocus: false,
  value: null,

  focusIn(e) {
    this._super(...arguments);

    if (this.get('actionOnFocusIn')) {
      this.get('actionOnFocusIn')();
    }
  },

  focusOut(e) {
    this._super(...arguments);

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
