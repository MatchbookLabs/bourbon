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
| label | string | computed | true | a computed property to provide aria-label describing state of toggle | |
| toggleState | string | null | true | computed on init and determines the SVG to be displayed ||
| disabled | boolean | false | false | determines the disabled display state of the toggle||
| action | function | null | no  | the action to be taken upon click of the toggle ||
