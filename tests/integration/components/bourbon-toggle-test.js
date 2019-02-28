import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bourbon-toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders on toggle', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bourbon-toggle value=true}}`);

    assert.equal(this.element.textContent.replace(/\s+/g, '').trim(), 'ON');
  });

  test('it renders off toggle', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bourbon-toggle value=false}}`);

    assert.equal(this.element.textContent.replace(/\s+/g, '').trim(), 'OFF');
  });
});
