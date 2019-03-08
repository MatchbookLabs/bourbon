import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bourbon-toggle';

export default Component.extend({
  layout,
  tagName: 'label',
  classNames: ['BourbonToggle'],
  classNameBindings: ['disabled:BourbonToggle--disabled'],
  attributeBindings: ['label:aria-label', 'toggleTitle:title'],

  ariaRole: 'button',
  value: null,
  disabled: false,
  action: null,
  label: 'toggle button',

  toggleTitle: computed('title', 'value', 'disabled', function() {
    if (this.get('title')) {
      return this.get('title');
    } else {
      return `${this.get('value') ? 'On' : 'Off'}${this.get('disabled') ? ' and Disabled' : ''}`;
    }
  }),

  toggleState: computed('value', function() {
    return `${this.get('value') ? 'on' : 'off'}${this.get('disabled') ? '--disabled' : ''}`;
  }),

  click() {
    if (this.get('disabled')) {
      return false;
    }

    this.set('value', !this.get('value'));

    if (this.get('action')) {
      this.sendAction('action');
    }
  }
});
