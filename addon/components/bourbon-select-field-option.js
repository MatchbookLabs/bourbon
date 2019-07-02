import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bourbon-select-field-option';

export default Component.extend({
  layout,
  classNames: ['BourbonSelectField-option'],
  classNameBindings: ['selected:btw-bg-concrete'],
  attributeBindings: ['selected', 'value', 'isDisabled:disabled', 'data-value', 'index'],
  tabindex: null,
  content: null,
  labelPath: null,
  valuePath: null,
  enabledPath: null,

  mouseDown(e) {
    this.get('updateSelection')();
  },

  isDisabled: computed('content', 'enabledPath', function() {
    let path = this.get('enabledPath');
    if (path) {
      return !this.get(path);
    } else {
      // returning false just sets it to the string "false"
      // returning undefined makes it just ignore it.
      return undefined;
    }
  }),

  label: computed('content', 'labelPath', function() {
    let path = this.get('labelPath');
    if (path) {
      return this.get(path);
    } else {
      return this.get('content');
    }
  }),

  value: computed('content', 'valuePath', function() {
    let path = this.get('valuePath');
    if (path) {
      return this.get(path);
    } else {
      return this.get('content');
    }
  }),

  selected: computed('content', 'selection', function() {
    return this.get('content') === this.get('selection');
  })
});
