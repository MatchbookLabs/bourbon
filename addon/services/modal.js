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
    console.log(options)
    this.set('scrollable', options.scrollable);
    this.set('cancelAction', options.cancelAction);
    this.set('title', options.title);
    this.set('content', options.content);
    this.set('primaryButtonTitle', options.primaryButtonTitle);
    this.set('primaryButtonAction', options.primaryButtonAction);
    this.set('secondaryButtonTitle', options.secondaryButtonTitle);
    this.set('secondaryButtonAction', options.secondaryButtonAction);
    this.set('linkTitle', options.linkTitle);
    this.set('linkHref', options.linkHref);
    this.set('showModalState', true);
    document.body.classList.add('bourbon-fixed');
  },

  closeModal() {
    this.set('showModalState', false);
  }
});
