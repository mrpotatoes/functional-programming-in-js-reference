# Algebraic Data Types
This is the most important place to start if you're going to learn functional programming. If you're anything like me then you most likely started somewhere higher up like `lenses`, `functors` or for me `monads` (I desperatly wanted to get rid of `if` statements and exception handling). Thing is that you gotta start somewhere so why not start with the idea that envelopes everything. Yeah, algebraic data types is that thing.

Errthing is an ADT! Well, in the `Fantasy Land` spec it is (correct me if I'm wrong). This whole section will be going over all the algebraic data types in the `Fantasy Land` spec in order. A lot o the information was learned from [Tom Harding's](http://www.tomharding.me/fantasy-land/) explanations. But, because I'm not just a copy and paste artisté and I'm always going down further and further holes I've also amassed a trasure trove of links, videos and knowledge that I hope can help others. So while I'll sum up a lot of what Tom Harding said, and in his order, I'll be adding lots of extra information. _I also hope that I can fill in the spots that are missing information that I had to look up while reading his suite of articles._

?> I learned this information from many places but most of it comes from: [The difference between union and sum types](https://waleedkhan.name/blog/union-vs-sum-types/).

# Preamble
I want to quickly introduce ADTs. We'll talk `Sum Type` & `Product Type` in JavaScript. Then talk math and much more substantive detail. If I can muster than I'll put together something more theoretical (if I understand it correctly) in a different page.

Essentialy the first way you'll see this is a `switch` statement. You could also use an `Object`, preferred, and then we'll look at how you get so much more than just a switch statement.

# Quickstart
## Terms & Things
### Product types
Product types are simple and we're all used to them. From a definition standpoint they are called `product types` becase "they're analogous to cartesian products of sets. For instance `int` * `float` is the tuple `(int, float)`".

So for instance this `Car` type is a `product`.
```js
const Car = {
  Brand: String,
  Model: String,
  Release: Date,
  Engine: EngineType,
}
```

### Sum Types
A `sum type` is a type that is exclusive-or. Meaning one **MUST** be true and the others **MUST** be false. Given the following Sum Type Only one can be true and the others are false. I'll defer to someone else's words to explain it better below but the following example shows it a little clearer.

```js
const PlayingCardSuit = {
  Heart, Spade, Club, Diamond,
}
```

### Abstract Data Type
> An algebraic data type is a kind of composite type, i.e., a type formed by combining other types - Wikipedia

## Plain Jane JS version
```js
const value = (tag) => {
  switch (tag) {
    case 'loading':
    	return 'Loading ...'
    case 'loaded':
      return 'loaded'
    case 'error':
    case 'exception':
      return 'whoopsie daisey'
    case 'null':
    case 'undefined':
    case 'empty':
      return 'Nothing to find I'm sorry
    default:
      return 'You should not have been able to get here'
  }
}
```

## How to use it

# Okay, let's get to serious business now ...
_SERIOUS BUSINESS_

<hr />

<!--
https://dev.to/gcanti/functional-design-algebraic-data-types-36kf
https://chadaustin.me/2015/07/sum-types/
https://mariusschulz.com/blog/tagged-union-types-in-typescript
https://www.fewbutripe.com/swift/math/algebra/2015/02/17/algebraic-structure-and-protocols.html
https://creaturephil.github.io/posts/build-your-own-daggy/
https://medium.com/fullstack-academy/better-js-cases-with-sum-types-92876e48fd9f
https://dev.to/moosch/sum-types-in-javascript-15il
https://datarockets.com/blog/javascript-pattern-matching-library-daggy/
https://dev.to/avalander/union-types-with-javascript-4emo
https://marmelab.com/blog/2018/03/14/functional-programming-1-unit-of-code.html
https://jaysoo.ca/2016/01/13/functional-programming-little-ideas/

MATH EXPLAINATIONS
https://whatis.techtarget.com/definition/union-symbol
https://whatis.techtarget.com/definition/intersection-symbol
-->

<!-- tabs:start -->

#### ** Bibliography **

1. Jenkins, Kris, _[Functional Mumbo Jumbo - ADTs](http://blog.jenkster.com/2016/06/functional-mumbo-jumbo-adts.html)_, (2016)
1. Austin, Chad, _[Sum Types Are Coming: What You Should Know](https://chadaustin.me/2015/07/sum-types/)_, (2015)
1. Khan, Waleed, _[Null-tracking, or the difference between union and sum types](https://waleedkhan.name/blog/union-vs-sum-types/)_, (2017)
1. Whitlie, Ryan, _[Sum Types in JavaScript](https://dev.to/moosch/sum-types-in-javascript-15il)_, (2019)
1. Folktale, _[FolkTale: Union type docs](https://folktale.origamitower.com/api/v2.1.0/en/folktale.adt.union.union.union.html)_, (2013)
1. Hemanth, _[Functionl Programming Jargon](https://github.com/hemanth/functional-programming-jargon#algebraic-data-type)_, (2017)
1. Burget, Joel, _[The algebra (and calculus!) of algebraic data types](https://codewords.recurse.com/issues/three/algebra-and-calculus-of-algebraic-data-types)_, (2015)
1. Wlaschin, Scott, _[Domain Modeling Made Functional - Scott Wlaschin](https://www.youtube.com/watch?v=Up7LcbGZFuo)_, (2017)
1. Bagdavadze, Giorgi, _[Algebraic Data Types explained in Statically typed Javascript](https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9)_, (2017)
1. Gonzalez, Gabriel, _[Sum Types](https://www.schoolofhaskell.com/school/to-infinity-and-beyond/pick-of-the-week/sum-types)_, (2013)

#### ** More information **

1. Functional Mumbo Jumbo - ADTs
  - asdasd
1. [Sum Types Are Coming: What You Should Know](https://chadaustin.me/2015/07/sum-types/)
  - Highly recommended read
  - Excellent theory
  - Goes into detail about sum types
1. [Null-tracking, or the difference between union and sum types](https://waleedkhan.name/blog/union-vs-sum-types/)
  - For theory.
  - Handling nulls and such.
1. [Sum Types in JavaScript](https://dev.to/moosch/sum-types-in-javascript-15il)
  - For showing how it works with a switch statement.
1. [FolkTale: Union type docs](https://folktale.origamitower.com/api/v2.1.0/en/folktale.adt.union.union.union.html)
  - For these titles:
    - Why use tagged unions?
    - Modelling data with adt/union
    - Providing common functionality
1. [Functionl Programming Jargon](https://github.com/hemanth/functional-programming-jargon#algebraic-data-type)
  - So many terms but not enough information.
1. [The algebra (and calculus!) of algebraic data types](https://codewords.recurse.com/issues/three/algebra-and-calculus-of-algebraic-data-types)
  - If I wanna try to be really smart
    - Prolly don't.
1. [Domain Modeling Made Functional - Scott Wlaschin](https://www.youtube.com/watch?v=Up7LcbGZFuo)
  - **NOTE**: Haven't watched just yet
1. [Algebraic Data Types explained in Statically typed Javascript](https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9)
  - Lots of theory
1. [Sum Types](https://www.schoolofhaskell.com/school/to-infinity-and-beyond/pick-of-the-week/sum-types)
  - A Haskell description

<!-- tabs:end -->
