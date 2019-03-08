import Component from '@ember/component';
import layout from '../templates/components/bourbon-toggle';

export default Component.extend({
  layout,
  tagName: 'label',
  classNames: ['BourbonToggle'],
  classNameBindings: ['disabled:BourbonToggle--disabled'],
  attributeBindings: ['label:aria-label', 'toggleTitle:title'],

  init() {
    this._super(...arguments);
    this.send('setToggleState')
    this.send('setTitle');
  },
  ariaRole: 'button',

  value: null,
  toggleState: null,
  disabled: false,
  action: null,
  readOnly: false,
  label: 'toggle button',
  toggleTitle: null,

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
          this.set('toggleState', 'on--disabled');
        } else {
          this.set('toggleState', 'on');
        }
        break;
      case false:
        if (this.get('disabled')) {
          this.set('toggleState', 'off--disabled');

        } else {
          this.set('toggleState', 'off');
        }
        break;
      }
    },

    setTitle() {
      if (this.get('title')) {
        this.set('toggleTitle', this.get('title'))
      } else {
        if (this.get('value') && this.get('disabled')) {
          this.set('toggleTitle', 'On and Disabled');
        } else if (this.get('value') && !this.get('disabled')) {
          this.set('toggleTitle', 'On');
        } else if (!this.get('value') && this.get('disabled')) {
          this.set('toggleTitle', 'Off and Disabled');
        } else {
          this.set('toggleTitle', 'Off');
        }
      }
    }
  }
});
