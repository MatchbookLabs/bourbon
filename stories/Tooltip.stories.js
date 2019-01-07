import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";

storiesOf("tooltip", module)
  .add(
    "tooltip default",
    () => {
      return {
        template: hbs`
        {{bourbon-button title='Hover me' class='BourbonButton--primary' action=onClick}}
        {{bourbon-tooltip text='hover text'}}`,
        context: { onClick: action("tooltip") }
      };
    },
    {
      notes: `
      <h4>Tooltip Options</h4>
      <ul>
        <li>content: required
          <ul>
            <li>text: string</li>
            <li>component/partial</li>
          </ul>
        </li>
        <li>event: hover (default), click</li>
        <li>showOn: none (default), click.  To be used when there is another JS click event in addition to the tooltip.</li>
        <li>background: #474C4F aka slate (default), white, transparent</li>
        <li>side: top (default), right, bottom, left</li>
        <li>spacing (padding from the target element): 10 (default)</li>
      </ul>

      <br>
    `
    }
  )

  .add(
    "white tooltip",
    () => {
      return {
        template: hbs`
        {{bourbon-button title='white tooltip' class='BourbonButton--primary' action=onClick}}
        {{#bourbon-tooltip background='light'}}
          I am a white tooltip
        {{/bourbon-tooltip}}`,
        context: { onClick: action("tooltip") }
      };
    },
    {
      notes: `
      <h4>Tooltip Options</h4>
      <ul>
        <li>content: required
          <ul>
            <li>text: string</li>
            <li>component/partial</li>
          </ul>
        </li>
        <li>event: hover (default), click</li>
        <li>showOn: none (default), click.  To be used when there is another JS click event in addition to the tooltip.</li>
        <li>background: #474C4F aka slate (default), white, transparent</li>
        <li>side: top (default), right, bottom, left</li>
        <li>spacing (padding from the target element): 10 (default)</li>
      </ul>

      <br>
    `
    }
  );
