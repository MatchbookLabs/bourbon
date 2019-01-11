import Mixin from "@ember/object/mixin";

export default Mixin.create({
  setLabel(value) {
    if (typeof value.label === "string") {
      let label = value.label;
      this.set("label", label);
    } else if (typeof value === "string" || typeof value === "number") {
      this.set("label", value);
    } else if (value.formattedTitle) {
      this.set("label", value.get("formattedTitle"));
    } else if (value.get("label")) {
      this.set("label", value.get("label"));
    } else if (value.get("title")) {
      this.set("label", value.get("title"));
    } else if (value.get("text")) {
      this.set("label", value.get("text"));
    } else {
      this.set("label", value);
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
