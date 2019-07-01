import Component from '@ember/component';
import EmberObject from '@ember/object';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { A } from '@ember/array';
import layout from '../templates/components/new-bourbon-select-field';
import ClickHandlerMixin from 'bourbon/mixins/click-handler';

export default Component.extend(ClickHandlerMixin, {
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

    if (this.get('value') !== this.get('selection.value')) {
      this.set('value', this.get('selection.value'))
    }
  },

  didInsertElement() {
    this._super(...arguments);

    if (this.get('defaultSelection') && this.get('value') === undefined) {
      // need to check if defaultSelection is valid & only update if enabled
      let defaultSelectionIndex = this.get('content').indexOf(this.get('defaultSelection'));

      if (defaultSelectionIndex !== -1) {
        let defaultSelectionEnabled = this.get('internalContent')[defaultSelectionIndex].enabled;
        if (defaultSelectionEnabled) {
          this.set('selectedIndex', defaultSelectionIndex);
        }
      }
    }
  },

  clickHandler(e) {
    if (!e.target.isEqualNode(document.activeElement)) {
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

      if ((index !== -1 && !valueHolder.enabled) || ((index === -1 && !this.get('prompt')))) {
        // if value passed in that is not enabled need to check for the first enabled option
        index = this.get('internalContent').findIndex(element => !!element.enabled);
      }

      if (index !== -1) {
        return index;
      } else {
        // if index = -1 and this.get('prompt') then show prompt
        return null;
      }
    },

    set(key, value) {
      if (value !== -1) {
        this.set(
          'value',
          this.get('internalContent')
            .objectAt(value)
            .get('value')
        );
      }
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

    // don't set selection if index is null or undefined
    if (isPresent(index) && index !== -1) {
      return this.get('internalContent').objectAt(this.get('selectedIndex'));
    } else {
      return null;
    }
  }),

  label: computed('selection', 'prompt', function() {
    let selection = this.get('selection');
    if (isPresent(selection)) {
      return selection.label;
    } else {
      return this.get('prompt');
    }
  }),

  keyDown(e) {
    let el = $(e.currentTarget);
    let list = el.find('.BourbonSelectField-menu');

    if (e.keyCode === 38) {
      // up arrow
      this.moveActiveUp(this.get('activeIndex'));
      let itemHeight = el.find('.NewBourbonSelectField-option')[this.get('activeIndex') + 1].offsetHeight;
      let scrollHeight = ((this.get('activeIndex') - 1) * itemHeight);
      list.scrollTop(scrollHeight);
    } else if (e.keyCode === 40) {
      // down arrow
      this.moveActiveDown(this.get('activeIndex'));
      let itemHeight = el.find('.NewBourbonSelectField-option')[this.get('activeIndex') - 1].offsetHeight;
      let scrollHeight = (this.get('activeIndex') * itemHeight);
      list.scrollTop(scrollHeight);
    } else if (e.keyCode === 13) {
      //  enter
      if (this.get('showList')) {
        this.set('selectedIndex', this.get('activeIndex'));
        // triggers the focusOut to hide the list
        document.activeElement.blur();
        this.set('showList', false);
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
    let nextIndex = prevIndex === null ? 0 : prevIndex + 1;
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
      this.set('showList', !this.get('showList'));
    }
  }
});
