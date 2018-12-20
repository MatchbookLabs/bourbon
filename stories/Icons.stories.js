import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf("icons", module)
  .add("edit button", () => {
    return { template: hbs`{{partial 'bourbon-edit-button-svg'}}` };
  })
  .add("close button", () => {
    return { template: hbs`{{partial 'bourbon-close-button-svg'}}` };
  })
  .add("new tab", () => {
    return { template: hbs`{{partial 'bourbon-new-tab-svg'}}` };
  })
  .add("loading", () => {
    return { template: hbs`{{partial 'bourbon-loading-svg'}}` };
  })
  .add("search to close", () => {
    return { template: hbs`{{partial 'bourbon-search-to-close-svg'}}` };
  })
  .add("upgrade badge", () => {
    return { template: hbs`
    {{bourbon-svg--upgrade-badge size='large' color='fern'}}
    {{bourbon-svg--upgrade-badge}}
    {{bourbon-svg--upgrade-badge size='small' color='fern'}}`
    };
  },
  { notes: `
    {{bourbon-svg--upgrade-badge}}

    <h4>SVG options</h4>
    <ul>
    <li>size: options are 'small' 18px, 'medium' 24px, 'large' 36px (optional), default is medium</li>
    <li>color: default is black (optional)</li>
    </ul>`
  })
  .add("messaging", () => {
    return { template: hbs`{{partial 'bourbon-messaging-svg'}}` };
  });
