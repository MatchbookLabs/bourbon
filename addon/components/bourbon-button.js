import Component from '@ember/component';
import layout from '../templates/components/bourbon-button';

export default Component.extend({
  layout,

  actions: {
    click() {
      if (typeof this.get('action') === 'function') {
        this.get('action')();
      } else {
        console.warn('warning: no button action passed');
      }
    }
  }
});
