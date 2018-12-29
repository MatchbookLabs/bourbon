import Component from '@ember/component';
import layout from '../templates/components/bourbon-accordion-item';
import { computed } from "@ember/object";

export default Component.extend({
  layout,
  tagName: "li",
  classNames: ["BourbonAccordionItem"],
  isOpen: computed("listItem.open", function() {
    if (this.get("listItem.open") === true) {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    openItem() {
      this.toggleProperty("isOpen");
    }
  }
});
