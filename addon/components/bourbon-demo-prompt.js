import Component from '@ember/component';
import layout from '../templates/components/bourbon-demo-prompt';

export default Component.extend({
  tagName: 'div',
  classNames: ['BourbonDemoPrompt-container'],
  layout,

  actions: {
    buttonAction() {
      this.get('buttonAction')();
    },
  },
});
