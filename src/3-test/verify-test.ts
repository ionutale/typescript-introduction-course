import * as test from './test'
import assert from 'assert'

assert.equal(test.sum(3,4), 7, 'expected 7 but got');
assert.equal(test.isEarthFlat('true'), false, 'expected false but got')
assert.equal(test.allowsSex('m'), 'm', 'expected m but got')