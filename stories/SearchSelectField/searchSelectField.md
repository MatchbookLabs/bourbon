
# search select field component

&nbsp;

### Example of usage in bourbon
```
{{bourbon-search-select-field content=petsArray prompt="Select an animal..." value="Select an animal..."}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| classNames | string | BourbonSearchSelectField | false | can modify styles and spacing for the search select field ||
| fullWidth | boolean | false| false| add 100% width for search select field||
| groupedContent | boolean | false | false | if you want to included groupedOpt in select field ||
| content | array | null | true | list of content to be displayed in select field ||
| value | object or string | null | false | add if want to show default value on load||
| disabled | boolean | false | false | add if want to show the search select field but not allow interaction with it||
| prompt | string | null | false | if you want a placehoder prompt to guide user| for example, "Select a Salesforce object..."|
| target | class | this | false | if you want change/pass in the context of the search select field ||
| optionLabelPath | string | null | false | passed in when value passed in is an object as to indicate where the label is defined within the value object ||
| optionValuePath | string | null | false | passed in when value passed in is an object as to indicate where the value is defined within the value object ||
| optionEnabledPath | string | null | false | passed in when value passed in is an object as to indicate where the enabled is defined within the value object ||


### Example of usage in Flabongo
```
  = bourbon-search-select-field [
    classNames="btw-w-1/2"
    content=accordionContext.mappableObjects
    optionLabelPath="content.label"
    prompt="Select a Salesforce object..."
    value=accordionContext.selectedObject
    target=accordionContext
    mixpanelEventDesc="Salesforce object to map to"
  ]
```
