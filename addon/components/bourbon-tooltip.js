import Component from '@ember/component';
import layout from '../templates/components/bourbon-tooltip';

export default Component.extend({
  layout,
  tagName: '',

  init() {
    this._super(...arguments);

    this.setProperties({
      tooltipClass: "BourbonTooltip--dark",
      tooltipPosition: this.get("position") || "top",
      tooltipSpacing: this.get("spacing") || 10,
      tooltipEvent: this.get("event") || "hover",
      tooltipBackgroundColor: this.get("background") || "dark",
      popperOptions: {
        modifiers: {
          preventOverflow: {
            escapeWithReference: false
          }
        }
      }
    });

    this.set("tooltipBackgroundClass", `BourbonTooltip--${this.get("tooltipBackgroundColor")} BourbonTooltip--${this.get("tooltipPosition")} BourbonTooltip ember-tooltip`);
  }
});
