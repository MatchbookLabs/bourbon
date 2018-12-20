import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";


storiesOf("text field", module)
  .add("default text field", () => {
    return {
      template: hbs`{{bourbon-text-field placeholder="i am the placholder" onFocusOutOrEnter=onClick}}`,
      context: { onClick: action("textFieldClick") }
    };
  });
