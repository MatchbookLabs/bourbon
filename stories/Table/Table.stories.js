import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { A } from '@ember/array';

import table from './table.md';

storiesOf('table', module).add(
  'default table',
  () => {
    return {
      template: hbs`{{bourbon-table headerContent=tableHeaderContent rowContent=tableRowContent}}`,
      context: {
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
    };
  },
  {
    notes: { markdown: table }
  }
);
