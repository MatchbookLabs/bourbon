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
        this.sendAction('modalService.cancelAction');
        this.get('modalService').closeModal();
        document.body.classList.remove('bourbon-fixed');
      }
    }.bind(this), true);
  },
  layout,

  actions: {
    closeModal() {
      this.sendAction('modalService.cancelAction');
      this.get('modalService').closeModal();
      document.body.classList.remove('bourbon-fixed');
    },

    alert() {
      alert('testing')
    }
  }
});
