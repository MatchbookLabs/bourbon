import Component from '@ember/component';

import layout from '../templates/components/bourbon-modal';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';


export default Component.extend({
  modalService: service('modal'),
  classNames: ['BourbonModal-container'],
  classNameBindings: ['modalService.showModalState:btw-fixed'],

  buttonOneClass: computed('modalService.buttonOneType', function() {
    return `BourbonButton--${this.get('modalService.buttonOneType')}`;
  }),

  buttonTwoClass: computed('modalService.buttonTwoType', function() {
    return `BourbonButton--${this.get(
      'modalService.buttonTwoType'
    )} btw-mr-3`;
  }),

  showCloseButton: computed('modalService.dissmissable', 'modalService.notificationModal', function() {
    return this.get('modalService.dissmissable') || !this.get('modalService.notificationModal')
  }),

  init() {
    this._super(...arguments);

    //  allow the user to escape the modal using the ESC key
    document.addEventListener(
      'keydown',
      function(e) {
        if (
          this.get('modalService.showModalState') === true &&
          e.keyCode === 27 &&
          this.get('modalService.dismissable') === true
        ) {
          this._closeModalActions();
        }
      }.bind(this),
      true
    );
  },

  layout,

  _closeModalActions() {
    if (typeof this.get('modalService.closeAction') === 'function') {
      this.get('modalService.closeAction')();
    }

    if (this.get('modalService.dismissable') === true) {
      this.get('modalService').closeBourbonModal();
    }
  },

  actions: {
    closeBourbonModal() {
      this._closeModalActions();
    },

    buttonOneAction() {
      // buttonAction might change the options so need to set a new variable
      const originalButtonOneDontClose = this.get(
        'modalService.buttonOneDontClose'
      );

      if (this.get('modalService.buttonOneAction')) {
        this.get('modalService.buttonOneAction')();
      }

      if (!originalButtonOneDontClose) {
        this.get('modalService').closeBourbonModal();
      }
    },

    buttonTwoAction() {
      // buttonAction might change the options so need to set a new variable
      const originalButtonTwoDontClose = this.get(
        'modalService.buttonTwoDontClose'
      );

      if (this.get('modalService.buttonTwoAction')) {
        this.get('modalService.buttonTwoAction')();
      }

      if (!originalButtonTwoDontClose) {
        this.get('modalService').closeBourbonModal();
      }
    },

    copyButtonAction() {
      if (this.get('modalService.copyButtonAction')) {
        this.get('modalService.copyButtonAction')();
      }
      this.get('modalService').closeBourbonModal();
    }
  }
});
