import Component from '@ember/component';
import layout from '../templates/components/bourbon-accordion-item';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ["BourbonAccordionItem"],
  isOpen: false,

  actions: {
    openItem() {
      console.log('toggle')
      this.toggleProperty('isOpen');
    }
  }
});
