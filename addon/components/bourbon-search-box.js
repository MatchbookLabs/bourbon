import Component from '@ember/component';
import layout from '../templates/components/bourbon-search-box';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['bourbon-search-box'],
  isOpen: false,
  showSearchIcon: computed('isOpen', function() {
    return !this.get('isOpen');
  }),

  init() {
    this._super(...arguments);
    this.set('searchTerms', this.get('value'));

  },

  searchTerms: '',

  actions: {
    showContent() {
      console.log('showContent')
      this.set('isOpen', true);
    },
    hideContent() {
      console.log('hideContent')
      this.set('isOpen', false);
    }
  }

});
