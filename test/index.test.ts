import { describe, it, expect } from 'vitest'
import { add } from '../src'

describe('Add', () => {
  it('equal', () => {
    expect(add(1, 1)).toEqual(2)
  })
})
