import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";
import toggle from './toggle.md';

storiesOf("toggle", module)
  .add(
    "toggle default",
    () => {
      return {
        template: hbs`{{bourbon-toggle value="toggleOn" action=onClick}}`,
        context: {
          onClick: 'click',
        }
      };
    },
    {
      notes: {markdown: toggle}
    }
  );
