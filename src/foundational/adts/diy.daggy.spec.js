/* eslint-disable */
import chai, { expect } from 'chai'
import diydaggy from './diy.daggy'

chai.should()

describe('diy.daggy.js', () => {
  describe('diydaggy.tagged', () => {
    it('Tagged elements', (done) => {
      const Point3D = diydaggy.tagged('Point3D', ['x', 'y', 'z'])
      const a = Point3D(1, 2, 3)

      Point3D.prototype.multiplyBy = function (n) {
        return Point3D(this.x * n, this.y * n, this.z * n)
      }

      const b = a.multiplyBy(2)

      expect(Point3D.toString()).to.equal('Point3D')
      expect(a.toString()).to.equal('Point3D(1,2,3)')
      expect(a.x).to.equal(1)
      expect(a.y).to.equal(2)
      expect(a.z).to.equal(3)
      expect(Point3D.is(a)).to.equal(true)
      expect(b.toString()).to.equal('Point3D(2,4,6)')

      done()
    })
  })

  describe('diydaggy.taggedSum', () => {
    it('Tagged elements', (done) => {
      const Option = diydaggy.taggedSum('Option', {
        Some: ['x'],
        None: [],
      })

      Option.prototype.map = function (f) {
        return this.cata({
          Some: (x) => Option.Some(f(x)),
          None: () => this,
        })
      }

      const some = Option.Some(1)
      const none = Option.None(null)

      expect(some.toString()).to.equal('Option.Some(1)')
      expect(none.toString()).to.equal('Option.None()')
      expect(Option.Some.is(some)).to.equal(true)
      expect(Option.is(some)).to.equal(true)
      expect(Option.None.is(Option.None)).to.equal(true)
      expect(Option.is(Option.None)).to.equal(true)
      expect(Option.None.toString()).to.equal('Option.None')
      expect(Option.Some.toString()).to.equal('Option.Some')

      const mapped = some.map(x => x + 1)

      expect(mapped.toString()).to.equal('Option.Some(2)')
      done()
    })
  })
})
