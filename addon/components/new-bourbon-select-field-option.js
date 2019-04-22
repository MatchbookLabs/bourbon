import Component from '@ember/component';
import layout from '../templates/components/new-bourbon-select-field-option';

export default Component.extend({
  layout,
  classNames: ['NewBourbonSelectField-option', 'BourbonSelectField-option'],
  classNameBindings: ['selected:btw-bg-concrete'],
  attributeBindings: ['disabled:disabled', 'active', 'selected'],
  label: null,
  disabled: false,
  active: false,
  selected: false
});
