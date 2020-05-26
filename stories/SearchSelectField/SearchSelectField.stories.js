import { A } from '@ember/array';
import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from '@storybook/addon-actions';
import searchSelectField from './searchSelectField.md';
import searchSelectFieldDisabled from './searchSelectFieldDisabled.md';

storiesOf('search select field', module)
  .add(
    'array search select field',
    () => {
      return {
        template: hbs`{{bourbon-search-select-field labelFormatter=labelFormatter content=petObject prompt="Select an animal..." value="Select an animal..." optionLabelPath="content.label" optionValuePath="content.value"}}`,
        context: {
          labelFormatter: (label, option) => {
            let value = Ember.Handlebars.Utils.escapeExpression(option.value);
            return Ember.String.htmlSafe(
              `<span> ${label} (<strong>${value}</strong>)</span>`
            );
            // return Ember.HTMLBars.compile(
            //   `<span>label  (<strong>${option.value}</strong>)</span>`
            // );
          },
          onClick: action('searchSelectFieldClick'),
          petObject: A([
            {
              label: 'Chompsky ',
              value: 'the only Brussels Griffon',
            },
            {
              label: 'Memphis ',
              value: 'the other Brussels Griffon',
            },
            {
              label: 'Macho ',
              value: 'Frenchie',
            },
          ]),
        },
      };
    },
    {
      notes: { markdown: searchSelectField },
    }
  )
  .add(
    'object search select field',
    () => {
      return {
        template: hbs`{{bourbon-search-select-field content=petObject prompt="Select your favorite dog..." optionLabelPath="content.label" optionValuePath="content.value" optionEnabledPath="content.enabled"  value=null}}`,
        context: {
          onClick: action('searchSelectFieldClick'),
          petObject: A([
            {
              label: 'Chompsky the only Brussels Griffon',
              value: 'the only Brussels Griffon',
              enabled: false,
            },
            {
              label: 'Memphis the other Brussels Griffon',
              value: 'the other Brussels Griffon',
              enabled: true,
            },
            {
              label: 'Macho the Frenchie who is so Frenchie',
              value: 'Frenchie',
              enabled: false,
            },
          ]),
        },
      };
    },
    {
      notes: { markdown: searchSelectField },
    }
  )
  .add(
    'grouped content search select field',
    () => {
      return {
        template: hbs`{{bourbon-search-select-field content=petObject prompt="Select your favorite dog..." optionLabelPath="content.label" optionValuePath="content.value" groupedContent=true}}`,
        context: {
          onClick: action('searchSelectFieldClick'),
          petObject: A([
            {
              groupHeader: 'pets',
              items: A([
                {
                  label: 'Chompsky the only Brussels Griffon',
                  value: 'the only Brussels Griffon',
                },
                {
                  label: 'Memphis the other Brussels Griffon',
                  value: 'the other Brussels Griffon',
                },
                {
                  label: 'Macho the Frenchie who is so Frenchie',
                  value: 'Frenchie',
                },
              ]),
            },
            {
              groupHeader: 'fruits',
              items: A([
                {
                  label: 'apple',
                  value: 'apple',
                },
                {
                  label: 'orange',
                  value: 'orange',
                },
                {
                  label: 'banana',
                  value: 'banana',
                },
              ]),
            },
          ]),
        },
      };
    },
    {
      notes: { markdown: searchSelectField },
    }
  )
  .add(
    'multiple search select fields',
    () => {
      return {
        template: hbs`<div class="btw-flex btw-max-w-sm">{{bourbon-search-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}{{bourbon-search-select-field content=petsArray prompt="Select another animal..."}}</div>`,
        context: {
          onClick: action('searchSelectFieldClick'),
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
            'capybara',
            'Chompsky the only Brussels Griffon Chompsky the only Brussels Griffon',
          ]),
        },
      };
    },
    {
      notes: { markdown: searchSelectField },
    }
  )
  .add(
    'disabled search select field',
    () => {
      return {
        template: hbs`{{bourbon-search-select-field content=petObject disabled=true value="Frenchie" optionLabelPath="content.label" optionValuePath="content.value"}}`,
        context: {
          onClick: action('searchSelectFieldClick'),
          petObject: A([
            {
              label: 'Chompsky the only Brussels Griffon',
              value: 'the only Brussels Griffon',
            },
            {
              label: 'Memphis the other Brussels Griffon',
              value: 'the other Brussels Griffon',
            },
            {
              label: 'Macho the Frenchie who is so Frenchie',
              value: 'Frenchie',
            },
          ]),
        },
      };
    },
    {
      notes: { markdown: searchSelectFieldDisabled },
    }
  );
