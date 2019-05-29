
# select field component

&nbsp;

### Example of usage in bourbon
```
{{new-bourbon-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| classNames | string | NewBourbonSelectField | false | can modify styles and spacing for the select field ||
| prompt | string | null | false | if you want a placehoder prompt to guide user| for example, "Select a Salesforce object..."|
| content | array | null | true | list of content to be displayed in select field | contents of array can be Ember.Object, JS Object, Ember model, numbers, strings|
| value | object or string | null | true | ||
| action | function | null | false | add if want to trigger an action on selection change||
| optionLabelPath | string | null | false | passed in when value passed in is an object as to indicate where the label is defined within the value object ||
| optionValuePath | string | null | false | passed in when value passed in is an object as to indicate where the value is defined within the value object ||
| optionEnabledPath | string | null | false | passed in when value passed in is an object as to indicate where the enabled is defined within the value object ||

### Example of usage in Flabongo
```
  = new-bourbon-select-field [
    classNames='SalesforceMapper-fieldMappings-selection'
    content=mappableRules
    optionLabelPath="content.label"
    optionValuePath="content.value"
    value=hasMappingRule
  ]
```
