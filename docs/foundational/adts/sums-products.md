# Sum & Product Types

<!-- https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9

This was something that threw me for awhile and I feel it's important to call it out so that everyone can understand. Whilst keeping the main article shorter ... -->

## Scalars
In math a scalar<sup>d</sup> is anything that can be represented with a real number. In JS/Programming it's similar but rather we'd call any primative a scalar. Anything with an atomic value. `Number`, `null`, `string` `boolean` are all atomic scalars. 

> Scalar type has an intrinsic size (a.k.a. cardinality), which is just the number of values inhabiting that type. <br />
> The `Null` type has a size of 1 as it contains only one value, `null`.
> The `Boolean` type has a size of 2 as it contains two values, `true` & `false`. <br />
> The `Number` type is of “infinite” size. <br />
> The `String`  type is of “infinite” size. <br />
>
> \- Better JS Cases with Sum Types<sup>3</sup>

## Products of Sets (AND)
`Product` means just what it means in math. Multiplication. Given this then `Products` of types represent a conjunction, an "`AND`,” of those types. In JavaScript you'll often see them as a record type<sup>c</sup> or better yet as an Object<sup>c</sup>. For instance a `Person` object is a cartesian product of the types of the types used to build the `Person` Object. 

```js
const Person = new Object({
  name: 'Chibuike Ade',
  honourific: 'lord',
  gender: GENDERS.FLUID,
  location: new Location(),
  birth: '01-01-1990',
  alive: true,
})
```

That was good up until one part, maybe, and you'd say:
> Wow, Andric, slow the fuck down. What does "cartesian product" mean?

I'm so stoked you asked!, I have mentioned that Product Types are an `AND` operation and the reason for that is because they are defined as a `cartesian product` meaning that it is a product (multiplcation) of two sets. For this example we'll provide the product of set<sup>a</sup> A and set B: $\in A \bigcup \in B$

Given these two sets:
<div style="text-align:center;">
  $\in A = \{\ 1, 2, 3\ \}$ <br />
  $\in B = \{\ \alpha, \beta\ \}$
</div>

The product (`∈A ∪ ∈B`) would be:
<div style="text-align:center;">
  $\in A \ \bigcup \in B = \{\ 1\alpha , 1\beta , 2\alpha , 2\beta , 3\alpha , 3\beta \ \}$
</div>

?> The cartesian product, `A × B` is the set of all possible ordered pairs (`α, β`)<sup>4</sup>

Okay, okay, okay, but how would that relate to my `Person` record above? I put it into a table with each scalar's cardinality. The person's product would be each cardinality multiplied together.

| Property | Type | Cardinality / Permutations |
|:---|:---|:---|
| name | `String` | ∞ |
| honourific | `String` | ∞ |
| gender | `GenderType` | 1 |
| location | `LocationType` | 1 |
| birth | `Date` | 1 |
| alive | `boolean` | 2 |

_**Note**: `GenderType` & `LocationType` are scalar because they can only have 1 value. `GenderType` or `LocationType` respectivly._

<div style="text-align:center;">
  So the product for the person type is infinity!

  $ \infin \times \infin \times 1 \times  1 \times 2 = \infin $
</div>

### Product Laws
The laws of `product`s and scalar multiplication are the same. Fancy that!

| Law | Proof |
|:---|:---|
| Symmetry | `a * b = b * a` |
| Associativity | `a * (b * c) = (a * b) * c` |
| Identity | `n * 1 = n` |

!> Now add some code in here to show it off.

## Sum of Sets (OR)
The intersection of a set denoted with the "upside-down U", $\bigcap$, means addition. The sum of a set is an `OR` operation. We put together two sets, remove any duplicates, and call it a day.

> A sum type indicates a value that is either X or Y or Z or \- Sum Types Are Coming: What You Should Know <sup>5</sup>

Given the two sets:
<div style="text-align:center;">
  $\in A = \{\ 1, 2, 3\ \}$ <br />
  $\in B = \{\ \alpha, \beta\ \}$
</div>

The intersection (`∈A $\bigcap$ ∈B`) would be:
<div style="text-align:center;">
  $\in A \ \bigcap \in B = \{\ 1, 2, 3, \alpha, \beta \ \}$
</div>

To repeat, it's important to note that a `sum` type is an "or" operation on sets so you'll get a composite like you would for a product type but the difference is that a sum will not be a grouping of all the types within. Meaning that any duplicates will not be added.

## Sum of Products
This is the important bit. Also it should be noted that this is going to HEAVILY borrow from _Better JS Cases with Sum Types<sup>3</sup>_. Also Gabriel's example is stellar so I'll just be going with it while adding meta data.

> “This overall operation is called disjoint union. Basically, it can be summarized as ‘a union, but each element remembers what set it came from’.” — Waleed Khan, Union vs Sum Types

In the following pseudocode we'll use type keyword to denote a new type.
```
// This is a scalar type
type Ghost = 'ghost'

// This is a product type (record)
type Character {
  afraidOfNoGhosts: Boolean,
  ghostbuster: Boolean
}

// This is the sum of products type.
sum type Entity = Ghost | Character
```

`Ghost` type

| Property | Type | Cardinality / Permutations |
|:---|:---|:---|
| Ghost | `String` | 1 |
|  |  | `Ghost` type is a scalar that has one value, `'ghost'`, therefore it is a `unit`. |

`Character` type

| Property | Type | Cardinality / Permutations |
|:---|:---|:---|
| afraid | `Boolean` | 2 |
|  |  | `afraidOfNoGhosts` is a `Boolean` scalar and can only contain two values. `true` or `false`.|
| ghostbuster | `Boolean` | 2 |
|  |  | Same. |

The possible values for `type Entity` is 5. The reason for that is the simple math. You do the math on the record as you would any product (2x2) and add that to the scalars.

<div style="text-align:center;">
  $ A \times (B \times B)$ 
</div>

The article enumerates them and I'll copy it because it's important to see.

```
// From above: sum type Entity = Ghost | Character

// The only Ghost entity
entity1 = Ghost ghost

// All the different permutations of Character. This is important because the sum operation
// is an Exclusive OR (XOR) so it could only be one of the types at a time. And because of
// our Prodcut Math each Character can have 4 different permutations.
entity2 = Character { afraidOfNoGhosts: true, ghostbuster: true }
entity3 = Character { afraidOfNoGhosts: false, ghostbuster: true }
entity4 = Character { afraidOfNoGhosts: true, ghostbuster: false }
entity5 = Character { afraidOfNoGhosts: false, ghostbuster: false }
```

?> Unfortunatly there isn't any difference between this and a `union` like in most other languages. We're going to change that with the idea of `tags`

!> Now add some code in here to show it off.

## Tagged Sums
Almost done. `Promise()`.

Now we get a bit out of theory and into `pattern matching`. No, not the `regex` kind. That tripped me up a bunch too. This is the last but super important part. Think of `tags` as a way to "label" your values. We encapsulate each value in a way to make it unambiguous. Look at this problem:

```
// A batter could have an age and how many home runs.
type Batter = Integer | Integer

Batter = 13 // Is this the homeruns or age?
Batter = 33 // Is this the age?

// As it stands we currently don't know.
```

This is difficult because now we don't know which number goes with what. That is why `tagged sums` exist.

```
// A batter could have an age and how many home runs.
type Batter = Integer | Integer

Batter = (Homeruns 13)
Batter = (Age 33)
```

<!-- A `union type` is a data structure that uses `type refinement`<sup>b</sup> to get defined types and depending on the language will fail to compile if you create an instance where an unexpected type is used.

In the case of sum types pattern matching is used to do the same thing as type refinement, and can also be used to handle a `null` or unexpected type case. Both solve similar issues of avoiding runtime errors with a type mismatch or an `undefined`/`null` value. -->

# So why use `sum types`?
## They are safe
Most often `tagged sums` are shown as a switch statement because the `tag` can be the `case` statement and that makes it very easy to illustrate the point. Even if it's a simplistic version of how to build a `tagged sum` implimentation.

```js
// Converted to JS(ish) from https://chadaustin.me/2015/07/sum-types/
EventType = { CLICK, PAINT }
ClickEvent = { x, y }

PaintEvent = { Color color}

Event = {
  EventType type,

  // Imagine this merges the two into one object
  // of sorts with lots of surrounding metadata.
  ClickEvent click | PaintEvent paint
}

switch (tag) {
  case CLICK:
    handleClickEvent(event.click)
    break
  case PAINT:
    handlePaintEvent(event.paint)
    break
}
```

In most languages this would break if we directly accessed properties on either event but since they are tagged you're good to go.

## They are general
A great example is the `Maybe` type. It allows for safe management of `null` values. Or the `Either` type that allows for safe use of code that throws `exception`s. Quick example:

Imagine trying to get a value from the database where it may or may not return a value. Perhaps it returns a `null` value.

```js
const value = dbQuery(STATEMENT)
if (value && value.property) {
  return value.property + 1
}
```

That's a lot of typing just to make sure something exists. Imagine if we had to add many more statements to it. Instead, if we were FP and used `tagged sums` and in particular a `Maybe` we can write it as thus:

```js
const value = Maybe.of(dbQuery(STATEMENT))

// If there was a null value this returns "nothing" or the empty representation.
return value.fold()
```

## `sum types` are polymorphic
## Semantic way to separate cases
```js
// I think this exemplifies the semantic ways that the cases are pulled apart.
// And no switch/if constructs in sight!
const componentStates = TaggedSumLibrary({
  unloaded: [],
  loading: [],
  loaded: [Any],
  failed: [Error],
})
```

## Alleviates human errors when using polymorphic data
Better handling of "similar" but "different" cases

> With the addition of a constructor tag, now every value comes with its own metadata identifier explaining just what the data’s case is
> 
> Pattern matching is a language-supported syntax for doing two things at once: identifying which case a value represents, and extracting the data from such a value. It lets the user of a sum type easily, declaratively, and safely consume values in the type.
> 
> \- Better JS Cases with Sum Types<sup>3</sup>


<!-- tabs:start -->

#### ** Bibliography **
1. Whitlie, Ryan, _[Sum Types in JavaScript](https://dev.to/moosch/sum-types-in-javascript-15il)_, (2019)
1. Bagdavadze, Giorgi, _[Algebraic Data Types explained in Statically typed Javascript](https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9)_, (2017)
1. Lebec, Gabriel _[Better JS Cases with Sum Types](https://medium.com/fullstack-academy/better-js-cases-with-sum-types-92876e48fd9f)_, (2018)
1. MathCelebrity.com, _[Calculate the Cartesian Product of {1, 2, 3} and {α,β}](https://www.mathcelebrity.com/cartprod.php?num1=1%2C+2%2C+3&num2=%CE%B1%2C%CE%B2&pl=Cartesian+Product)_, (2007)
1. Austin, Chad, _[Sum Types Are Coming: What You Should Know](https://chadaustin.me/2015/07/sum-types/)_, (2007)

#### ** Definition References **

Full definitions can be found in the [glossary](start-here/glossary)

a. The mathematical notion for set is: $∈$ <br />
b. `type refinement`: A way to refine a type in code for type saftey.
c. `record`, `object` are the same thing. I use them interchangeably.<br />
d. Any real number, or any quantity that can be measured using a single real number. `Temperature`, `length`, and `mass` are all scalars. A scalar is said to have magnitude but no direction.<br />
e. $\bigcup$ means union<br />
f. $\bigcap$ means intersection<br />

#### ** More information **

<!-- 1. [TITLE](LINK)
  - Why link was used. -->

<!-- tabs:end -->
