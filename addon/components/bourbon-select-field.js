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

    console.log('what is this here in bourbon?')

    console.log(this.get('selectFieldContext'))
    console.log(this)

    debugger;


    let groupByPath;
    if (groupByPath = this.get('groupByPath')) {
      defineProperty(this, 'groupedContent', groupBy('content', groupByPath))
    }
  },

  classNames: ['Select'],
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
    get() {
      console.log("BOURBON selection get")
      debugger;
      let path;
      if ((path = this.get('_valuePath')) && this.get('value') && this.get('content')) {
        this.get('content').findBy(path), this.get('value')
      } else {
        this.get('value')
      }
    },

    set(key, value) {
      console.log("BOURBON selection set")

      if (isPresent(value)) {
        let path;
        if (path = this.get('_valuePath')) {
          (typeof value.get === "function" ? value.get(path) : void 0) || value[path];
        } else {
          value
        }
      } else {
        this.set('value', null)
      }
      return value;
    }

  }),

  action: null,

  _sendAction: observer('selection', function () {
    console.log('_sendAction')
    console.log(this.get('selection'))
    debugger;
    return this.sendAction('action', this.get('selection'));
  }),

  _valuePath: computed('optionValuePath', function () {
    if (this.get('optionValuePath') !== null) {
      this.get('optionValuePath').replace(/^content\.?/, '')
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

  test() {
    alert('test tammy')
  },


  actions: {
    updateSelection() {
      debugger;
      console.log("bourbon updateSelection")
      let selectedIndex;
      selectedIndex = this.$('select')[0].selectedIndex

      console.log(selectedIndex)
      this.set('selection', this.get('content').objectAt(selectedIndex))

    }
  }

});
