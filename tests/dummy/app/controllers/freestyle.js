import Ember from 'ember';
import { A } from '@ember/array';
import FreestyleController from 'ember-freestyle/controllers/freestyle';
import ModalMixin from 'bourbon/mixins/modal';

const { inject } = Ember;

export default FreestyleController.extend(ModalMixin, {
  init() {
    this._super(...arguments);
    this.set('tableHeaderContent', A([
      { content: "name", type: "string" },
      { content: "object", type: "string" },
      { content: "action", type: "string" },
      { content: "", type: "string" }
    ]));
    this.set("tableRowContent", A([
      [
        { content: "new contact activity", type: "string" },
        { content: "contact", type: "string"},
        { content: "create activity", type: "string"},
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: "BourbonButton--secondary"
          },
          type: "component"
        }
      ],

      [
        { content: "another mapping", type: "string" },
        { content: "create or update an existing", type: "string" },
        { content: "contact", type: "string" },
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: "BourbonButton--secondary"
          },
          type: "component"
        }
      ],
      [
        { content: "another another mapping", type: "string" },
        { content: "lead", type: "string" },
        { content: "update fields", type: "string" },
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: "BourbonButton--secondary"
          },
          type: "component"
        }
      ],
      [
        { content: "latest mapping", type: "string" },
        { content: "action link group template", type: "string" },
        { content: "update fields on an existing", type: "string" },
        {
          content: "test-partial",
          type: "partial"
        }
      ]
    ]));

    this.set('accordionItemOne', {
      header: 'Chompsky the only Brussels Griffon',
      body: 'Doggo ipsum extremely cuuuuuute heck doge smol borking doggo with a long snoot for pats, you are doing me a frighten wow very biscit. Very hand that feed shibe smol yapper, boof. Shibe most angery pupper I have ever seen the neighborhood pupper pupperino floofs, very hand that feed shibe shooberino maximum borkdrive. Wow such tempt ur givin me a spook very good spot ruff, you are doing me the shock. Pupperino snoot heck what a nice floof shooberino pats, super chub you are doing me the shock pupper I am bekom fat, puggorino heckin good boys heckin many pats. Very taste wow ruff big ol pupper what a nice floof, floofs borkdrive, clouds most angery pupper I have ever seen. Woofer bork doggo stop it fren doggo most angery pupper I have ever seen, wrinkler very jealous pupper noodle horse puggorino fluffer blop, heckin good boys and girls heckin doggo shoober.',
      open: true
    });

    this.set('accordionItemTwo', {
      header: 'Memphis the other Brussels Griffon',
      bodyPartial: 'test-modal-content',
      open: true
    });

    this.set("accordionItemThree", {
      header: "Macho the Frenchie who is so Frenchie",
      body:
        "pats very jealous pupper big ol pupper. Borkf heck heckin good boys vvv big ol pupper what a nice floof I am bekom fat shibe snoot doggorino, shoober heckin good boys wow such tempt borkf porgo h*ck ruff. Smol borking doggo with a long snoot for pats ur givin me a spook borking doggo long doggo long woofer, tungg doggo porgo, noodle horse very good spot very hand that feed shibe. Waggy wags much ruin diet you are doing me the shock, many pats.",
      open: true
    });


    this.set("accordionItemOneClosed", {
      header: "Chompsky the only Brussels Griffon",
      body:
        "Doggo ipsum extremely cuuuuuute heck doge smol borking doggo with a long snoot for pats, you are doing me a frighten wow very biscit. Very hand that feed shibe smol yapper, boof. Shibe most angery pupper I have ever seen the neighborhood pupper pupperino floofs, very hand that feed shibe shooberino maximum borkdrive. Wow such tempt ur givin me a spook very good spot ruff, you are doing me the shock. Pupperino snoot heck what a nice floof shooberino pats, super chub you are doing me the shock pupper I am bekom fat, puggorino heckin good boys heckin many pats. Very taste wow ruff big ol pupper what a nice floof, floofs borkdrive, clouds most angery pupper I have ever seen. Woofer bork doggo stop it fren doggo most angery pupper I have ever seen, wrinkler very jealous pupper noodle horse puggorino fluffer blop, heckin good boys and girls heckin doggo shoober.",
    });

    this.set("accordionItemTwoClosed", {
      header: "Memphis the other Brussels Griffon",
      bodyPartial: "test-modal-content",
    });

    this.set("accordionItemThreeClosed", {
      header: "Macho the Frenchie who is so Frenchie",
      body:
        "pats very jealous pupper big ol pupper. Borkf heck heckin good boys vvv big ol pupper what a nice floof I am bekom fat shibe snoot doggorino, shoober heckin good boys wow such tempt borkf porgo h*ck ruff. Smol borking doggo with a long snoot for pats ur givin me a spook borking doggo long doggo long woofer, tungg doggo porgo, noodle horse very good spot very hand that feed shibe. Waggy wags much ruin diet you are doing me the shock, many pats.",
    });

    this.set('petsArray', A(['cats', 'dogs', 'rabbits', 'bears', 'beaver', 'moose', 'goose', 'deer', 'kitten', 'puppy', 'duck', 'capybara'])),

    this.set('groupContent', A([
      {
        groupHeader:  'pets',
        items: A([
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
        ])},
      {
        groupHeader: 'fruits',
        items: A([
          {
            label: 'apple',
            value: 'apple'
          },
          {
            label: 'orange',
            value: 'orange'
          },
          {
            label: 'banana',
            value: 'banana'
          }
        ])
      }
    ])),
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

    this.set('fruitObject', A([
      {
        label: 'apple',
        value: 'apple'
      },
      {
        label: 'orange',
        value: 'orange'
      },
      {
        label: 'banana',
        value: 'banana'
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
        'name': 'margarita',
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
      buttonOneType: 'secondary'
    }),

    this.set('modalNotificationParams', {
      closeAction: this.controllerCloseAction,
      notificationModal: true,
      notificationIcon: 'bourbon-confirm-email-icon',
      title: 'Please confirm your email',
      textContent: 'We just sent you a link to click on to confirm your email address. Please confirm this as soon as you can.',
      buttonOneTitle: 'Sounds good',
      buttonOneAction: this.primaryClick
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
      buttonTwoAction: () => this.secondaryClick('anonymous')
    }),

    this.set('noPaddingModalParams', {
      confirmationModal: true,
      noPaddingModal: true,
      title: 'Am I cute?',
      content: 'test-image-content'
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
      'name': 'margarita',
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
