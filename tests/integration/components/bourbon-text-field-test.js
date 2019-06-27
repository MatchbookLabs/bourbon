import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bourbon-text-field', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bourbon-text-field}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it is disabled', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{bourbon-text-field disabled=true}}`);

    assert.equal(this.element.children[0].innerHTML.trim(), '<label class="BourbonTextField-label"></label>\n<input id="ember412" disabled="" class="BourbonTextField-input ember-text-field ember-view" type="text">');
  });
});
