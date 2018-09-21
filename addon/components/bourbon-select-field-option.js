import Component from '@ember/component';
import { computed , defineProperty } from '@ember/object';
import layout from '../templates/components/bourbon-select-field-option';

export default Component.extend({
  layout,
  tagName: 'option',
  attributeBindings: ['selected', 'value', 'disabled'],

  'tabindex': null,
  content: null,
  labelPath: null,
  valuePath: null,
  enabledPath: null,
  selection: null,

  init() {
    this._super(...arguments);
    console.log(this);

    let path = this.get('enabledPath')
    if (!path) {
      return
    }

    defineProperty(this, 'disabled');
    computed(path, function () {
      !this.get(path)
    })
  },

  label: computed('content', 'labelPath', function() {
    let path = this.get('labelPath');
    console.log(this.get('labelPath'))
    if (path) {
      this.get(path)
    } else {
      this.get('content')
    }
  }),

  value: computed('content', 'valuePath', function() {
    let path = this.get('valuePath');
    if (path) {
      this.get(path)
    } else {
      this.get('content')
    }
  }),

  selected: computed('content', 'selection', function() {
    this.get('content') === this.get('selection')
  })
});
