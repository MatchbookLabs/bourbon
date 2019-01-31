# tooltip component

- this tooltip is based off the [ember-tooltips library](https://github.com/sir-dunxalot/ember-tooltips)
&nbsp;

### Example of usage in bourbon
```
  {{bourbon-button title='Hover me' class='BourbonButton--primary' action=onClick}}
  {{bourbon-tooltip text='hover text'}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| text | string | null | true | text or component/partial required to show inside the tooltip||
| component/partial |  | null | true | text or component/partial required to show inside the tooltip||
| event | string | hover | false | The event that the tooltip will hide and show for | options: 'hover', 'click'|
| showOn | string | 'none' | false | To be used when there is another JS click event in addition to the tooltip.  Sets the event that the tooltip will show on. This overwrites any event set with the event option | options: 'hover', 'click'|
| background | string | slate | false | switching the background color of the tooltip | options: slate, white, transparent|
| side | string | 'top' | false | Sets the side the tooltip will render on. | options: 'top', 'right', 'bottom', 'left' |
| spacing | number  | 10 | false | Sets the number of pixels the tooltip will render from the target element. A higher number will move the tooltip further from the target. |  This can be any number. |
