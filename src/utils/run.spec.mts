import assert from 'node:assert'
import { describe, it } from 'node:test'

import { run } from './run.mjs'

await describe('run', async () => {
  await it('should be a function', () =>
    assert.strictEqual(typeof run, 'function'))
})
