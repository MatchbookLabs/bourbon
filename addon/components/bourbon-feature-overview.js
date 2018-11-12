import Component from '@ember/component';
import layout from '../templates/components/bourbon-feature-overview';

export default Component.extend({
  classNames: ['bourbon-feature-overview__container'],
  layout,

  actions: {
    buttonAction() {
      if (typeof this.get('buttonAction') === 'function') {
        this.get('buttonAction')();
      } else {
        /* eslint no-console: 0 */
        console.warn('warning: no button action passed');
      }
    }
  }
});
