import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from "@storybook/addon-actions";

storiesOf("static component", module)
  .add(
    "alert badge",
    () => {
      return {
        template: hbs`{{bourbon-alert-badge message="This feature isn't available on your current plan." }}`
      };
    },
    {
      notes: `
      <h4>alert badge options</h4>
      <ul>
        <li>message (required)</li>
      </ul>
    `
    }
  )
  .add(
    "feature overview",
    () => {
      return {
        template: hbs`{{bourbon-feature-overview svg="messaging" header="Salesforce Messaging" message="GetFeedback for Salesforce Chat lets you seamlessly transition your customers to a survey at the end of a chat session, so you can easily collect real-time, contextual feedback to improve your customer experience."  buttonOneLinkTo="#" buttonOneTitle="Setup guide" buttonOneIcon="new-tab" }}`,
        context: { onClick: action("demoClick") }
      };
    },
    {
      notes: `
      <h4>Feature overview options</h4>
      <ul>
        <li>svg (required)</li>
        <li>header (required)</li>
        <li>message (required)</li>
        <li>buttonOneTitle (required)</li>
        <li>buttonOneAction or buttonOneLinkTo (required)</li>
        <li>buttonOneType: default is "primary" (required)</li>
        <li>openButtonOneLinkInNewTab: default will be false (optional)</li>
        <li>buttonOneIcon (optional)</li>

        <li>buttonTwoTitle (optional)</li>
        <li>buttonTwoAction or buttonOneLinkTo (required if there is a second button)</li>
        <li>buttonTwoType: default is "primary" (optional)</li>
        <li>openButtonTwoLinkInNewTab: default will be false (optional)</li>
        <li>buttonTwoIcon (optional)</li>

      </ul>

      `
    }
  )
  .add(
    "demo prompt",
    () => {
      return {
        template: hbs`
      {{bourbon-demo-prompt
        header="Need help? Schedule a demo."
        message="We would be happy to demo the setup and functionality for you. Tap the button to the right to schedule a demo."
        buttonTitle="Schedule a demo" buttonAction=onClick}}`,
        context: { onClick: action("demoClick") }
      };
    },
    {
      notes: `
      <h4>Demo prompt options</h4>
      <ul>
        <li>header (required)</li>
        <li>message (required)</li>
        <li>buttonTitle (required)</li>
        <li>buttonAction (required)</li>
      </ul>
      `
    }
  );
