import Component from '@ember/component';
import layout from '../templates/components/bourbon-modal';
import { inject as service } from '@ember/service';

export default Component.extend({
  modalService: service('modal'),
  
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
    if (typeof this.get('modalService.cancelAction') === 'function') {
      this.get('modalService.cancelAction')();
    }
    this.get('modalService').closeModal();
  },

  actions: {
    closeModal() {
      this._closeModalActions();
    },

    alert() {
      alert('testing')
    }
  }
});
