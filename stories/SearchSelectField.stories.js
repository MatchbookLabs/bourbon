import { A } from "@ember/array";
import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import { action } from "@storybook/addon-actions";

storiesOf("search select field", module)
  .add("array search select field", () => {
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
  })
  .add("object search select field", () => {
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
  });
