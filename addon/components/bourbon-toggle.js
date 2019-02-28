import Component from '@ember/component';
import layout from '../templates/components/bourbon-toggle';

export default Component.extend({
  layout,
  tagName: 'label',
  classNames: ['BourbonToggle'],
  attributeBindings: ['label:aria-label'],

  init() {
    this._super(...arguments);
    this.send('setToggleState')
  },
  ariaRole: 'button',

  value: null,
  toggleState: null,
  disabled: false,
  action: null,
  readOnly: false,
  label: 'toggle button',

  click() {
    if (this.get('readOnly') || this.get('disabled')) {
      return false;
    }

    this.set('value', !this.get('value'));
    if (this.get('action')) {
      this.sendAction('action');
    }

    this.send('setToggleState');
  },

  actions: {
    setToggleState() {
      let currentToggleState = this.get('value');

      switch(currentToggleState) {
      case true:
        if (this.get('disabled')) {
          this.set('toggleState', 'on--disabled')
        } else {
          this.set('toggleState', 'on')
        }
        break;
      case false:
        if (this.get('disabled')) {
          this.set('toggleState', 'off--disabled')
        } else {
          this.set('toggleState', 'off')
        }
        break;
      }
    }
  }
});
