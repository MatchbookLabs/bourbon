import Component from '@ember/component';
import layout from '../templates/components/bourbon-search-select-field';
import { isPresent } from "@ember/utils";
import SelectMixin from "bourbon/mixins/select";

import { A } from '@ember/array';

import { observer, computed } from '@ember/object';

export default Component.extend(SelectMixin, {
  layout,
  classNames: ["BourbonSearchSelectField"],
  classNameBindings: ["showDropdown:btw-z-20"],
  isOpen: false,
  activeOption: null,

  init() {
    this._super(...arguments);
    this.set("searchList", this.get("content"));

    if (this.get("label") !== null && this.get("value") !== null) {
      this.inputValueObserver();
    } else if (this.get("value")) {
      this.setLabel(this.get('value'));
      this.inputValueObserver();
    }
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
    this.set("inputValue", "");
    this.set("value", null);
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
    let allOptions = el.find(
      ".BourbonSelectField-menu .BourbonSelectField-option"
    );
    let numOptions = allOptions.length;

    if (e.keyCode === 40) {
      if (this.get("activeOption") !== numOptions - 1) {
        $(allOptions).removeClass("Bourbon--active");
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
          $(allOptions).removeClass("Bourbon--active");
        }

        this.set("activeOption", this.get("activeOption") - 1);
        this.selectOption(allOptions, list);
      }
    } else if (e.keyCode === 13) {
      e.preventDefault();
      this.resetOptions();
    }
  },

  resetPrompt: observer("label", function () {
    if (this.get("label")) {
      this.set("inputValue", this.get("label"));
    } else if (
      this.get("prompt") &&
      this.get("inputValue") !== ""
    ) {
      this.set("inputValue", this.get("prompt"));
    }
  }),

  selectOption(allOptions, list) {
    let selectedOption = allOptions[this.get("activeOption")];
    this.scrollList(selectedOption, list);
    $(selectedOption).addClass("Bourbon--active");
  },

  resetOptions() {
    this.send("updateSearchSelection");
    this.set("showDropdown", false);
    this.set("activeOption", null);
    document.activeElement.blur();
  },

  searchResults: observer("value", "inputValue", "content", function() {
    if (this.get("inputValue") === "") {
      this.set("searchList", this.get("content"));
    } else {
      let searchString;
      let selectedValue = this.get("value")
        ? this.get("value")
        : this.get("inputValue");

      if (typeof selectedValue === "string") {
        searchString = selectedValue.toLowerCase();
      } else if (
        selectedValue &&
        selectedValue.__data &&
        typeof selectedValue.get('label') === "string"
      ) {
        searchString = selectedValue.get("label").toLowerCase();
      } else {
        searchString = selectedValue.label.toLowerCase();
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
      this.getSelection();
    },

    set(key, value) {
      if (isPresent(value)) {
        this.setLabel(value);
        this.setValue(value);
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
      if (this.get("label")) {
        this.set("inputValue", this.get("label"));
      }

      this.set("showDropdown", false);
    },

    updateSearchSelection() {
      // for key up and down selection
      this.set(
        "selection",
        this.get("searchList").objectAt(this.get("activeOption"))
      );
    }
  }
});
