import { A } from '@ember/array';
import EmberObject from '@ember/object';

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | new-bourbon-select-field', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('content', A([
      EmberObject.create({
        label: 'Chompsky the only Brussels Griffon',
        value: 'the only Brussels Griffon'
      }),
      EmberObject.create({
        label: 'Memphis the other Brussels Griffon',
        value: 'the other Brussels Griffon'
      }),
      EmberObject.create({
        label: 'Macho the Frenchie who is so Frenchie',
        value: 'Frenchie'
      })
    ]))

    await render(hbs`
      {{new-bourbon-select-field content=content prompt="Select a dog" value=null}}
    `);

    assert.equal(
      this.$('.BourbonSelectField-selected').text(),
      'Select a dog'
    );

    // TODO fix test.  not sure why this is broken now
    // await click('.NewBourbonSelectField');
    // await click('.NewBourbonSelectField-option');

    // assert.equal(
    //   this.$('.BourbonSelectField-selected')
    //     .text(),
    //   'Chompsky the only Brussels Griffon'
    // );
  });

});
