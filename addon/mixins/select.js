import Mixin from "@ember/object/mixin";

export default Mixin.create({
  setLabel(value) {
    let checkValue = value ? value : this.get('value')

    if (typeof checkValue.label === "string") {
      let label = checkValue.label;
      this.set("label", label);
    } else if (typeof checkValue === "string" || typeof value === "number") {
      this.set("label", checkValue);
    } else if (checkValue.formattedTitle) {
      this.set("label", value.get("formattedTitle"));
    } else if (checkValue.get("label")) {
      this.set("label", checkValue.get("label"));
    } else if (checkValue.get("title")) {
      this.set("label", checkValue.get("title"));
    } else if (checkValue.get("text")) {
      this.set("label", checkValue.get("text"));
    } else {
      this.set("label", checkValue);
    }
  },

  setValue(value) {
    let path = this.get("_valuePath");
    if (path) {
      this.set(
        "value",
        (typeof value.get === "function" ? value.get(path) : void 0) ||
        value[path]
      );
    } else {
      this.set("value", value);
    }
  },

  getSelection() {
    let path = this.get("_valuePath");
    if (path && this.get("value") && this.get("content")) {
      return this.get("content").findBy(path, this.get("value"));
    } else {
      return this.get("value");
    }
  }
});
