import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bourbon-toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders toggle', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bourbon-toggle value=false}}`);

    assert.equal(this.element.firstChild.classList[0], 'BourbonToggle');
    assert.equal(this.element.firstChild.tagName, 'LABEL');
  });
});
