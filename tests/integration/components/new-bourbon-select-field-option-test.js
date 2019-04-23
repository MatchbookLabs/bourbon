import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | new-bourbon-select-field-option', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('label', 'cats')
    await render(
      hbs`{{new-bourbon-select-field-option label=label}}`
    );

    assert.equal(this.element.textContent.trim(), 'cats');
  });
});
