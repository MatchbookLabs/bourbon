import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";
import textField from './textField.md';

storiesOf('text field', module)
  .add(
    'default text field with floating label',
    () => {
      return {
        template: hbs`{{bourbon-text-field placeholder="i am the placholder" onFocusOutOrEnter=onClick}}`,
        context: { onClick: action('textFieldClick') }
      };
    },
    {
      notes: { markdown: textField }
    }
  )
  .add(
    'no label textfield',
    () => {
      return {
        template: hbs`{{bourbon-text-field placeholder="i am the placholder" noLabel=true onFocusOutOrEnter=onClick}}`,
        context: { onClick: action('textFieldClick') }
      };
    },
    {
      notes: { markdown: textField }
    }
  );
