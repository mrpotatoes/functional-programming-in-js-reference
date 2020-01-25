import chai, { expect } from 'chai'
const Union = require('tagged-union')

chai.should()

describe('./tagged-sum-3 -> api 1', () => {
  describe('Union-js()', () => {
    it('Define an ADT', () => {
      const Person = new Union(['Good', 'Bad'])
      expect(Object.keys(Person)[0]).to.equal('Good')
      expect(Object.keys(Person)[1]).to.equal('Bad')
    })
  })

  describe('Match function()', () => {
    const Person = new Union(['Good', 'Bad'])

    const punishment = (person) => (
      person.match({
        Good: (chocolate) => ('safe'),
        Bad: (one, two) => (`screwed but also ${one} & ${two}`),
        _: () => {
          throw new Error('We can\'t get here!')
        }
      })
    )

    it('Alice is punished', () => {
      const alice = Person.Good('lindt')
      expect(punishment(alice)).to.equal('safe')
    })

    it('bob is punished', () => {
      const bob = Person.Bad('burnt', 'broccoli')
      expect(punishment(bob)).to.equal('screwed but also burnt & broccoli')
    })
  })
})

