import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bourbon-select-field-option';

export default Component.extend({
  layout,
  classNames: ['BourbonSelectField-option'],
  classNameBindings: ['selected:btw-bg-concrete'],
  attributeBindings: ['disabledString:disabled', 'active', 'selected'],
  label: null,
  disabled: false,
  active: false,
  selected: false,

  disabledString: computed('disabled', function() {
    return this.get('disabled').toString();
  })
});
