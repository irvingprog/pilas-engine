
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:plus', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', '2');
    await render(hbs`{{plus inputValue}}`);
    assert.equal(find('*').textContent.trim(), '3');
  });
});
