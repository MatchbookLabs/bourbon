import Mixin from "@ember/object/mixin";

export default Mixin.create({
  setLabel(value) {
    let checkValue = this.getCheckValue(value);

    if (typeof checkValue.label === "string") {
      let label = checkValue.label;
      this.set("label", label);
    } else if (typeof checkValue === "string" || typeof value === "number") {
      this.set("label", checkValue);
    } else if (checkValue.text) {
      this.set('label', checkValue.text);
    } else if (checkValue.formattedTitle) {
      this.set('label', checkValue.get('formattedTitle'));
    } else if (checkValue.label || checkValue.get("label")) {
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

    let checkValue = this.getCheckValue(value);

    if (path && checkValue) {
      this.set(
        "value",
        (typeof checkValue.get === "function" ? checkValue.get(path) : void 0) ||
        checkValue[path]
      );
    } else {
      this.set("value", checkValue);
    }
  },

  getCheckValue(value) {
    if (value.groupHeader) {
      return this.get('value');
    } else {
      return value ? value : this.get('value');
    }
  },

  moveUpDown(e) {
    let el = $(e.currentTarget);

    let list = el.find('.BourbonSelectField-menu');
    let allOptions = el.find(
      '.BourbonSelectField-menu .BourbonSelectField-option'
    );
    let numOptions = allOptions.length;

    // e.keyCode 40 is for 'down arrow'
    if (e.keyCode === 40) {
      if (this.get('activeOption') !== numOptions - 1) {
        $(allOptions).removeClass('Bourbon--active');
      }

      if (
        this.get('activeOption') >= 0 &&
        this.get('activeOption') < numOptions - 1
      ) {
        if (this.get('activeOption') === null) {
          this.set('activeOption', 0);
        } else {
          this.set('activeOption', this.get('activeOption') + 1);
        }

        this.selectOption(allOptions, list);
      }
    // e.keyCode 38 is for 'up arrow'
    } else if (e.keyCode === 38) {
      if (this.get('activeOption') === null) {
        return;
      }

      if (
        this.get('activeOption') > 0 &&
        this.get('activeOption') < numOptions
      ) {
        if (this.get('activeOption') !== numOptions) {
          $(allOptions).removeClass('Bourbon--active');
        }

        this.set('activeOption', this.get('activeOption') - 1);
        this.selectOption(allOptions, list);
      }
    }
  },

  getSelection() {
    let path = this.get("_valuePath");
    if (path && this.get("value") && this.get("content")) {
      return this.get("content").findBy(path, this.get("value"));
    } else {
      return this.get("value");
    }
  },

  selectOption(allOptions, list) {
    let selectedOption = allOptions[this.get('activeOption')];
    this.scrollList(selectedOption, list);
    $(selectedOption).addClass('Bourbon--active');
  },

  scrollList(item, list) {
    let listHeight = list.height();
    let totalHeight = (this.get('activeOption') + 1) * item.scrollHeight;
    let scrollHeight = totalHeight - listHeight;
    list.scrollTop(scrollHeight);
  }
});
