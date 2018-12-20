import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";

storiesOf("tooltip", module)
  .add("tooltip default", () => {
    return {
      template: hbs`
        {{bourbon-button title='Hover me' class='BourbonButton--primary' action=onClick}}
        {{bourbon-tooltip text='hover text'}}`,
      context: { onClick: action("tooltip") }
    };
  })

  .add("white tooltip", () => {
    return {
      template: hbs`
        {{bourbon-button title='white tooltip' class='BourbonButton--primary' action=onClick}}
        {{#bourbon-tooltip background='light'}}
          I am a white tooltip
        {{/bourbon-tooltip}}`,
      context: { onClick: action("tooltip") }
    };
  });
