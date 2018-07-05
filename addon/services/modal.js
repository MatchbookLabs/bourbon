import Service from '@ember/service';

export default Service.extend({
  showModalState: false,
  scrollable: false,
  cancelAction: null,
  title: null,
  content: null,
  primaryButtonTitle: null,
  primaryButtonAction: null,
  secondaryButtonTitle: null,
  secondaryButtonAction: null,
  linkTitle: null,
  linkHref: '#',

  showModal(options) {
    this.setProperties(options);
    this.set('showModalState', true);
    document.body.classList.add('bourbon-fixed');
  },

  closeModal() {
    this.set('showModalState', false);
    document.body.classList.remove('bourbon-fixed');
  }
});
