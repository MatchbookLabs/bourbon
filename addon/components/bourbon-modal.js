import Component from '@ember/component';
import layout from '../templates/components/bourbon-modal';

export default Component.extend({
  init() {
    this._super(...arguments);

    document.body.className += ' bourbon-fixed';

    //  allow the user to escape the modal using the ESC key
    document.addEventListener('keydown', function (e) {
      if ((this.isOpen === true) && e.keyCode === 27) {
        this.sendAction('cancelAction');
        document.body.classList.remove('bourbon-fixed');
      }
    }.bind(this), true);
  },
  layout,
  actions: {
    closeModal() {
      this.sendAction('cancelAction');
      document.body.classList.remove('bourbon-fixed');
    },

    alert() {
      alert('testing')
    }
  }
});
