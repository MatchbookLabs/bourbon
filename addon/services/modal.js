import Service from '@ember/service';

export default Service.extend({

  init() {
    this._super(...arguments);

    this.set('defaultParams', {
      showModalState: false,
      scrollable: false,
      modalPrimaryButtonCloseAction: false,
      modalSecondaryButtonCloseAction: false,
      wideModal: false,
      confirmationModal: false,
      closeAction: null,
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
    // need to reset properties in case modal
    // is open and just switching content
    this.setProperties(this.defaultParams);
    
    this.setButtonClosingAction(options);
    this.setProperties(options);
    this.set('showModalState', true);
    document.body.classList.add('bourbon-fixed');
  },

  setButtonClosingAction(options) {
    if (options.hasOwnProperty('primaryButtonTitle')) {
      this.set('modalPrimaryButtonCloseAction', true)
    }
    if (options.hasOwnProperty('secondaryButtonTitle')) {
      this.set('modalSecondaryButtonCloseAction', true)
    }
  },

  closeBourbonModal() {
    // need to reset the properties for the next modal call
    this.setProperties(this.defaultParams);

    document.body.classList.remove('bourbon-fixed');
  }
});
