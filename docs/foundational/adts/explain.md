# Algebraic Data Types
This is the most important place to start if you're going to learn functional programming. If you're anything like me then you most likely started somewhere higher up like `lenses`, `functors` or for me `monads` (I desperatly wanted to get rid of `if` statements and exception handling). Thing is that you gotta start somewhere if you want things to make sense. So why not start with the idea that envelopes everything? Yeah, algebraic data types is that thing.

A lot of the primary patterns that we'd use are ADTs and the `Fantasy Land` spec defines them all simply (defines but doesn't explain or the uses).

This whole section will be going over all the algebraic data types in the `Fantasy Land` spec. Hopefully it's in an order where it compounds and makes sense. A lot o the information was learned from [Tom Harding's](http://www.tomharding.me/fantasy-land/) explanations. But, because I'm not just a copy and paste artisté and I'm always going down further and further holes I've also amassed a trasure trove of links, videos and knowledge that I hope can help others. So while I'll sum up a lot of what Tom Harding said, and in his order, I'll be adding lots of extra information. _I also hope that I can fill in the spots that are missing information that I had to look up while reading his suite of articles._

?> I learned this information from many places but most of what I learned about ADTs are from the article "[The difference between union and sum types](https://waleedkhan.name/blog/union-vs-sum-types/)".

# Preamble
I want to quickly introduce ADTs. We'll talk `Sum Type` & `Product Type` in JavaScript. Then talk math and much more substantive detail. If I can muster than I'll put together something more theoretical (if I understand it correctly) in a different page.

Essentialy the first way you'll see this is a `switch` statement. You could also use an `Object`, preferred, and then we'll look at how you get so much more than just a switch statement.

# Quickstart
We use ADTs for safe type checking (TypeScript would be ::chef's kiss:: beautiful here) and **null tracking**. There are two different ways of doing this<sup>2</sup>. 

1. Using `union types` (AND), which itself uses type refinement<sup>11</sup> to extract the non-null value.
1. Using `sum types` (X/OR), which uses pattern matching to extract the non-null value.

For the sake of simplicity you can view `union types` as imperative code (constant `if` checks) vs `sum types` as functional where it handles behavior in a polomorphic way and is, quite frankly, simpler to use.

For mor information please read my overview of [Sums, Products, etc](foundational/adts/sums-products) to get a better, deeper grasp of Sums and Products. For the most part either approach will handle type safety but there are additional benefits to using a `sum type` (`algebraic type`).

!> Ignore everything between here and **Bibliography** for now

```js
// Assume F(x) only takes integers.
const foo = (bar) => {
	// Refinement 1
  if (bar === 1) {}

  // Refinement 2
  else if (bar === 2) { }

  // Refinement 3
  else if (bar === 3) { }

  // Refinement 4
  else { }
}
```

This is how a union type does it. Sum types do the same thing but handle a couple more cases, do it with "Product Types" and 

<!--
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
-->

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

lol

<hr />

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
1. Kyle, Jamie, _[Type Systems: Refinements explained](https://medium.com/@thejameskyle/type-systems-refinements-explained-26f713c6cc2a)_, (2016)

#### ** More information **

1. [Functional Mumbo Jumbo - ADTs](http://blog.jenkster.com/2016/06/functional-mumbo-jumbo-adts.html)
  - Explains sum types
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
1. Kyle, Jamie, _[Type Systems: Refinements explained](https://medium.com/@thejameskyle/type-systems-refinements-explained-26f713c6cc2a)_, (2016)
  - Used to get a better understanding of type refinement.

<!-- #### ** Sundries ** -->

<!-- tabs:end -->
