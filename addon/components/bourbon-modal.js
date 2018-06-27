import Component from '@ember/component';
import layout from '../templates/components/bourbon-modal';

export default Component.extend({
  init() {
    this._super(...arguments);

    const openState = this.attrs.openState;
    this.set('isOpen', openState);

    if (openState) {
      // TODO see if there is an ember way of  
      // modifying DOM
      document.body.className += ' bourbon-fixed';
    }

    //  allow the user to escape the modal using the ESC key
    document.addEventListener('keydown', function (e) {
      if ((this.isOpen === true) && e.keyCode === 27) {
        this.set('isOpen', false);
        document.body.classList.remove('bourbon-fixed');
      }
    }.bind(this), true);
  },
  isOpen: null,
  layout,
  actions: {
    closeOverlay(e) {
      let targetEl = e.target;
      if (targetEl.classList.contains('bourbon-modal__overlay')) {
        this.set('isOpen', false);
        document.body.classList.remove('bourbon-fixed');
      }
    },
    closeModal() {
      this.set('isOpen', false);
      document.body.classList.remove('bourbon-fixed');
    },
    openModal() {
      this.set('isOpen', true);
      document.body.className += ' bourbon-fixed';
    },
    alert() {
      alert('testing')
    }
  }
});
