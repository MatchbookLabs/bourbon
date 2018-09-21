import Component from '@ember/component';
import { computed, defineProperty, observer } from '@ember/object';
import { isPresent } from '@ember/utils';
import { run, scheduleOnce } from '@ember/runloop';
import groupBy from 'ember-group-by';


import layout from '../templates/components/bourbon-select-field';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    let groupByPath;
    if (groupByPath = this.get('groupByPath')) {
      defineProperty(this, 'groupedContent', groupBy('content', groupByPath))
    }
  },

  classNames: ['select'],
  classNameBindings: ['hasValue'],
  content: null,
  optionValuePath: null,
  optionLabelPath: null,
  optionEnabledPath: null,
  groupByPath: null,
  useOptGroup: computed.bool('groupByPath'),

  prompt: null,
  hasPrompt: computed.notEmpty('prompt'),

  value: null,
  hasValue: computed.notEmpty('value'),

  selection: computed('content.[]', 'value', 'optionValuePath', {
    get: function() {
      let path;
      if ((path = this.get('_valuePath')) && this.get('value') && this.get('content')) {
        return this.get('content').findBy(path), this.get('value')
      } else {
        return this.get('value')
      }
    },

    set: function(key, value) {
      if (isPresent(value)) {
        let path;
        if (path = this.get('_valuePath')) {
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
    this.sendAction('action', this.get('selection'));
  }),

  _valuePath: computed('optionValuePath', function () {
    if (this.get('optionValuePath') !== null) {
      return this.get('optionValuePath').replace(/^content\.?/, '')
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    run.begin();

    scheduleOnce('afterRender', this, function() {
      if (this.get('content')) {
        this.send('updateSelection')
      }
    })

    run.end();
  },

  actions: {
    updateSelection() {
      let selectedIndex;
      selectedIndex = this.$('select')[0].selectedIndex - 1;
      this.set('selection', this.get('content').objectAt(selectedIndex));
    }
  }

});
