import Component from '@ember/component';
import layout from '../templates/components/new-bourbon-select-field-option';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['NewBourbonSelectField-option', 'BourbonSelectField-option'],
  classNameBindings: ['selected:btw-bg-concrete', 'active:btw-bg-concrete'],
  attributeBindings: ['disabled', 'active', 'selected:selected', 'tabindex', 'role', 'selected:aria-selected'],
  label: null,
  disabled: false,
  active: false,
  selected: false
});
