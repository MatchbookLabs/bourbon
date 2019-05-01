
# text field component

&nbsp;

### Example of usage in bourbon
```
{{bourbon-text-field placeholder="i am the placeholder" onFocusOutOrEnter=onClick}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| classNames | string | BourbonSearchSelectField | false | can modify styles and spacing for the search select field ||
| value | object or string | null | false | add if want to show default value on load||
| placeholder | string | null | false | if you want a placehoder prompt to guide user| for example, "Select a Salesforce object..."|
| noLabel | boolean | false | false | if you don't want to show label pass true ||
| autofocus | boolean | false | false | if you want the text field focused on load ||
| isFocused | boolean | false | false | if you want the text field is focused ||
| actionOnFocusIn | function | "" | false | action to be taken when focused into the text field ||
| actionOnFocusOut | function | "" | false | action to be taken when focused out of the text field ||
| actionOnEnter | function | "" | false | action to be taken when pressing enter in the text field ||
| onFocusOutOrEnter | function | "" | false | action to be taken when focused out of or when pressing enter in the text field ||
