
# table component

&nbsp;

### Example of usage in bourbon
```
  {{bourbon-table headerContent=tableHeaderContent rowContent=tableRowContent}}
```

&nbsp;

## Properties
| propertyOptions | type | defaultValue | isRequired | description | options |
|----------|:----------|:--------------|:------------|:-------------|:------|
| headerContent | array | null | true | array of objects containing text for header each column of the table ||
| headerContent.content | string | null | true | text for header each column of the table ||
| headerContent.type | string | null | true | notes what format that is being passed in as content | options: 'component', 'string', 'partial |
| tableRowContent | array | null | true | array of objects containing text for header each column of the table ||
| tableRowContent.content | string or partial | null | true |  contents to show in each column of the table ||
| tableRowContent.content.component | string | null | true |  put string of component name  | ie. component: 'bourbon-button' |
| tableRowContent.content.optionsForComponent | string | null | true |  put string of component params  | these options are dependent on the component being used |
| tableRowContent.type | string | null | true | notes what format that is being passed in as content | options: 'component', 'string', 'partial |


### Example of the headerContent and rowContent being passed in.
```
tableHeaderContent: A([
      { content: 'name', type: 'string' },
      { content: 'object', type: 'string' },
      { content: 'action', type: 'string' },
      { content: '', type: 'string' }
    ]),
    tableRowContent: A([
      [
        { content: 'new contact activity', type: 'string' },
        { content: 'contact', type: 'string' },
        { content: 'create activity', type: 'string' },
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: 'BourbonButton--secondary'
          },
          type: 'component'
        }
      ],

      [
        { content: 'another mapping', type: 'string' },
        { content: 'create or update an existing', type: 'string' },
        { content: 'contact', type: 'string' },
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: 'BourbonButton--secondary'
          },
          type: 'component'
        }
      ],
      [
        { content: 'another another mapping', type: 'string' },
        { content: 'lead', type: 'string' },
        { content: 'update fields', type: 'string' },
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: 'BourbonButton--secondary'
          },
          type: 'component'
        }
      ],
      [
        { content: 'latest mapping', type: 'string' },
        { content: 'action link group template', type: 'string' },
        { content: 'update fields on an existing', type: 'string' },
        {
          content: {
            component: 'bourbon-button',
            title: 'Remove',
            classNames: 'BourbonButton--secondary'
          },
          type: 'component'
        }
      ]
    ])
  }

```
