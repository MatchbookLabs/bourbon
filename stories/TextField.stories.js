import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";


storiesOf("text field", module).add(
  "default text field",
  () => {
    return {
      template: hbs`{{bourbon-text-field placeholder="i am the placholder" onFocusOutOrEnter=onClick}}`,
      context: { onClick: action("textFieldClick") }
    };
  },
  {
    notes: `
    <div>To see the action, please open up your console to see the console.log statements.</div>

    <h4>Form field options</h4>
    <ul>
      <li>placeholder: (optional)</li>
      <li>value: default is '' (optional)</li>
      <li>classNames: you can add additional classes to style the input differently (optional)</li>
      <li>various actions:
        <ul>
          <li>actionOnFocusIn: action to be taken when focused into the text field</li>
          <li>actionOnFocusOut: action to be taken when focused out of the text field</li>
          <li>actionOnEnter: action to be taken when pressing enter in the text field</li>
          <li>onFocusOutOrEnter: action to be taken when focused out of or when pressing enter in the text field</li>
        </ul>
      </li>
      <li>autofocus: default is false (optional)</li>
    </ul>
  `
  }
);
