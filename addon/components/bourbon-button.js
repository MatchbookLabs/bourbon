import Component from '@ember/component';
import { computed } from '@ember/object';
import ModalMixin from 'bourbon/mixins/modal';

import layout from '../templates/components/bourbon-button';

export default Component.extend(ModalMixin, {

  layout,
  tagName: 'button',
  classNames: ['bourbon-button'],
  classNameBindings: ['iconTextButton:bourbon-button--icon-text', 'iconOnlyButton:bourbon-button--icon-only', 'fullWidth:bourbon-w-full'],
  attributeBindings: ['aria-label', 'data-role', 'data-hint',  'target', 'tabindex'],
  iconTextButton: computed('icon', 'title', function() { return this.get('icon') && this.get('title')}),
  iconOnlyButton: computed('icon', 'title', 'class', function() { return this.get('icon') && !this.get('class')}),

  click() {
    if (typeof this.get('action') === 'function') {
      this.get('action')();
      this.addClosingAction();
    } else {
      console.warn('warning: no button action passed');
    }
  },

  addClosingAction() {
    if (this.get('modalPrimaryButtonCloseAction') || (this.get('modalSecondaryButtonCloseAction'))) {
      this.get('modalService').closeBourbonModal();
    }
  }
});
