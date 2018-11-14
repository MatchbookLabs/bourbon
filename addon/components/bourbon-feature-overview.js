import Component from '@ember/component';
import layout from '../templates/components/bourbon-feature-overview';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['bourbon-feature-overview__container'],
  buttonOneClass: computed('buttonOneType', function () {
    if (this.get('buttonOneType')) {
      return `bourbon-${this.get('buttonOneType')}-button bourbon-rounded-button`;
    } else {
      return 'bourbon-primary-button bourbon-rounded-button'
    }
  }),

  buttonTwoClass: computed('buttonTwoType', function () {
    if (this.get('buttonTwoType')) {
      return `bourbon-${this.get('buttonTwoType')}-button bourbon-rounded-button`;
    } else {
      return 'bourbon-primary-button bourbon-rounded-button'
    }
  }),

  layout,

  actions: {
    buttonOneAction() {
      if (typeof this.get('buttonOneAction') === 'function') {
        this.get('buttonOneAction')();
      } else {
        /* eslint no-console: 0 */
        console.warn('warning: no button action passed');
      }
    },

    buttonTwoAction() {
      if (typeof this.get('buttonTwoAction') === 'function') {
        this.get('buttonTwoAction')();
      } else {
        /* eslint no-console: 0 */
        console.warn('warning: no button action passed');
      }
    }
  }
});
