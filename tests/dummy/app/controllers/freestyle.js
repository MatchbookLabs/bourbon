import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { inject } = Ember;

export default FreestyleController.extend({
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
    })
  },

  showModalState: false,
  showScrollableModalState: false,

  
  actions: {
    alert() {
      alert('you are clicking a button!')
    },
    showModal() {
      this.set('showModalState', true);
    },
    closeModal() {
      this.set('showModalState', false);
    },
    showScrollableModal() {
      this.set('showScrollableModalState', true);
    },
    closeScrollableModal() {
      this.set('showScrollableModalState', false);
    }
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
