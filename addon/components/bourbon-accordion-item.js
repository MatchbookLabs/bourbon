import Component from '@ember/component';
import layout from '../templates/components/bourbon-accordion-item';
import { computed } from "@ember/object";

export default Component.extend({
  layout,
  tagName: "li",
  classNames: ["BourbonAccordionItem"],
  classNameBindings: ["isOpen:BourbonAccordionItem--open"],
  isOpen: computed("listItem.open", function() {
    if (this.get("listItem.open") === true) {
      return true;
    } else {
      return false;
    }
  }),

  isToggleable: computed("listItem.toggleable", function() {
    if (this.get("listItem.toggleable") === false) {
      return false;
    } else {
      return true;
    }
  }),

  actions: {
    openItem() {
      if (this.get("isToggleable")) {
        this.toggleProperty("isOpen");
      }
    }
  }
});
