import Component from '@ember/component';
import { computed, defineProperty, observer } from '@ember/object';
import { isPresent } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import groupBy from 'ember-group-by';

import layout from '../templates/components/bourbon-select-field';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    let groupByPath = this.get('groupByPath');
    if (groupByPath) {
      defineProperty(this, 'groupedContent', groupBy('content', groupByPath))
    }

    if (this.get('prompt')) {
      this.set('selection', this.get('prompt'))
    }
  },

  classNames: ['select'],
  classNameBindings: ['hasValue', 'fullWidth:bourbon-block', 'showList:bourbon-select--active'],
  content: null,
  optionValuePath: null,
  optionLabelPath: null,
  optionEnabledPath: null,
  groupByPath: null,
  showList: false,
  useOptGroup: computed.bool('groupByPath'),

  prompt: null,
  defaultText: null,
  hasPrompt: computed.notEmpty('prompt'),

  value: null,
  hasValue: computed.notEmpty('value'),


  click(e) {
    this.toggleProperty('showList');
  },

  selection: computed('content.[]', 'value', 'optionValuePath', {

    get(key) {
      let path = this.get('_valuePath');
      if (path && this.get('value') && this.get('content')) {
        return this.get('content').findBy(path), this.get('value')
      } else {
        return this.get('value')
      }
    },

    set(key, value) {

      if (isPresent(value)) {
        if (typeof value.label === 'string') {
          let label = value.label;
          this.set('defaultText', label);
        } else if (value.__data) {
          let label = value.__data.label;
          this.set('defaultText', label);
        } else {
          this.set('defaultText', value);
        }

        let path = this.get('_valuePath');
        if (path) {
          this.set('value', (typeof value.get === "function" ? value.get(path) : void 0) || value[path]);
        } else {
          this.set('value', value);
        }
      } else {
        this.set('value', null)
      }

      return value;
    }

  }),

  action: null,

  _sendAction: observer('selection', function () {
    if (typeof this.get('action') === 'function') {
      this.send('action', this.get('selection'));
    }
  }),

  _valuePath: computed('optionValuePath', function () {
    if (this.get('optionValuePath') !== null) {
      return this.get('optionValuePath').replace(/^content\.?/, '')
    }
  }),

  _initSelection: observer('content', function () {
    scheduleOnce('afterRender', this, function () {
      if (this.get('content')) {
        this.send('updateSelection');
      }
    })
  }),

  didInsertElement() {
    this._initSelection();
    if (this.get('showDropdowns')) {
      this.set('showList', this.get('showDropdown'))
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if (this.get('showDropdown')) {
      this.set('showList', this.get('showDropdown'))
    }
  },

  actions: {
    updateSelection() {
      let selectedIndex = this.$('select')[0].selectedIndex;
      if (this.get('prompt')) {
        selectedIndex -= 1;
      }

      this.set('selection', this.get('content').objectAt(selectedIndex));
    }
  }

});
