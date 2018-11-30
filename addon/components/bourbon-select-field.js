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
      defineProperty(this, 'groupedContent', groupBy('content', groupByPath));
    }

    if (this.get('hasPrompt')) {
      this.set('selection', this.get('prompt'));
      this.set('label', this.get('prompt'));
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
  hasPrompt: computed.notEmpty('prompt'),
  value: null,
  hasValue: computed.notEmpty('value'),

  focusOut() {
    this.set('showList', false);
  },

  focusIn() {
    this.set('showList', true)
  },

  resetPrompt: observer('label', function () {
    if (this.get('label')) {
      this.set('searchTerm', this.get('label'))
    } else if (this.get('prompt') && !this.get('hasValue') && this.get('searchTerm') !== '') {
      this.set('label', this.get('prompt'))
    }
  }),

  selection: computed('content.[]', 'optionValuePath', 'value', {
    get(key) {
      let path = this.get('_valuePath');
      if (path && this.get('value') && this.get('content')) {
        return this.get('content').findBy(path, this.get('value'))
      } else {
        return this.get('value')
      }
    },

    set(key, value) {
      if (isPresent(value)) {

        if (typeof value.label === 'string') {
          let label = value.label;
          this.set('label', label);
        } else if (value.formattedTitle) {
          this.set('label', value.get('formattedTitle'));
        } else if (value.__data) {
          let data = value.__data;

          if (data.label) {
            this.set('label', data.label);
          } else if (data.title) {
            this.set('label', data.title)
          }
        } else {
          this.set('label', value);
        }

        let path = this.get('_valuePath');
        if (path) {
          this.set('value', (typeof value.get === "function" ? value.get(path) : void 0) || value[path]);
        } else {
          this.set('value', value);
        }
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
      return this.get('optionValuePath').replace(/^content\.?/, '');
    }
  }),

  _initSelection: observer('searchTerm', function () {
    scheduleOnce('afterRender', this, function () {
      if (this.get('content')) {
        this.send('updateSelection');
      }
    })
  }),

  didInsertElement() {
    this._initSelection();
  },

  actions: {
    // only used for initial load - rest of changes are coming through the bourbon select field option
    updateSelection() {
      let selectedIndex = this.$('select')[0].selectedIndex;

      if (this.get('prompt')) {
        selectedIndex -= 1;
      }

      this.set('selection', this.get('content').objectAt(selectedIndex));
    }
  }

});
