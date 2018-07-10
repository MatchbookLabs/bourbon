import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bourbon-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{bourbon-button title="hello world" class="bourbon-secondary-button"}}
    `);

    assert.equal(this.element.textContent.trim(), 'hello world');
  });
});
