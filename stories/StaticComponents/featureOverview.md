
# feature overview component

&nbsp;

### Example of usage in bourbon
```

  {{bourbon-feature-overview
    svg="messaging"
    header="Salesforce Messaging"
    message="GetFeedback for Salesforce Chat lets you seamlessly transition your customers to a survey at the end of a chat session, so you can easily collect real-time, contextual feedback to improve your customer experience."
    buttonOneLinkTo="#"
    buttonOneTitle="Setup guide"
    buttonOneIcon="new-tab" }},

```
&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| svg | string | null | true | the main image showing in the component ||
| header | string | null | true | header in feature overview ||
| message | string | null| true| text inside the feature overview||
| buttonOneLinkTo | string | null | true | an external link ||
| buttonOneTitle | string | null| true| button one title ||
| buttonOneType | string | primary | false | can switch types being displayed |changed to 'secondary' or 'delete'|
| openButtonOneLinkInNewTab | boolean | false | false | if you want an external link to open into a new tab ||
| buttonOneIcon | string | null | false | add if you want an icon button ||
| buttonTwoTitle | string | null | true | an external link ||
| buttonTwoAction | string | null| true| button one title ||
| buttonTwoType | string | primary | false | can switch types being displayed |changed to 'secondary' or 'delete'|
| buttonTwoIcon | string | null | false | add if you want an icon button ||
| openButtonTwoLinkInNewTab | boolean | false | false | if you want an external link to open into a new tab ||
