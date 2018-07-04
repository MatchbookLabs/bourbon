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
    let {
      scrollable,
      cancelAction,
      title,
      content,
      primaryButtonTitle,
      primaryButtonAction,
      secondaryButtonTitle,
      secondaryButtonAction,
      linkTitle,
      linkHref
    } = options;

    this.setProperties({
      showModalState: true,
      scrollable,
      cancelAction,
      title,
      content,
      primaryButtonTitle,
      primaryButtonAction,
      secondaryButtonTitle,
      secondaryButtonAction,
      linkTitle,
      linkHref
    })

    document.body.classList.add('bourbon-fixed');
  },

  closeModal() {
    this.set('showModalState', false);
  }
});
