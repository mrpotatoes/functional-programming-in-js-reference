/* eslint-disable */
import chai, { expect } from 'chai'
import daggy from 'daggy'

chai.should()

//- A coordinate in 3D space.
//+ Coord :: (Int, Int, Int) -> Coord
const Coord = daggy.tagged('Coord', ['x', 'y', 'z'])

//- A line between two coordinates.
//+ Line :: (Coord, Coord) -> Line
const Line = daggy.tagged('Line', ['from', 'to'])

// We can add methods w/named properties.
Coord.prototype.translate = (x, y, z) => function (x, y, z) {
  return Coord(
    this.x + x,
    this.y + y,
    this.z + z
  )
}

describe('daggy.js', () => {
  describe('daggy.tagged()', () => {
    it('................................................................', (done) => {

      done()
    })
  })

  describe('daggy.taggedSum()', () => {
    it('................................................................', (done) => {
      const Shape = daggy.taggedSum('Shape', {
        // Square :: (Coord, Coord) -> Shape
        Square: ['topleft', 'bottomright'],

        // Circle :: (Coord, Number) -> Shape
        Circle: ['centre', 'radius']
      })

      Shape.prototype.translate = function (x, y, z) {
        return this.cata({
          Square: (topleft, bottomright) =>
            Shape.Square(
              topleft.translate(x, y, z),
              bottomright.translate(x, y, z)
            ),

          Circle: (centre, radius) =>
            Shape.Circle(
              centre.translate(x, y, z),
              radius
            )
        })
      }

      // Square(Coord(5, 5, 3), Coord(6, 6, 3))
      Shape.Square(Coord(2, 2, 0), Coord(3, 3, 0)).translate(3, 3, 3)

      // Circle(Coord(7, 7, 7), 8)
      Shape.Circle(Coord(1, 2, 3), 8).translate(6, 5, 4)

      done()
    })
  })
})
