import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";

storiesOf("buttons", module)
  .add(
    "primary button",
    () => {
      return {
        template: hbs`
              <div class="BourbonGroupContainer btw-m-4">
                {{bourbon-button class='BourbonButton--primary' title='Primary button' action=onClick}}
                {{bourbon-button title='Disabled' class='BourbonButton--primary BourbonButton--disabled'}}
              </div>
              {{bourbon-button class='BourbonButton--primary' title='Primary full width button' action=onClick fullWidth=true}}`,
        context: { onClick: action("buttonClick") }
      };
    },
    {
      notes: `
    <h4>Button options</h4>
    <ul>
      <li>title (required)</li>
      <li>fullWidth (optional)</li>
      <li>action (required)</li>
      <li>linkTo: to use if you want to open an external link (optional)</li>
      <li>openLinkInNewTab: default is false. true will open into a new tab (optional)</li>
    </ul>

    <p>The primary button is used in most situtations to indicate the primary action.</p>
    <p>All titles should be entered in sentence case.</p>
    <p>The attributes that can be added to the button currently include the following:</p>
    <ul>
      <li>aria-label</li>
      <li>tabindex</li>
      <li>data-role</li>
      <li>target</li>
      <li>data-hint</li>
    </ul>
    `
    }
  )

  .add(
    "secondary button",
    () => {
      return {
        template: hbs`
              <div class="BourbonGroupContainer btw-m-4">
                {{bourbon-button class='BourbonButton--secondary' title='secondary button' action=onClick}}
                {{bourbon-button title='Disabled' class='BourbonButton--secondary BourbonButton--disabled'}}
              </div>
              {{bourbon-button title='Secondary button' class='BourbonButton--secondary' action=onClick fullWidth=true}}`,
        context: { onClick: action("buttonClick") }
      };
    },
    {
      notes: `
      <h4>Button options</h4>
      <ul>
        <li>title (required)</li>
        <li>fullWidth (optional)</li>
        <li>action (required)</li>
        <li>linkTo: to use if you want to open an external link (optional)</li>
        <li>openLinkInNewTab: default is false. true will open into a new tab (optional)</li>
      </ul>

      <p>The primary button is used in most situtations to indicate the primary action.</p>
      <p>All titles should be entered in sentence case.</p>
      <p>The attributes that can be added to the button currently include the following:</p>
      <ul>
        <li>aria-label</li>
        <li>tabindex</li>
        <li>data-role</li>
        <li>target</li>
        <li>data-hint</li>
      </ul>
      `
    }
  )

  .add("rounded button", () => {
    return {
      template: hbs`
              <div class="BourbonGroupContainer btw-m-4">
                {{bourbon-button title='Setup guide' class='BourbonButton--primary BourbonButton--rounded' action=onClick data-hint='press the button' icon='new-tab'}}
                {{bourbon-button title='Disabled' class='BourbonButton--primary BourbonButton--disabled BourbonButton--rounded'}}
              </div>
              {{#bourbon-button class='BourbonButton--primary BourbonButton--rounded' action=onClick data-hint='press the button' fullWidth=true}}
                Rounded primary button full width
              {{/bourbon-button}}`,
      context: { onClick: action("buttonClick") }
    };
  })

  .add("delete button", () => {
    return {
      template: hbs`{{bourbon-button class='BourbonButton--delete' title='delete button'}}`
    };
  })

  .add(
    "icon button",
    () => {
      return {
        template: hbs`{{bourbon-button icon='edit-button'}}`
      };
    },
    {
      notes: `
      <h4>Button options</h4>
      <ul>
        <li>title (required)</li>
        <li>fullWidth (optional)</li>
        <li>action (required)</li>
        <li>linkTo: to use if you want to open an external link (optional)</li>
        <li>openLinkInNewTab: default is false. true will open into a new tab (optional)</li>
      </ul>

      <p>The primary button is used in most situtations to indicate the primary action.</p>
      <p>All titles should be entered in sentence case.</p>
      <p>The attributes that can be added to the button currently include the following:</p>
      <ul>
        <li>aria-label</li>
        <li>tabindex</li>
        <li>data-role</li>
        <li>target</li>
        <li>data-hint</li>
      </ul>
      `
    });
