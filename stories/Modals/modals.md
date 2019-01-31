
# modal component
 - You will need to add the paramaters for each modal to your controller.
 - If you want to close the modal after close action. Your controller will have to call the closeModal function.

&nbsp;

### Example of usage in bourbon
```
  {{bourbon-button title='Show wide modal' class='BourbonButton--primary' action=onClick}}
  {{bourbon-modal}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| title | string | null | false | adding a header to modal ||
| content | string | null | false | partial name for modal content ||
| textContent | string | null | false | string for modal content | typically used in confirmation modals|
| buttonOneTitle | string | null | true if using buttons | title for button||
| buttonOneAction | function | null | true if using buttons | action to be taken ||
| buttonOneType | string | primary | false | can switch types being displayed |changed to 'secondary' or 'delete'|
| buttonTwoTitle | string |  null| true if using buttons | title for button||
| buttonTwoAction | function | null | true if using buttons | action to be taken ||
| buttonTwoType | string | secondary | false | can switch types being displayed | can be changed to 'primary' or 'delete' |
| context | class | this | false | iif you need to know the controller context inside the modal ||
| scrollable | boolean | false | false | to make content in the modal scrollable (good for long content, height: 600px) ||
| wideModal | boolean | false | false | to make the modal wider (width: 850px) ||
| closeAction | function | null | false | function to run in addition to the default closing actions of the modal (closeBourbonModal) ||
| buttonOneDontClose | boolean | false | false | set to true if you don't want the button in the modal to trigger a close action ||
| buttonTwoDontClose | boolean | false | false | set to true if you don't want the button in the modal to trigger a close action ||
| linkTitle | string | null | false | text to display on the footer link ||
| linkHref | string | null | false | link for the footer link ||
| dismissable | boolean | true | false | modal set to true and dismissable by default.  Pass in false to change this. ||


### Example of usage in Flabongo

-  When passing in a <strong>context</strong> into a modal, you will need to reference "modalContext" within your partial or component in flabongo.

In the component.coffee file
```
  @send 'showBourbonModal',
  content: 'components/custom-dropdowns-container'
      context: this
      closeAction: =>
        surveyReloadPromise = @get('surveyController.model').reloadRecord()
      @send 'showPending', surveyReloadPromise
```
In the component.emblem template
```
  = custom-dropdowns[
                survey = modalContext.surveyController
                currentUser = modalContext.currentUser
                selectedChoice = modalContext.selectedChoice
            ]
```
