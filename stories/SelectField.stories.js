import { A } from "@ember/array";
import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";

storiesOf("select field", module)
  .add(
    "array select field",
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}`,
        context: {
          onClick: action("selectFieldClick"),
          petsArray: A([
            "cats",
            "dogs",
            "rabbits",
            "bears",
            "beaver",
            "moose",
            "goose",
            "deer",
            "kitten",
            "puppy",
            "duck",
            "capybara"
          ])
        }
      };
    },
    {
      notes: `
        This select field behaves just like the one in Flabongo.

        <h4>Select field possible params</h4>
        <ul>
          <li>classNames</li>
          <li>fullWidth: boolean true or false (default)</li>
          <li>content: can be an array or an object</li>
          <li>optionLabelPath: needed if you are passing in an array of objects</li>
          <li>optionValuePath: needed if you are passing in an array of objects</li>
          <li>value: selected value</li>
          <li>prompt: text you want as a prompt before the list for the selections</li>
          <li>target</li>
          <li>action</li>
        </ul>

        <div class="FreestyleUsage-rendered">An example you find for usage in Flabongo.</div>
              = bourbon-select-field
                content=mappingTypes
                optionLabelPath="content.label"
                optionValuePath="content.value"
                value=mappingType
                prompt="Select an action..."
                target=this
                fullWidth=true
      `
    }
  )
  .add(
    "object select field",
    () => {
      return {
        template: hbs`{{bourbon-select-field content=petObject prompt="Select your favorite dog..." optionLabelPath="content.label" optionValuePath="content.value" fullWidth=true}}`,
        context: {
          onClick: action("selectFieldClick"),
          petObject: A([
            {
              label: "Chompsky the only Brussels Griffon",
              value: "the only Brussels Griffon"
            },
            {
              label: "Memphis the other Brussels Griffon",
              value: "the other Brussels Griffon"
            },
            {
              label: "Macho the Frenchie who is so Frenchie",
              value: "Frenchie"
            }
          ])
        }
      };
    },
    {
      notes: `
        This select field behaves just like the one in Flabongo.

        <h4>Select field possible params</h4>
        <ul>
          <li>classNames</li>
          <li>fullWidth: boolean true or false (default)</li>
          <li>content: can be an array or an object</li>
          <li>optionLabelPath: needed if you are passing in an array of objects</li>
          <li>optionValuePath: needed if you are passing in an array of objects</li>
          <li>value: selected value</li>
          <li>prompt: text you want as a prompt before the list for the selections</li>
          <li>target</li>
          <li>action</li>
        </ul>

        <div class="FreestyleUsage-rendered">An example you find for usage in Flabongo.</div>
              = bourbon-select-field
                content=mappingTypes
                optionLabelPath="content.label"
                optionValuePath="content.value"
                value=mappingType
                prompt="Select an action..."
                target=this
                fullWidth=true
      `
    }
  );
