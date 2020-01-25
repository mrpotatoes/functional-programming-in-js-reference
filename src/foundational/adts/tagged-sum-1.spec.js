import chai, { expect } from 'chai'
import union from './tagged-sum-1'

chai.should()

describe('./tagged-sum-1 -> string as discriminator', () => {
  describe('union()', () => {
    it('foo.match works as intended', () => {
      const foobah = union(['foo', 'bar'])

      const foo = foobah.foo('do the foo thing')
      const bar = foobah.bar('now do the bar thing')

      const toBeFoo = foo.match({
        foo: (text) => text,
        bar: (text) => text,
      })

      expect(toBeFoo).to.equal('do the foo thing')
    })

    it('foo.match works as intended', () => {
      const foobah = union(['foo', 'bar'])

      const foo = foobah.foo('do the foo thing')
      const bar = foobah.bar('now do the bar thing')

      const toBeBar = bar.match({
        foo: (text) => text,
        bar: (text) => text,
      })

      expect(toBeBar).to.equal('now do the bar thing')
    })
  })
})

