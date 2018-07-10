import Component from '@ember/component';
import { computed } from '@ember/object';

import layout from '../templates/components/bourbon-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['bourbon-button'],
  classNameBindings: ['iconTextButton:bourbon-button--icon-text', 'iconOnlyButton:bourbon-button--icon-only'],
  attributeBindings: ['aria-label', 'data-role', 'data-hint',  'target'],
  iconTextButton: computed('icon', 'title', function() { return this.get('icon') && this.get('title')}),
  iconOnlyButton: computed('icon', 'title', 'class', function() { return this.get('icon') && !this.get('class')}),

  click() {
    if (typeof this.get('action') === 'function') {
      this.get('action')();
    } else {
      console.warn('warning: no button action passed');
    }
  }
});
