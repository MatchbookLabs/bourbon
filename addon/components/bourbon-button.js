import Component from '@ember/component';
import layout from '../templates/components/bourbon-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNameBindings: ['title:bourbon-button'],
  attributeBindings: ['ariaLabel:aria-label', 'dataRole:data-role', 'dataHint:data-hint',  'target'],

  click() {
    if (typeof this.get('action') === 'function') {
      this.get('action')();
    } else {
      console.warn('warning: no button action passed');
    }
  }
});
