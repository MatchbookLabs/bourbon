import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { actions } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import Centered from "@storybook/addon-centered/ember";


storiesOf("static component", module)
  .addDecorator(Centered)
  .add(
    "alert badge",
    () => {
      return {
        template: hbs`{{bourbon-alert-badge message="This feature isn't available on your current plan." }}`,
        context: { onClick: e => console.log(e) }
      };
    },
    { notes: "A very simple component." }
  )
  .add("demo prompt", () => {
    return {
      template: hbs`{{bourbon-demo-prompt header="Need help? Schedule a demo." message="We would be happy to demo the setup and functionality for you. Tap the button to the right to schedule a demo." buttonTitle="Schedule a demo"}}`,
      context: { onClick: e => console.log(e) }
    };
  });


storiesOf("buttons", module)
  .addDecorator(Centered)
  .addDecorator(
    withBackgrounds([
      { name: "white", value: "#FFF" },
      { name: "slate", value: "#474C4F" }
    ])
  )

  .add("primary button", () => {
    return {
      template: hbs`{{bourbon-button class='BourbonButton--primary' title='primary button'}}`,
      context: { onClick: e => console.log(e) }
    };
  })

  .add("secondary button", () => {
    return {
      template: hbs`{{bourbon-button class='BourbonButton--secondary' title='secondary button'}}`
    };
  })

  .add("delete button", () => {
    return {
      template: hbs`{{bourbon-button class='BourbonButton--delete' title='delete button'}}`
    };
  })

  .add("icon button", () => {
    return {
      template: hbs`{{bourbon-button icon='edit-button'}}`
    };
  });
