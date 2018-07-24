import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';
import ModalMixin from 'bourbon/mixins/modal';

const { inject } = Ember;

export default FreestyleController.extend(ModalMixin, {
  init() {
    this._super(...arguments);

    // this is reflected in the visual style/color section
    this.set('colorPalette', {
      'accent': {
        'name': 'fern',
        'base': '#5CB675'
      },
      'secondary': {
        'name': 'slate',
        'base': '#474C4F'
      },
      'foreground': {
        'name': 'black',
        'base': '#212121'
      },
      'background': {
        'name': 'white',
        'base': '#ffffff'
      }
    }),

    this.set('modalParams', {
      closeAction: this.controllerCloseAction,
      title: 'modal title',
      content: 'test-modal-content',
      primaryButtonTitle: 'Primary',
      primaryButtonAction: this.primaryClick,
      linkTitle: 'alternative resource link',
      linkHref: '#'
    }),

    this.set('modalWideParams', {
      wideModal: true,
      closeAction: this.controllerCloseAction,
      title: 'modal title',
      content: 'test-modal-content',
      secondaryButtonTitle: 'Secondary',
      secondaryButtonAction: this.primaryClick,
    }),

    this.set('confirmationModalParams', {
      confirmationModal: true,
      closeAction: this.controllerCloseAction,
      title: 'Unsaved Changes',
      textContent: 'Would you like to save your work before leaving?',
      primaryButtonTitle: 'Save',
      primaryButtonAction: this.primaryClick,
      secondaryButtonTitle: 'Continue without saving',
      secondaryButtonAction: () => this.secondaryClick('anonymous'),
    }),

    this.set('longModalParams', {
      title: 'modal title',
      content: 'test-long-modal-content',
      primaryButtonTitle: 'Primary',
      primaryButtonAction: this.primaryClick,
      linkTitle: 'alternative resource link',
      linkHref: '#'
    }),

    this.set('scrollableModalParams', {
      scrollable: true,
      closeAction: this.controllerCloseAction,
      title: 'scrolling modal title',
      content: 'test-long-modal-content',
      primaryButtonTitle: 'Primary',
      primaryButtonAction: this.primaryClick,
      secondaryButtonTitle: 'Secondary',
      secondaryButtonAction: () => this.secondaryClick('anonymous'),
      modalSecondaryButtonCloseAction: false,
      linkTitle: 'alternative resource link',
      linkHref: '#'
    })
  },


  actions: {
    buttonClick() {
      alert('you are clicking a button: action from freestyle!');
    }
  },

  primaryClick() {
    alert('you are clicking a primary freestyle button!');
  },

  secondaryClick(name) {
    alert(`you are clicking a secondary freestyle button! via an ${name} function`)
  },
  
  controllerCloseAction() {
    alert('i am a closing action from the controller')
  },

  emberFreestyle: inject.service()

  /* BEGIN-FREESTYLE-USAGE fp:notes
### A few notes regarding the getfeedback palette

- Looks very nice

And another thing...

###### Markdown note demonstrating prettified code

```
import Ember from 'ember';

export default Ember.Component.extend({
  // ...
  colorPalette: {
    'accent': {
      'name': 'fern',
      'base': '#5CB675'
    },
    'secondary': {
      'name': 'slate',
      'base': '#474C4F'
    }
  }
  // ...
});
```
  END-FREESTYLE-USAGE */
});
