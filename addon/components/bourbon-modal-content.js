import Component from '@ember/component';

import layout from '../templates/components/bourbon-modal-content';

export default Component.extend({
  classNames: ['bourbon-modal__content'],
  classNameBindings: ['noPadding:bourbon-p-0', 'noPadding:bourbon-m-0'],
  layout,

  actions: {
    closeBourbonModal() {
      this.get('closeBourbonModal')();
    }
  }
});
