import Service from '@ember/service';

export default Service.extend({

  init() {
    this._super(...arguments);

    this.set('defaultParams', {
      showModalState: false,
      scrollable: false,
      buttonOneDontClose: false,
      buttonTwoDontClose: false,
      wideModal: false,
      confirmationModal: false,
      closeAction: null,
      title: null,
      content: null,
      context: null,
      buttonOneTitle: null,
      buttonOneAction: null,
      buttonOneType: null,
      buttonTwoTitle: null,
      buttonTwoAction: null,
      buttonTwoType: null,
      linkTitle: null,
      linkHref: null
    });

    this.setProperties(this.defaultParams);
  },

  showBourbonModal(options) {
    // need to reset properties in case modal
    // is open and just switching content
    this.setProperties(this.defaultParams);
    
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
