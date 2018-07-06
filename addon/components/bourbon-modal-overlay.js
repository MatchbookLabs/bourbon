import Component from '@ember/component';
import layout from '../templates/components/bourbon-modal-overlay';

export default Component.extend({
  layout,
  actions: {
    click() {
      this.get('closeModal')();
    }
  }
});
