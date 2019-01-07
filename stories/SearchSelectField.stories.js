import { A } from "@ember/array";
import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";

storiesOf("search select field", module)
  .add(
    "array search select field",
    () => {
      return {
        template: hbs`{{bourbon-search-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}`,
        context: {
          onClick: action("searchSelectFieldClick"),
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
        </ul>

        <div>An example you find for usage in Flabongo.</div>
          = bourbon-search-select-field [
            classNames="btw-w-1/2"
            content=accordionContext.mappableObjects
            optionLabelPath="content.label"
            prompt="Select a Salesforce object..."
            value=accordionContext.selectedObject
            target=accordionContext
            mixpanelEventDesc="Salesforce object to map to"
          ]
      `
    }
  )
  .add(
    "object search select field",
    () => {
      return {
        template: hbs`{{bourbon-search-select-field content=petObject prompt="Select your favorite dog..." optionLabelPath="content.label" optionValuePath="content.value" value=null}}`,
        context: {
          onClick: action("searchSelectFieldClick"),
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
        </ul>

        <div>An example you find for usage in Flabongo.</div>
          = bourbon-search-select-field [
            classNames="btw-w-1/2"
            content=accordionContext.mappableObjects
            optionLabelPath="content.label"
            prompt="Select a Salesforce object..."
            value=accordionContext.selectedObject
            target=accordionContext
            mixpanelEventDesc="Salesforce object to map to"
          ]
    `
    }
  );
