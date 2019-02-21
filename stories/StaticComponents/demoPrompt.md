
# demo prompt component

&nbsp;

### Example of usage in bourbon
```
  {{bourbon-demo-prompt
    header="Need help? Schedule a demo."
    message="We would be happy to demo the setup and functionality for you. Tap the button to the right to schedule a demo."
    buttonTitle="Schedule a demo" buttonAction=onClick}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| header | string | null | true | prompt header||
| message | string | null| true| text inside the prompt||
| buttonTitle | string | null| true| text in button ||
| buttonAction | function | null | true | the action to happen when clicking the button||
