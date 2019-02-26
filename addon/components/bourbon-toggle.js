import Component from '@ember/component';
import layout from '../templates/components/bourbon-toggle';

export default Component.extend({
  layout,
  tagName: 'label',
  classNames: ['BourbonToggle'],
  classNameBindings: ['disabled', 'readOnly:readonly'],
  attributeBindings: ['disabled:disabled'],

  init() {
    this._super(...arguments);
    this.send('setToggleState')
  },

  toggleState: null,
  disabled: false,

  readOnly: false,

  click() {
    if (this.get('toggleState') === 'on') {
      this.set('toggleState', 'off')
    } else {
      this.set('toggleState', 'on')
    }
  },

  actions: {
    setToggleState() {
      let currentToggleState = this.get('value');
      switch (currentToggleState) {
      case 'toggleOn':
        this.set('toggleState', 'on')
        this.set('disabled', false)
        break;
      case 'toggleOnDisabled':
        this.set('toggleState', 'on--disabled')
        this.set('disabled', true)
        break;
      case 'toggleOff':
        this.set('toggleState', 'off')
        this.set('disabled', false)
        break;
      case 'toggleOffDisabled':
        this.set('toggleState', 'off--disabled')
        this.set('disabled', true)
        break;
      }
    },

  }
});
