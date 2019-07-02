import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/new-bourbon-select-field-option';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['NewBourbonSelectField-option', 'BourbonSelectField-option'],
  classNameBindings: ['selected:btw-bg-concrete', 'active:btw-bg-concrete'],
  attributeBindings: ['isDisabled:disabled', 'active', 'selected:selected', 'tabindex', 'role', 'selected:aria-selected'],
  label: null,
  active: false,
  selected: false,
  isDisabled: computed('disabled', function () {
    // returning false just sets it to the string "false"
    // returning undefined makes it just ignore it.
    return this.get('disabled') || undefined;
  })
});
