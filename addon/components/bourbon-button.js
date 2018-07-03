import Component from '@ember/component';
import layout from '../templates/components/bourbon-button';

export default Component.extend({
  layout,
  actions: {
    click() {
      /* eslint ember/closure-actions: 0 */
      this.sendAction();
    }
  }
});
