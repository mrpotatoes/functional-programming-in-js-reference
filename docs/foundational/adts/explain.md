# Algebraic Data Types
Errthing is an ADT! Well, in the `Fantasyland` spec it is (correct me if I'm wrong). The foundation of everything is an ADT. 

**Note**:
I learned this information from many places but most of it comes from: https://waleedkhan.name/blog/union-vs-sum-types/

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

# More information
[Functional Mumbo Jumbo - ADTs](http://blog.jenkster.com/2016/06/functional-mumbo-jumbo-adts.html)

[Sum Types Are Coming: What You Should Know](https://chadaustin.me/2015/07/sum-types/)
  - Highly recommended read
  - Excellent theory
  - Goes into detail about sum types

[Null-tracking, or the difference between union and sum types](https://waleedkhan.name/blog/union-vs-sum-types/)
  - For theory.
  - Handling nulls and such.

[Sum Types in JavaScript](https://dev.to/moosch/sum-types-in-javascript-15il)
  - For showing how it works with a switch statement.

[FolkTale: Union type docs](https://folktale.origamitower.com/api/v2.1.0/en/folktale.adt.union.union.union.html)
  - For these titles:
    - Why use tagged unions?
    - Modelling data with adt/union
    - Providing common functionality

[Functionl Programming Jargon](https://github.com/hemanth/functional-programming-jargon#algebraic-data-type)
  - So many terms but not enough information.

[The algebra (and calculus!) of algebraic data types](https://codewords.recurse.com/issues/three/algebra-and-calculus-of-algebraic-data-types)
  - If I wanna try to be really smart
    - Prolly don't.

[Domain Modeling Made Functional - Scott Wlaschin](https://www.youtube.com/watch?v=Up7LcbGZFuo)
  - **NOTE**: Haven't watched just yet

[Algebraic Data Types explained in Statically typed Javascript](https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9)
  - Lots of theory

[Sum Types](https://www.schoolofhaskell.com/school/to-infinity-and-beyond/pick-of-the-week/sum-types)
  - A Haskell description