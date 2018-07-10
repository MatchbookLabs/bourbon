import Component from '@ember/component';
import layout from '../templates/components/bourbon-modal';
import { inject as service } from '@ember/service';

export default Component.extend({
  modalService: service('modal'),
  classNames: ['bourbon-modal__wrapper'],
  classNameBindings: ['modalService.showModalState:bourbon-fixed'],
  attributeBindings: ['modalService.ariaModal:aria-modal'],
  
  init() {
    this._super(...arguments);

    //  allow the user to escape the modal using the ESC key
    document.addEventListener('keydown', function (e) {
      if ((this.get('modalService.showModalState') === true) && e.keyCode === 27) {
        this._closeModalActions();
      }
    }.bind(this), true);
  },
  
  layout,

  _closeModalActions() {
    if (typeof this.get('modalService.closeAction') === 'function') {
      this.get('modalService.closeAction')();
    } else {
      console.warn('warning: no closing action passed');
    }
    this.get('modalService').closeModal();
  },

  actions: {
    closeModal() {
      this._closeModalActions();
    }
  }
});
