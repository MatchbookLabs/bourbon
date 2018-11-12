import Component from '@ember/component';
import layout from '../templates/components/bourbon-feature-overview';

export default Component.extend({
  classNames: ['bourbon-feature-overview__container'],
  layout,

  actions: {
    buttonAction() {
      this.get('buttonAction')();
    }
  }
});
