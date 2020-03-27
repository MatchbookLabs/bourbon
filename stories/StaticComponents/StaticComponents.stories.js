import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";
import alertBadge from './alertBadge.md';
import featureOverview from './featureOverview.md';
import demoPrompt from './demoPrompt.md';



storiesOf('static components', module)
  .add(
    'alert badge',
    () => {
      return {
        template: hbs`{{bourbon-alert-badge message="This feature isn't available on your current plan." }}`
      };
    },
    {
      notes: { markdown: alertBadge }
    }
  )
  .add(
    'margarita alert badge',
    () => {
      return {
        template: hbs`
        <div class="using-new-app">
          {{bourbon-alert-badge message="This feature isn't available on your current plan." }}
        </div>
        `
      };
    },
    {
      notes: { markdown: alertBadge }
    }
  )
  .add(
    'feature overview',
    () => {
      return {
        template: hbs`{{bourbon-feature-overview svg="messaging" header="Salesforce Messaging" message="GetFeedback for Salesforce Chat lets you seamlessly transition your customers to a survey at the end of a chat session, so you can easily collect real-time, contextual feedback to improve your customer experience."  buttonOneLinkTo="#" buttonOneTitle="Setup guide" buttonOneIcon="new-tab" }}`,
        context: { onClick: action('demoClick') }
      };
    },
    {
      notes: { markdown: featureOverview }
    }
  )
  .add(
    'demo prompt',
    () => {
      return {
        template: hbs`
      {{bourbon-demo-prompt
        header="Need help? Schedule a demo."
        message="We would be happy to demo the setup and functionality for you. Tap the button to the right to schedule a demo."
        buttonTitle="Schedule a demo" buttonAction=onClick}}`,
        context: { onClick: action('demoClick') }
      };
    },
    {
      notes: { markdown: demoPrompt }
    }
  );
