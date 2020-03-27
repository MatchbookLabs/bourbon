import Component from '@ember/component';
import { computed } from '@ember/object';

import layout from '../templates/components/bourbon-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['BourbonButton'],
  classNameBindings: [
    'iconTextButton:BourbonButton-iconText',
    'iconOnlyButton:BourbonButton-icon',
    'fullWidth:BourbonButton--fullWidth',
  ],
  attributeBindings: [
    'aria-label',
    'data-role',
    'data-hint',
    'target',
    'tabindex',
    'title',
  ],
  iconTextButton: computed('icon', 'title', function () {
    return this.get('icon') && this.get('title');
  }),
  iconOnlyButton: computed('icon', 'title', 'class', function () {
    return this.get('icon') && !this.get('class');
  }),
  textAndIconButton: computed('icon', 'title', 'class', function () {
    return this.get('icon') && this.get('class');
  }),

  click() {
    if (typeof this.get('action') === 'function') {
      this.get('action')();
    } else {
      /* eslint no-console: 0 */
      console.warn('warning: no button action passed');
    }
  },
});
