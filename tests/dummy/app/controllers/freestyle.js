import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';
import ModalMixin from 'bourbon/mixins/modal';


const { inject } = Ember;

export default FreestyleController.extend(ModalMixin, {
  init() {
    this._super(...arguments);

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
      scrollable: false,
      cancelAction: this.controllerCloseAction,
      title: 'modal title',
      content: 'test-modal-content',
      primaryButtonTitle: 'primary',
      primaryButtonAction: 'alert',
      linkTitle: 'alternative resource link',
      linkHref: '#'
    }),

    this.set('longModalParams', {
      scrollable: false,
      cancelAction: this.controllerCloseAction,
      title: 'modal title',
      content: 'test-long-modal-content',
      primaryButtonTitle: 'primary',
      primaryButtonAction: 'alert',
      linkTitle: 'alternative resource link',
      linkHref: '#'
    }),

    this.set('scrollableModalParams', {
      scrollable: true,
      cancelAction: this.controllerCloseAction,
      title: 'scrolling modal title',
      content: 'test-long-modal-content',
      primaryButtonTitle: 'primary',
      primaryButtonAction: 'alert',
      secondaryButtonTitle: 'secondary',
      secondaryButtonAction: 'alert',
      linkTitle: 'alternative resource link',
      linkHref: '#'
    })
  },
  
  actions: {
    alert() {
      alert('you are clicking a button!')
    }
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
