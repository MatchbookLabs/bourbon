import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";
import textField from './textField.md';

storiesOf('text field', module)
  .add(
    'default text field with floating label',
    () => {
      return {
        template: hbs`{{bourbon-text-field placeholder="i am the placeholder" onFocusOutOrEnter=onClick}}`,
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
        template: hbs`{{bourbon-text-field placeholder="i am the placeholder" noLabel=true onFocusOutOrEnter=onClick}}`,
        context: { onClick: action('textFieldClick') }
      };
    },
    {
      notes: { markdown: textField }
    }
  )
  .add(
    'autofocus textfield',
    () => {
      return {
        template: hbs`{{bourbon-text-field placeholder="i am the placeholder" autofocus=true onFocusOutOrEnter=onClick}}`,
        context: { onClick: action('textFieldClick') }
      };
    },
    {
      notes: { markdown: textField }
    }
  )
  .add(
    'disabled textfield',
    () => {
      return {
        template: hbs`{{bourbon-text-field placeholder="i am the disabled text-field" disabled=true onFocusOutOrEnter=onClick}}`,
        context: { onClick: action('textFieldClick') }
      };
    },
    {
      notes: { markdown: textField }
    }
  );
