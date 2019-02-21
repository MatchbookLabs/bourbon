import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";
import modals from './modals.md';


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
    notes: { markdown: modals}
  }
);
