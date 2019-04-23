import { A } from "@ember/array";
import EmberObject from '@ember/object';

import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";
import selectField from './selectField.md';
import selectFieldObject from './selectFieldObject.md';
import selectFieldDisabled from './selectFieldDisabled.md';

storiesOf('select field', module)
  .add(
    'array select field',
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petsArray prompt="Select an animal..."}}`,
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
      notes: { markdown: selectFieldObject }
    }
  )
  .add(
    'ember object select field',
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petObject prompt="Select your favorite dog..." optionLabelPath="content.label" optionValuePath="content.value" fullWidth=true}}`,
        context: {
          onClick: action('selectFieldClick'),
          petObject: A([
            EmberObject.create({
              label: 'Chompsky the only Brussels Griffon',
              value: 'the only Brussels Griffon'
            }),
            EmberObject.create({
              label: 'Memphis the other Brussels Griffon',
              value: 'the other Brussels Griffon'
            }),
            EmberObject.create({
              label: 'Macho the Frenchie who is so Frenchie',
              value: 'Frenchie'
            })
          ])
        }
      };
    },
    {
      notes: { markdown: selectFieldObject }
    }
  )
  .add(
    'disabled select field',
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petObject prompt="Select your favorite dog..." value="the only Brussels Griffon" optionLabelPath="content.label" optionValuePath="content.value" fullWidth=true disabled=true}}`,
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
      notes: { markdown: selectFieldDisabled }
    }
  );
