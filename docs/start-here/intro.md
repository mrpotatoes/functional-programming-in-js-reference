# Algebraic Data Types
Errthing is an ADT! Well, in the `Fantasyland` spec it is (correct me if I'm wrong).

**Note**:
I learned this information from many places but most of it comes from: https://waleedkhan.name/blog/union-vs-sum-types/

# Preamble
I want to quickly introduce ADTs. We'll talk `Sum Type` & `Product Type` in JavaScript. Then talk math and much more substantive detail. If I can muster than I'll put together something more theoretical (if I understand it correctly) in a different page.

Essentialy the first way you'll see this is a `switch` statement. You could also use an `Object`, preferred, and then we'll look at how you get so much more than just a switch statement.

# Quickstart
## Terms & Things
### Sum & Product types
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

## What does it look like?
## How to use it

<!-- 

** Bibliography, or notes to self **

https://waleedkhan.name/blog/union-vs-sum-types/
	- For theory.
	- Handling nulls and such.

https://dev.to/moosch/sum-types-in-javascript-15il
	- For showing how it works with a switch statement.

https://folktale.origamitower.com/api/v2.1.0/en/folktale.adt.union.union.union.html
	- For these titles:
		- Why use tagged unions?
		- Modelling data with adt/union
		- Providing common functionality

https://github.com/hemanth/functional-programming-jargon#algebraic-data-type
	- So many terms but not enough information.

https://codewords.recurse.com/issues/three/algebra-and-calculus-of-algebraic-data-types
	- If I wanna try to be really smart
		- Prolly don't.

https://www.youtube.com/watch?v=Up7LcbGZFuo
	- Domain Modeling Made Functional - Scott Wlaschin

https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9
	- Lots of theory

https://www.schoolofhaskell.com/school/to-infinity-and-beyond/pick-of-the-week/sum-types
	- A Haskell description

-->
