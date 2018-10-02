import Component from '@ember/component';
import { computed , defineProperty } from '@ember/object';
import layout from '../templates/components/bourbon-select-field-option';

export default Component.extend({
  layout,
  tagName: 'option',
  classNames: ['bourbon-select-field__option'],
  attributeBindings: ['selected', 'value', 'disabled', 'data-value'],
  tabindex: null,
  content: null,
  labelPath: null,
  valuePath: null,
  enabledPath: null,
  selection: null,

  init() {
    this._super(...arguments);
    let path = this.get('enabledPath')
    if (!path) {
      return
    }

    defineProperty(this, 'disabled',
      computed(path, function () {
        !this.get(path)
      })
    );
  },

  click() {
    this.send('updateSelection');
  },

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
      return this.get('content')
    }
  }),

  selected: computed('content', 'selection', function() {
    return this.get('content') === this.get('selection');
  }),

  actions: {
    updateSelection() {
      this.set('selection', this.get('content'));
    }
  }

});
