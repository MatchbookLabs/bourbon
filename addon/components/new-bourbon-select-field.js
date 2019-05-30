import Component from '@ember/component';
import EmberObject from '@ember/object';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { A } from '@ember/array';
import layout from '../templates/components/new-bourbon-select-field';
import clickHandlerMixin from 'bourbon/mixins/clickHandler';

export default Component.extend(clickHandlerMixin, {
  layout,
  classNames: ['BourbonSelectField', 'NewBourbonSelectField'],
  classNameBindings: [
    'fullWidth:btw-block',
    'showList:BourbonSelectField--active',
    'disabled:BourbonSelectField--disabled'
  ],
  attributeBindings: ['disabled:disabled', 'tabindex:tabindex'],

  // passed in
  content: null,
  prompt: null,
  value: null,
  optionLabelPath: null,
  optionValuePath: null,
  optionEnabledPath: null,
  action: null,
  // internal
  showList: false,
  activeDescendant: null,
  tabindex: '0',

  didRender() {
    this.set(
      'activeDescendant',
      $('.NewBourbonSelectField-option[aria-selected]').attr('id')
    );
  },

  didInsertElement() {
    this._super(...arguments);
    if (this.get('defaultSelection') && this.get('value') === undefined) {
      this.set(
        'selectedIndex',
        this.get('content').indexOf(this.get('defaultSelection'))
      );
    }
  },

  clickHandler(e) {
    if (e.target !== document.activeElement) {
      this.set('showList', false);
    }
  },

  ariaExpanded: computed('showList', function() {
    return this.get('showList');
  }),

  _labelPath: computed('optionLabelPath', function() {
    if (isPresent(this.get('optionLabelPath'))) {
      return this.get('optionLabelPath').replace(/^content\.?/, '');
    }
  }),

  _valuePath: computed('optionValuePath', function() {
    if (isPresent(this.get('optionValuePath'))) {
      return this.get('optionValuePath').replace(/^content\.?/, '');
    }
  }),

  _enabledPath: computed('optionEnabledPath', function() {
    if (isPresent(this.get('optionEnabledPath'))) {
      return this.get('optionEnabledPath').replace(/^content\.?/, '');
    }
  }),

  internalContent: computed(
    'content',
    '_labelPath',
    '_valuePath',
    '_enabledPath',
    function() {
      return A(
        this.get('content').map(item => {
          if (typeof item === 'string' || typeof item === 'number') {
            return EmberObject.create({
              label: item.toString(),
              value: item,
              enabled: true
            });
          } else {
            let emberItem =
              typeof item.get == 'function' ? item : EmberObject.create(item);

            let endItem = {};
            endItem.label = this.get('_labelPath')
              ? emberItem.get(this.get('_labelPath'))
              : emberItem.get('label');
            endItem.value = this.get('_valuePath')
              ? emberItem.get(this.get('_valuePath'))
              : emberItem;
            endItem.enabled = this.get('_enabledPath')
              ? emberItem.get(this.get('_enabledPath'))
              : true;

            return EmberObject.create(endItem);
          }
        })
      );
    }
  ),

  selectedIndex: computed('internalContent', 'value', {
    get(key) {
      let valueHolder = this.get('internalContent').findBy(
        'value',
        this.get('value')
      );

      let index = this.get('internalContent').indexOf(valueHolder);

      if (index !== -1) {
        return index;
      } else if (!this.get('prompt')) {
        // default to first option when there is no prompt passed
        if (!this.get('defaultSelection')) {
          this.set(
            'value',
            this.get('internalContent')
              .objectAt(0)
              .get('value')
          );
        }
        return 0;
      } else {
        // if index = -1 and this.get('prompt') then show prompt
        return null;
      }
    },

    set(key, value) {
      this.set(
        'value',
        this.get('internalContent')
          .objectAt(value)
          .get('value')
      );
      return value;
    }
  }),

  activeIndex: computed('selectedIndex', {
    get(key) {
      return this.get('selectedIndex');
    },

    set(key, value) {
      return value;
    }
  }),

  selection: computed('selectedIndex', function() {
    let index = this.get('selectedIndex');
    if (index !== -1) {
      return this.get('internalContent').objectAt(index);
    } else {
      return null;
    }
  }),

  label: computed('selection', 'prompt', function() {
    if (isPresent(this.get('selection'))) {
      return this.get('selection.label');
    } else {
      return this.get('prompt');
    }
  }),

  keyDown(e) {
    if (e.keyCode === 38) {
      // up arrow
      this.moveActiveUp(this.get('activeIndex'));
    } else if (e.keyCode === 40) {
      // down arrow
      this.moveActiveDown(this.get('activeIndex'));
    } else if (e.keyCode === 13) {
      //  enter
      if (this.get('showList')) {
        this.set('selectedIndex', this.get('activeIndex'));
        // triggers the focusOut to hide the list
        document.activeElement.blur();
      } else {
        // When user is focused in and presses
        // enter we want to show the list
        this.set('showList', true);
      }
    }
  },

  moveActiveUp(prevIndex) {
    let nextIndex = prevIndex - 1;
    if (nextIndex < 0) {
      return;
    } else {
      if (
        !this.get('internalContent')
          .objectAt(nextIndex)
          .get('enabled')
      ) {
        this.moveActiveUp(nextIndex);
      } else {
        this.set('activeIndex', nextIndex);
      }
    }
  },

  moveActiveDown(prevIndex) {
    let nextIndex = prevIndex + 1;
    if (nextIndex >= this.get('internalContent.length')) {
      return;
    } else {
      if (
        !this.get('internalContent')
          .objectAt(nextIndex)
          .get('enabled')
      ) {
        this.moveActiveDown(nextIndex);
      } else {
        this.set('activeIndex', nextIndex);
      }
    }
  },

  actions: {
    selectIndex(index) {
      this.set('selectedIndex', index);
      // to deal with focusOut not being triggered upon selection in Safari & FF
      this.set('showList', false);
    },

    mouseDown() {
      // needed to explicitly add focus here because Safari was adding focus to
      // a different element than all the other browsers
      this.$('.BourbonSelectField-selected').focus();
      this.set('showList', true);
    }
  }
});
