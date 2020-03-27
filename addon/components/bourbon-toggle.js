import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bourbon-toggle';

export default Component.extend({
  layout,
  tagName: "label",
  classNames: ["BourbonToggle"],
  classNameBindings: ["disabled:BourbonToggle--disabled", "value:BourbonToggle--on"],
  attributeBindings: ["label:aria-label"],

  ariaRole: "button",
  value: null,
  disabled: false,
  action: null,

  label: computed("value", "disabled", function() {
    return `Toggle button ${
      this.get("value") ? "on" : "off"
    }${this.get("disabled") ? " and disabled" : ""}`;
  }),

  toggleState: computed("value", function() {
    return `${this.get("value") ? "on" : "off"}`;
  }),

  click() {
    if (this.get("disabled")) {
      return false;
    }

    this.set("value", !this.get("value"));

    if (this.get("action")) {
      this.sendAction("action");
    }
  }
});
