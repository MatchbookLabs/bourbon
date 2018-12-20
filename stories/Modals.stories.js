import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";


storiesOf("modals", module)
  .add("default modal", () => {
    return {
      template: hbs`
        {{bourbon-button title='Show wide modal' class='BourbonButton--primary' action=onClick}}
        {{bourbon-modal}}`,
      context: {
        onClick: action("modalClick", {
          wideModal: true,
          title: 'wide modal title',
          content: 'test-modal-content',
          buttonOneTitle: 'Secondary Button',
          buttonOneAction: action("primaryClick"),
          buttonOneDontClose: true,
          buttonOneType: 'secondary',
        })
      }
    };
  });
