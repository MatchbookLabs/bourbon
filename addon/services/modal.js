import Service from '@ember/service';

export default Service.extend({

  init() {
    this._super(...arguments);

    this.set('defaultParams', {
      showModalState: false,
      scrollable: false,
      wideModal: false,
      confirmationModal: false,
      cancelAction: null,
      title: null,
      content: null,
      context: null,
      primaryButtonTitle: null,
      primaryButtonAction: null,
      secondaryButtonTitle: null,
      secondaryButtonAction: null,
      linkTitle: null,
      linkHref: null
    });

    this.setProperties(this.defaultParams);
  },

  showBourbonModal(options) {
    this.setProperties(options);
    this.set('showModalState', true);
    document.body.classList.add('bourbon-fixed');
  },

  closeBourbonModal() {
    // need to reset the properties for the next modal call
    this.setProperties(this.defaultParams);

    document.body.classList.remove('bourbon-fixed');
  }
});
