# Custom Daggy
* https://creaturephil.github.io/posts/build-your-own-daggy/
* https://gist.github.com/CreaturePhil/b7f85d0bba14e942c5c7f81396833ee7

The advantages are accesses are safe versus using program logic to check the currently active field. Elm’s guide describes why the best:

> Many languages have trouble expressing data with weird shapes. They give you a small set of built-in types, and you have to represent everything with them. So you often find yourself using null or booleans or strings to encode details in a way that is quite error prone.


https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js#L19-L49

```js
describe('Level 1', () => {
  describe('Level 2', () => {
    it('Tagged elements', (done) => {
      const something = '';
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
```

<!-- <iframe width="100%" height="100%" src="https://temp.onlinetool.io/gitoembed/widget?url=https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js&theme=abap"  onload="resizeFrame(this);"></iframe> -->

<!-- <iframe width="100%" height="100%" src="https://temp.onlinetool.io/gitoembed/widget?url=https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js&theme=arduino"  onload="resizeFrame(this);"></iframe> -->

<!-- <iframe width="100%" height="100%" src="https://temp.onlinetool.io/gitoembed/widget?url=https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js&theme=emacs"  onload="resizeFrame(this);"></iframe> -->

<!-- <iframe width="100%" height="100%" src="https://temp.onlinetool.io/gitoembed/widget?url=https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js&theme=github"  onload="resizeFrame(this);"></iframe> -->

<!-- <iframe width="100%" height="100%" src="https://temp.onlinetool.io/gitoembed/widget?url=https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js&theme=lovelace"  onload="resizeFrame(this);"></iframe> -->


<iframe width="100%" height="100%" src="https://temp.onlinetool.io/gitoembed/widget?url=https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js&theme=pastie"  onload="resizeFrame(this);"></iframe>