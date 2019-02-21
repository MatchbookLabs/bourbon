import { A } from "@ember/array";
import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";
import selectField from './selectField.md';

storiesOf('select field', module)
  .add(
    'array select field',
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}`,
        context: {
          onClick: action('selectFieldClick'),
          petsArray: A([
            'cats',
            'dogs',
            'rabbits',
            'bears',
            'beaver',
            'moose',
            'goose',
            'deer',
            'kitten',
            'puppy',
            'duck',
            'capybara'
          ])
        }
      };
    },
    {
      notes: { markdown: selectField }
    }
  )
  .add(
    'object select field',
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petObject prompt="Select your favorite dog..." optionLabelPath="content.label" optionValuePath="content.value" fullWidth=true}}`,
        context: {
          onClick: action('selectFieldClick'),
          petObject: A([
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
          ])
        }
      };
    },
    {
      notes: { markdown: selectField }
    }
  );
