import Component from '@ember/component';

import layout from '../templates/components/bourbon-modal-content';

export default Component.extend({
  classNames: ['BourbonModal-content'],
  classNameBindings: ['noPadding:btw-p-0', 'noPadding:btw-m-0'],
  layout,

  actions: {
    closeBourbonModal() {
      this.get('closeBourbonModal')();
    }
  }
});
