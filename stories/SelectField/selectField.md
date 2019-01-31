
# select field component

&nbsp;

### Example of usage in bourbon
```
{{bourbon-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| classNames | string | BourbonSelectField | false | can modify styles and spacing for the select field ||
| fullWidth | boolean | false| false| add 100% width for select field||
| content | array | null | true | list of content to be displayed in select field ||
| value | object or string | null | false | add if want to show default value on load||
| selection | object or string | null | false | add if want to show default value on load||
| prompt | string | null | false | if you want a placehoder prompt to guide user| for example, "Select a Salesforce object..."|
| target | class | this | false | if you want change/pass in the context of the search select field ||
| optionLabelPath | string | null | false | passed in when value passed in is an object as to indicate where the label is defined within the value object ||
| optionValuePath | string | null | false | passed in when value passed in is an object as to indicate where the value is defined within the value object ||
| optionEnabledPath | string | null | false | passed in when value passed in is an object as to indicate where the enabled is defined within the value object ||

### Example of usage in Flabongo
```
  = bourbon-select-field [
    content=mappingTypes
    optionLabelPath="content.label"
    optionValuePath="content.value"
    value=mappingType
    prompt="Select an action..."
    target=this
    fullWidth=true
  ]
```
