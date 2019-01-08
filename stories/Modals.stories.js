import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";


storiesOf("modals", module).add(
  "default modal",
  () => {
    return {
      template: hbs`
        {{bourbon-button title='Show wide modal' class='BourbonButton--primary' action=onClick}}
        {{bourbon-modal}}`,
      context: {
        onClick: action('showBourbonModal')
      }
    };
  },
  {
    notes: `
    <br>
    - You will need to add the paramaters for each modal to your controller.
    - If you want to close the modal after close action. Your controller will have to call the closeModal function.

    <h4>Modal Options</h4>
    <ul>
      <li>title: modal title</li>
      <li>content: partial name for modal content</li>
      <li>textContent: string for modal content</li>
      <li>
          title is required if you need a button. action is only needed if you have a flabongo action, otherwise, the button will default to having action for closing the
        modal
        <ul>
          <li>buttonOneTitle: text to display on the right button</li>
          <li>buttonOneAction: function for the right button action</li>
          <li>buttonOneType: the type defaults to 'primary' but can be changed to 'secondary' or 'delete'</li>
          <li>buttonTwoTitle: text to display on the left button</li>
          <li>buttonTwoAction: function for the left button action</li>
          <li>buttonTwoType: the type defaults to 'secondary' but can be changed to 'primary' or 'delete'</li>
        </ul>
      </li>
      <li>context: Optional if you need to know the controller context inside the modal.</li>
      <li>scrollable: Optional to make content in the modal scrollable (good for long content, height: 600px)</li>
      <li>wideModal: Optional to make the modal wider (width: 850px)</li>
      <li>closeAction: function to run in addition to the default closing actions of the modal (closeBourbonModal)</li>
      <li>buttonOneDontClose: Optional set to true if you don't want the button in the modal to trigger a close action</li>
      <li>buttonTwoDontClose: Optional set to true if you don't want the button in the modal to trigger a close action</li>
      <li>linkTitle: text to display on the footer link</li>
      <li>linkHref: link for the footer link</li>
      <li>dismissable: Optional, modal set to true and dismissable by default.  Pass in false to change this.</li>
    </ul>

    <h4>Please Note</h4>
    <p>
      For the content section, you can pass in a string or a partial.
    </p>
    <p>
      For a partial, use the following classes for your content.
    </p>
    <ul>
      <li>BourbonModal-description</li>
      <li>BourbonModal-contentArea</li>
    </ul>

    <p>
      When passing in a <strong>context</strong> into a modal, you will need to reference
      "modalContext" within your partial or component in flabongo.
    </p>
    <p>See example below.</p>
    <p>In the component.coffee file</p>


    @send 'showBourbonModal',
    content: 'components/custom-dropdowns-container'
        context: this
        closeAction: =>
          surveyReloadPromise = @get('surveyController.model').reloadRecord()
        @send 'showPending', surveyReloadPromise

    <p>In the component.emblem template</p>
    = custom-dropdowns[
                  survey = modalContext.surveyController
                  currentUser = modalContext.currentUser
                  selectedChoice = modalContext.selectedChoice
              ]


    See examples below.

    <br>
      this.set('scrollableModalParams', {
        scrollable: true,
        wideModal: false,
        closeAction: this.controllerCloseAction,
        title: 'scrolling modal title',
        content: 'test-long-modal-content',
        context: this,
        buttonOneTitle: 'Primary Button',
        buttonOneAction: this.primaryClick,
        buttonOneType: 'primary',
        buttonOneDontClose: true,
        buttonTwoTitle: 'Secondary',
        buttonTwoType: 'secondary',
        buttonTwoAction: () => this.secondaryClick('anonymous'),
        buttonTwoDontClose: true,
        linkTitle: 'alternative resource link',
        linkHref: '#',
        dismissable: true
      })


      controllerActionToBePassed() {
        # do something

        // call this from flabongo to close the modal
        this.get('modalService').closeBourbonModal();
      }

    <br>
    `
  }
);
