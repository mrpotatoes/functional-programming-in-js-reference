import chai, { expect } from 'chai'
import { sumType, defineProducts } from './tagged-sum-2'

chai.should()

const mockFn1 = (one) => 'mockFn1'
const mockFn2 = (one, two) => 'mockFn2'
const mockFn3 = (one, two, three) => 'mockFn3'

const customFailure = (_) => {
  throw new TypeError('Custom error')
}

describe('./tagged-sum-2 -> arguments.length as discriminator', () => {
  describe('defineProducts()', () => {
    it('argument lengths are correct', () => {
      const prods = defineProducts([mockFn1, mockFn2, mockFn3])

      // The argument length is the key for each (as a string of course).
      expect(Object.keys(prods)[0]).to.equal('1')
      expect(Object.keys(prods)[1]).to.equal('2')
      expect(Object.keys(prods)[2]).to.equal('3')
    })

    it('argument lengths are correct', () => {
      // The passed in array's order doens't matter.
      const prods = defineProducts([mockFn2, mockFn3, mockFn1])

      // The argument length is the key for each (as a string of course).
      expect(Object.keys(prods)[0]).to.equal('1')
      expect(Object.keys(prods)[1]).to.equal('2')
      expect(Object.keys(prods)[2]).to.equal('3')
    })
  })

  describe('sumType()', () => {
    it('object returned is what is expected', () => {
      const taggedSum = sumType([mockFn2, mockFn3, mockFn1])
      taggedSum.should.be.a('function')
    })

    it('one parameter', () => {
      const taggedSum = sumType([mockFn2, mockFn3, mockFn1])

      const deets = taggedSum(1)
      expect(deets).to.equal('mockFn1')
    })

    it('two parameters', () => {
      const taggedSum = sumType([mockFn2, mockFn3, mockFn1])

      const deets = taggedSum(1, 2)
      expect(deets).to.equal('mockFn2')
    })

    it('three parameters', () => {
      const taggedSum = sumType([mockFn2, mockFn3, mockFn1])

      const deets = taggedSum(1, 2, 'three')
      expect(deets).to.equal('mockFn3')
    })

    it('default failure state too many params', () => {
      const taggedSum = sumType([mockFn1])
      expect(() => taggedSum(1, 2, 'three', 4)).to.throw(TypeError)
    })

    it('default failure state too many params', () => {
      const taggedSum = sumType([mockFn1])
      expect(() => taggedSum()).to.throw(TypeError)
    })

    it('custom failure state too many params', () => {
      const taggedSum = sumType([mockFn1], customFailure)
      expect(() => taggedSum(1, 2, 'three', 4)).to.throw(TypeError)
    })

    it('custom failure state too many params', () => {
      const taggedSum = sumType([mockFn1], customFailure)
      expect(() => taggedSum()).to.throw(TypeError)
    })
  })
})
