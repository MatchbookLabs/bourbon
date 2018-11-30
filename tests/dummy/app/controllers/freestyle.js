import Ember from 'ember';
import { A } from '@ember/array';
import FreestyleController from 'ember-freestyle/controllers/freestyle';
import ModalMixin from 'bourbon/mixins/modal';

const { inject } = Ember;

export default FreestyleController.extend(ModalMixin, {
  init() {
    this._super(...arguments);

    this.set('petsArray', A(['cats', 'dogs', 'rabbits', 'bears', 'beaver', 'moose', 'goose'])),
    this.set('petObject', A([
      {
        label: 'Chompsky the only Brussels Griffon',
        value: 'the only Brussels Griffon'
      },
      {
        label: 'Memphis the other Brussels Griffon',
        value: 'the other Brussels Griffon'
      },
      {
        label: 'Macho the Frenchie who is so Frenchie',
        value: 'Frenchie'
      }
    ])),


    this.set('somePetObject', A([
      {
        label: 'Chompsky the only Brussels Griffon',
        value: 'the only Brussels Griffon',
        enabledPath: null
      },
      {
        label: 'Memphis the other Brussels Griffon',
        value: 'the other Brussels Griffon',
        enabledPath: 'content.enabled'
      },
      {
        label: 'Macho the Frenchie who is so Frenchie',
        value: 'Frenchie',
        enabledPath: 'content.enabled'
      }
    ])),

    // this is reflected in the visual style/color section
    this.set('colorPalette', {
      'accent': {
        'name': 'fern',
        'base': '#5CB675'
      },
      'accentHover': {
        'name': 'emerald',
        'base': '#4CCE6F'
      },
      'accentActive': {
        'name': 'fruit-salad',
        'base': '#4CA465'
      },

      'mine-shaft': {
        'name': 'mine-shaft',
        'base': '#2D2D2D'
      },
      'secondary': {
        'name': 'slate',
        'base': '#474C4F'
      },

      'shade': {
        'name': 'shade',
        'base': 'rgba(0,0,0,0.4)'
      },

      'alto': {
        'name': 'alto',
        'base': '#DCDCDC'
      },
      'alabaster': {
        'name': 'alabaster',
        'base': '#FAFAFA'
      },

      'secondaryActive': {
        'name': 'concrete',
        'base': '#F3F3F3'
      },

      'mercury': {
        'name': 'mercury',
        'base': '#E9E9E9'
      },

      'foreground': {
        'name': 'black',
        'base': '#212121'
      },
      'background': {
        'name': 'white',
        'base': '#ffffff'
      },
      'dodger-blue': {
        'name': 'dodger-blue',
        'base': '#2E71FC'
      },
    }),

    this.set('modalParams', {
      closeAction: this.controllerCloseAction,
      title: 'modal title',
      content: 'test-modal-content',
      buttonOneTitle: 'Primary',
      buttonOneAction: this.primaryClick,
      buttonTwoTitle: 'Secondary button',
      linkTitle: 'alternative resource link',
      linkHref: '#',
      dismissable: false
    }),

    this.set('modalWideParams', {
      wideModal: true,
      closeAction: this.controllerCloseAction,
      title: 'wide modal title',
      content: 'test-modal-content',
      buttonOneTitle: 'Secondary Button',
      buttonOneAction: this.primaryClick,
      buttonOneDontClose: true,
      buttonOneType: 'secondary',
    }),

    this.set('confirmationModalParams', {
      confirmationModal: true,
      closeAction: this.controllerCloseAction,
      title: 'Are you sure?',
      textContent: 'Would you like to delete your connection?',
      buttonOneTitle: 'Delete',
      buttonOneAction: this.primaryClick,
      buttonOneType: 'delete',
      buttonTwoTitle: 'Cancel',
      buttonTwoAction: () => this.secondaryClick('anonymous'),
    }),

    this.set('noPaddingModalParams', {
      confirmationModal: true,
      noPaddingModal: true,
      title: 'Am I cute?',
      content: 'test-image-content',
    }),

    this.set('longModalParams', {
      title: 'long modal title',
      content: 'test-long-modal-content',
      buttonOneTitle: 'Primary Button',
      buttonOneDontClose: true,
      buttonOneAction: () => this.get('modalService').showBourbonModal(this.get('confirmationModalParams'))
    }),

    this.set('scrollableModalParams', {
      scrollable: true,
      closeAction: this.controllerCloseAction,
      title: 'scrolling modal title',
      content: 'test-long-modal-content',
      buttonOneTitle: 'Primary Button',
      buttonOneAction: this.primaryClick,
      buttonTwoTitle: 'Secondary',
      buttonTwoAction: () => this.secondaryClick('anonymous'),
      buttonTwoDontClose: true,
      linkTitle: 'alternative resource link',
      linkHref: '#'
    })
  },


  actions: {
    buttonClick() {
      alert('you are clicking a button: action from freestyle!');
    },

    textFieldClick(text) {
      /* eslint no-console: 0 */
      console.log(`you are taking a textfield action that has a value of ${text}`);
    },

    textFieldEnterAction(text) {
      alert(`you are taking a textFieldEnterAction that has a value of ${text}`);
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
