import Component from '@ember/component';
import layout from '../templates/components/bourbon-feature-overview';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['BourbonFeatureOverview-container'],
  buttonOneClass: computed('buttonOneType', function () {
    if (this.get('buttonOneType')) {
      return `BourbonButton--${this.get(
        'buttonOneType'
      )} BourbonButton--rounded`;
    } else {
      return 'BourbonButton--primary BourbonButton--rounded';
    }
  }),

  buttonTwoClass: computed('buttonTwoType', function () {
    if (this.get('buttonTwoType')) {
      return `BourbonButton--${this.get(
        'buttonTwoType'
      )} BourbonButton--rounded`;
    } else {
      return 'BourbonButton--primary BourbonButton--rounded';
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
    },
  },
});
