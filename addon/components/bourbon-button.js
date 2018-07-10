import Component from '@ember/component';
import layout from '../templates/components/bourbon-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['bourbon-button'],
  classNameBindings: ['iconTextButton:bourbon-button--icon-text', 'iconButton:bourbon-button--icon', 'iconOnlyButton:bourbon-button--icon-only'],
  attributeBindings: ['aria-label', 'data-role', 'data-hint',  'target'],
  iconTextButton: false,
  iconButton: false,
  iconOnlyButton: false,

  init() {
    this._super(...arguments);

    const icon = this.get('icon');
    const title = this.get('title');
    const classNames = this.get('class');
    
    this.set('iconTextButton', icon && title);
    this.set('iconOnlyButton', icon && !title && !classNames);
    this.set('iconButton', icon && !title && classNames);
  },

  click() {
    if (typeof this.get('action') === 'function') {
      this.get('action')();
    } else {
      console.warn('warning: no button action passed');
    }
  }
});
