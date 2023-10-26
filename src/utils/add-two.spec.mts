import assert from 'node:assert'
import test from 'node:test'

import { addTwo } from './add-two.mjs'

await test('addTwo', async (t) => {
  await t.test('1 + 2 = 3', () => {
    assert.strictEqual(addTwo(1), 3)
  })

  await t.test('12 + 2 = 14', () => {
    assert.strictEqual(addTwo(12), 14)
  })
})
