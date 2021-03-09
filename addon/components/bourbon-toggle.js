import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bourbon-toggle';

export default Component.extend({
  layout,
  tagName: 'label',
  classNames: ['BourbonToggle', 'BourbonToggle--root'],
  classNameBindings: [
    'disabled:BourbonToggle--disabled',
    'value:BourbonToggle--on',
    'small:BourbonToggle--sizeSmall'
  ],
  attributeBindings: ['label:aria-label'],

  ariaRole: 'button',
  value: null,
  disabled: false,
  action: null,
  small: false,

  label: computed('value', 'disabled', function () {
    return `Toggle button ${
      this.get('value') ? 'on' : 'off'
    }${this.get('disabled') ? ' and disabled' : ''}`;
  }),

  toggleState: computed('value', function () {
    return `${this.get('value') ? 'on' : 'off'}`;
  }),

  click() {
    if (this.get('disabled')) {
      return false;
    }

    this.set('value', !this.get('value'));

    if (this.get('action')) {
      this.sendAction('action');
    }
  },
});
