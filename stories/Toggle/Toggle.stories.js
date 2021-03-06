import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";
import toggle from './toggle.md';

storiesOf("toggle", module)
  .add(
    "toggle on",
    () => {
      return {
        template: hbs`{{bourbon-toggle value=true action=onClick}}`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "toggle on disabled",
    () => {
      return {
        template: hbs`{{bourbon-toggle value=true action=onClick disabled=true}}`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "margarita toggle on",
    () => {
      return {
        template: hbs`
          <div class="using-new-app">
            {{bourbon-toggle value=true action=onClick}}
          </div>`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "margarita toggle on disabled",
    () => {
      return {
        template: hbs`
        <div class="using-new-app">
          {{bourbon-toggle value=true action=onClick disabled=true}}
        </div>`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "small margarita toggle on",
    () => {
      return {
        template: hbs`
          <div class="using-new-app">
            {{bourbon-toggle value=true action=onClick small=true}}
          </div>`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "small margarita toggle on disabled",
    () => {
      return {
        template: hbs`
        <div class="using-new-app">
          {{bourbon-toggle value=true action=onClick small=true disabled=true}}
        </div>`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "margarita toggle off",
    () => {
      return {
        template: hbs`
        <div class="using-new-app">
          {{bourbon-toggle value=false action=onClick}}
        </div>`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "toggle off",
    () => {
      return {
        template: hbs`{{bourbon-toggle value=false action=onClick}}`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  )
  .add(
    "toggle off disabled",
    () => {
      return {
        template: hbs`{{bourbon-toggle value=false action=onClick disabled=true}}`,
        context: {
          onClick: "click"
        }
      };
    },
    {
      notes: { markdown: toggle }
    }
  );
