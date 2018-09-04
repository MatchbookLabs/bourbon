import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bourbon-tooltip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#bourbon-tooltip text='text'}}
        tooltip text
      {{/bourbon-tooltip}}
      `);

    assert.equal(this.element.classList[1], 'ember-tooltip-or-popover-target');
  });
});
