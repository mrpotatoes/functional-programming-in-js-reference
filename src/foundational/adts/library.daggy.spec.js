/* eslint-disable */
import chai, { expect } from 'chai'
import daggy from 'daggy'

chai.should()

const Maybe = daggy.taggedSum('Maybe', {
  Just: ['x'],
  Nothing: [],
})

const { Just } = Maybe

Maybe.of = (d) => d ? Maybe.Just(d) : Maybe.Nothing

Maybe.prototype.map = function (f) {
  return this.cata({
    Just: x => Maybe.Just(f(x)),
    Nothing: () => Maybe.Nothing,
  })
}

describe('daggy.js', () => {
  describe('Maybe.of(data)', () => {
    it('Contained data is what is expected', () => {
      const data = Maybe.of('data')
      expect(data.x).to.equal('data')
    })
  })

  describe('Maybe.of(null)', () => {
    describe('Maybe.of(null)', () => {
      it('Container is empty', () => {
        const data = Maybe.of(null)
        expect(data.is(Maybe.Nothing)).to.equal(true)
      })
    })

    describe('Maybe.of(undefined)', () => {
      it('Container is empty', () => {
        const data = Maybe.of(undefined)
        expect(data.is(Maybe.Nothing)).to.equal(true)
      })
    })

    describe('Maybe.of(false)', () => {
      it('Container is empty', () => {
        const data = Maybe.of(false)
        expect(data.is(Maybe.Nothing)).to.equal(true)
      })
    })

    describe('Maybe.of(\'\')', () => {
      it('Container is empty', () => {
        const data = Maybe.of('')
        expect(data.is(Maybe.Nothing)).to.equal(true)
      })
    })
  })
})
