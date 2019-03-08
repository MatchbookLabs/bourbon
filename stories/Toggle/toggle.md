# toggle component
&nbsp;

### Example of usage in bourbon
```
  {{bourbon-toggle state="toggleState"}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| value | boolean | null | true | determines if toggle is on or off ||
| title | string | null | false | pass in title to explain state of toggle | if nothing is passed then a generic title will be shown on hover|
| toggleState | string | null | true | computed on init and determines the SVG to be displayed ||
| disabled | boolean | false | false | determines the disabled display state of the toggle||
| action | function | null | no  | the action to be taken upon click of the toggle ||
| readOnly | boolean | false | false | determines if the user can interact with the toggle||
