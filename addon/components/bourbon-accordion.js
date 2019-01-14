import Component from '@ember/component';
import layout from '../templates/components/bourbon-accordion';

export default Component.extend({
  layout,
  tagName: "ul",
  classNames: ["BourbonAccordion"],
});
