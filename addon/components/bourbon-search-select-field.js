import Component from '@ember/component';
import layout from '../templates/components/bourbon-search-select-field';
import { isPresent } from "@ember/utils";

import { A } from '@ember/array';

import { observer, computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ["BourbonSearchSelectField"],
  classNameBindings: ["showDropdown:bourbon-z-20"],
  isOpen: false,
  activeOption: null,

  init() {
    this._super(...arguments);
    this.set("searchList", this.get("content"));
  },

  value: null,
  label: null,
  inputValue: "",
  showDropdown: false,
  searchList: null,
  optionValuePath: null,
  optionLabelPath: null,
  optionEnabledPath: null,

  inputValueObserver: observer("value", function() {
    this.set("inputValue", this.get("label"));
  }),

  optionValue(option) {
    if (typeof option === "string") {
      return option.toLowerCase();
    } else if (option.__data) {
      return option.__data.label.toLowerCase();
    } else {
      return option.label.toLowerCase();
    }
  },

  focusIn() {
    this.set("activeOption", null);
  },

  focusOut() {
    this.set("activeOption", null);
  },

  scrollList(item, list) {
    let listHeight = list.height();
    let totalHeight = (this.get("activeOption") + 1) * item.scrollHeight;
    let scrollHeight = totalHeight - listHeight;
    list.scrollTop(scrollHeight);
  },

  keyDown(e) {
    let el = $(e.currentTarget);
    let list = el.find(".BourbonSelectField-menu ");
    let allOptions = el.find(".BourbonSelectField-menu .BourbonSelectField-option");
    let numOptions = allOptions.length;

    if (e.keyCode === 40) {
      if (this.get("activeOption") !== numOptions - 1) {
        $(allOptions).removeClass("active");
      }

      if (
        this.get("activeOption") >= 0 &&
        this.get("activeOption") < numOptions - 1
      ) {
        if (this.get("activeOption") === null) {
          this.set("activeOption", 0);
        } else {
          this.set("activeOption", this.get("activeOption") + 1);
        }

        this.selectOption(allOptions, list);
      }
    } else if (e.keyCode === 38) {
      if (this.get("activeOption") === null) {
        return;
      }

      if (
        this.get("activeOption") > 0 &&
        this.get("activeOption") < numOptions
      ) {
        if (this.get("activeOption") !== numOptions) {
          $(allOptions).removeClass("active");
        }

        this.set("activeOption", this.get("activeOption") - 1);
        this.selectOption(allOptions, list);
      }
    } else if (e.keyCode === 13) {
      e.preventDefault();
      this.resetOptions();
    }
  },

  selectOption(allOptions, list) {
    let selectedOption = allOptions[this.get("activeOption")];
    this.scrollList(selectedOption, list);
    $(selectedOption).addClass("active");
  },

  resetOptions() {
    this.send("updateSearchSelection");
    this.set("showDropdown", false);
    this.set("activeOption", null);
    document.activeElement.blur();
  },

  searchResults: observer("inputValue", "content", function() {
    if (this.get("inputValue") === "") {
      this.set("searchList", this.get("content"));
      return this.get("content");
    } else {
      let searchString;

      if (typeof this.get("inputValue") === "string") {
        searchString = this.get("inputValue").toLowerCase();
      } else {
        searchString = this.get("inputValue.label").toLowerCase();
      }

      let searchList = this.get("content").filter(option =>
        this.optionValue(option).match(searchString)
      );

      if (searchList.length === 0) {
        if (this.get("optionLabelPath")) {
          this.set("searchList", A([{ label: "No results found." }]));
        } else {
          this.set("searchList", A(["No results found."]));
        }
      } else {
        this.set("searchList", A(searchList));
      }
    }
  }),

  selection: computed("value", {
    get(key) {
      let path = this.get("_valuePath");
      if (path && this.get("value") && this.get("content")) {
        return this.get("content").findBy(path, this.get("value"));
      } else {
        return this.get("value");
      }
    },

    set(key, value) {
      if (isPresent(value)) {
        if (typeof value.label === "string") {
          let label = value.label;
          this.set("label", label);
        } else if (value.formattedTitle) {
          this.set("label", value.get("formattedTitle"));
        } else if (value.__data) {
          let data = value.__data;

          if (data.label) {
            this.set("label", data.label);
          } else if (data.title) {
            this.set("label", data.title);
          }
        } else {
          this.set("label", value);
        }

        let path = this.get("_valuePath");
        if (path) {
          this.set(
            "currentValue",
            (typeof value.get === "function" ? value.get(path) : void 0) ||
              value[path]
          );
        } else {
          this.set("currentValue", value);
        }
      }
      this.set("activeOption", null);
      return value;
    }
  }),

  actions: {
    showContent() {
      this.set("showDropdown", true);
    },

    hideContent() {
      if (
        this.get("value") === null &&
        this.get("currentValue") &&
        this.get("label")
      ) {
        this.set("inputValue", this.get("label"));
      }

      this.set("showDropdown", false);
    },

    // only used for initial load - rest of changes are coming through the bourbon select field option
    updateSearchSelection() {
      this.set(
        "selection",
        this.get("searchList").objectAt(this.get("activeOption"))
      );
    }
  }
});
