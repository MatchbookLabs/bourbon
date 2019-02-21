import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import icons from './icons.md';

storiesOf('icon component', module)
  .add('sf-contact', () => {
    return {
      template: hbs`{{bourbon-icon bourbonIcon='bourbon-sf-contact-icon' size='xlarge'}}`
    };
  },
  {
    notes: { markdown: icons}
  })

  .add('sf-case', () => {
    return {
      template: hbs`{{bourbon-icon bourbonIcon='bourbon-sf-case-icon' size='xlarge'}}`
    };
  },
  {
    notes: { markdown: icons }
  })

  .add('sf-account', () => {
    return {
      template: hbs`{{bourbon-icon bourbonIcon='bourbon-sf-account-icon' size='xlarge'}}`
    };
  },
  {
    notes: { markdown: icons }
  })

  .add('sf-lead', () => {
    return {
      template: hbs`{{bourbon-icon bourbonIcon='bourbon-sf-lead-icon' size='xlarge'}}`
    };
  },
  {
    notes: { markdown: icons }
  })

  .add('sf-opportunity', () => {
    return {
      template: hbs`{{bourbon-icon bourbonIcon='bourbon-sf-opportunity-icon' size='xlarge'}}`
    };
  },
  {
    notes: { markdown: icons }
  })

  .add('confirm', () => {
    return {
      template: hbs`{{bourbon-icon bourbonIcon='bourbon-confirm-icon' size='xlarge'}}`
    };
  },
  {
    notes: { markdown: icons }
  })
