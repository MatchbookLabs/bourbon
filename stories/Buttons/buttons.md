
# button component

- The primary button is used in most situations to indicate the primary action.
- All titles should be entered in sentence case.

&nbsp;

### Example of usage
```
{{bourbon-button class='BourbonButton--primary' title='Primary button' action=onClick}}
```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| title | string | null | true | button title ||
| class | string| BourbonButton | true | modifies button type| BourbonButton--primary, BourbonButton--secondary, BourbonButton--disabled, BourbonButton--rounded |
| fullWidth | boolean | false| false| add 100% width for button||
| icon | string | null| false| if you wanted an icon button ||
| action | function | null | true | the action to happen when clicking the button||
| linkTo | string | null | false | if you want to open an external link ||
| openLinkInNewTab | boolean | false | false | if you want an external link to open into a new tab ||

- The attributes that can be added to the button currently include the following:

| availableAttributes |
|----------|
| aria-label |
| tabindex |
| data-role |
| target |
| data-hint |
