
# accordion component

&nbsp;

### Example of usage in bourbon
```
  {{#bourbon-accordion}}
    {{bourbon-accordion-item listItem=accordionItemOne}}
    {{bourbon-accordion-item listItem=accordionItemTwo}}
    {{bourbon-accordion-item listItem=accordionItemThree}}
  {{/bourbon-accordion}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| header | string | null | true | text for header of accordion item ||
| body | string | null| true| text for body of accordion item ||
| headerPartial | string | null | true | partial with header section ||
| bodyPartial | string | null| true| partial with body section||
| open | boolean | false| false| if you want accordion section opened on load ||
| toggleable | boolean | true | false | if to be able to toggle each section open/closed||
