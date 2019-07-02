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
    // returning false just sets it to the string "false"
    // returning undefined makes it just ignore it.
    return (path && !this.get(path)) ?  !this.get(path) : undefined;
  }),

  label: computed('content', 'labelPath', function() {
    let path = this.get('labelPath');
    return path ? this.get(path) : this.get('content');
  }),

  value: computed('content', 'valuePath', function() {
    let path = this.get('valuePath');
    return path ? this.get(path) : this.get('content');
  }),

  selected: computed('content', 'selection', function() {
    return this.get('content') === this.get('selection');
  })
});
