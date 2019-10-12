/* eslint-disable */
import chai from 'chai'
import diydaggy from './diy.daggy'

chai.should()

const Option = diydaggy.taggedSum('Option', {
  Some: ['x'],
  None: [],
})

Option.prototype.map = (f) => (
  this.cata({
    Some: (x) => Option.Some(f(x)),
    None: () => this,
  })
)

describe('Level 1', () => {
  describe('Level 2', () => {
    it('Tagged elements', (done) => {
      const Point3D = diydaggy.tagged('Point3D', ['x', 'y', 'z'])
      const Point3D2 = Point3D

      // Point3D.prototype.scale = (n) => (Point3D(this.x * n, this.y * n, this.z * n))

      var t = new Point3D
      Point3D.is('asd')

      console.log(Point3D)

      // Point3D should be a type of Point3D
      // Point3D2.is(Point3D).should.equal(true)
      // Point3D.is(Point3D)

      // const b = a.scale(2)
      // const a = Point3D(1, 2, 3)

      // console.log(Point3D.toString()) // 'Point3D'
      // console.log(a) // { x: 1, y: 2, z: 3 }
      // console.log(a.x == 1 && a.y == 2 && a.z == 3) // true
      // console.log(a.toString()) // 'Point3D(1,2,3)'

      // console.log(Point3D.is(a)) // true

      // console.log(b) // { x: 2, y: 4, z: 6 }
      // console.log(b.toString()) // 'Point3D(2, 4, 6)'
      done()
    })

    it.skip('should run right?', () => {
      const c = Option.Some(1)
      console.log(c) // { x: 1 }
      console.log(c.toString()) // 'Option.Some(1)'
      console.log(Option.Some.is(c)) // true
      console.log(Option.is(c)) // true
      console.log(Option.None.is(Option.None)) // true
      console.log(Option.is(Option.None)) // true
      console.log(Option.None.toString()) // 'Option.None'
      console.log(Option.Some.toString()) // 'Option.Some'

      const d = c.map(x => x + 1)
      console.log(d) // { x: 2 }
      console.log(d.toString()) // 'Option.Some(2)'
    })
  })
})
