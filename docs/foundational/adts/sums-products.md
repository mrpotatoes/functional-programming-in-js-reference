# Sum & Product Types

!> HEY MAN THIS IS PLAGERISM SO FIX THIS UP SO IT ISN'T. JEEZ!

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

## Product Types (AND)
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

I'm so stoked you asked!, I have mentioned that Product Types are an `AND` operation and the reason for that is because they are defined as a `cartesian product` meaning that it is a product (multiplcation) of two sets. For this example we'll provide the product of set<sup>a</sup> A and B: $∈ A$ x $∈ B$

Given these two sets:
<div style="text-align:center;">
  $∈ A = \{\ 1, 2, 3\ \}$ <br />
  $∈ B = \{\ \alpha, \beta\ \}$
</div>

The product (`∈A x ∈B`) would be:
<div style="text-align:center;">
  $∈A \ \times ∈B = \{\ 1\alpha , 1\beta , 2\alpha , 2\beta , 3\alpha , 3\beta \ \}$
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
| Law | Proof |
|:---|:---|
| Symmetry | `a * b = b * a` |
| Associativity | `a * (b * c) = (a * b) * c` |
| Identity | `n * 1 = n` |


## Sum Types (OR)
Sum types can be thought of as a datatype that can be one of a number of types (known as products) that have their own definition or shape. Each of these types has a `tag` that is used to identify the type in pattern matching.

Given the two sets:
<div style="text-align:center;">
  $∈ A = \{\ 1, 2, 3\ \}$ <br />
  $∈ B = \{\ \alpha, \beta\ \}$
</div>

The product (`∈A x ∈B`) would be:
<div style="text-align:center;">
  $∈A \ \times ∈B = \{\ 1, 2, 3, \alpha, \beta \ \}$
</div>

> “This overall operation is called disjoint union. Basically, it can be summarized as ‘a union, but each element remembers what set it came from’.” — Waleed Khan, Union vs Sum Types

<!-- A `union type` is a data structure that uses `type refinement`<sup>b</sup> to get defined types and depending on the language will fail to compile if you create an instance where an unexpected type is used.

In the case of sum types pattern matching is used to do the same thing as type refinement, and can also be used to handle a `null` or unexpected type case. Both solve similar issues of avoiding runtime errors with a type mismatch or an `undefined`/`null` value. -->

# So why use `sum types` over `product types`?
## 1. `sum types` are polymorphic
## 2. Better handling of "similar" but "different" cases

<!-- tabs:start -->

#### ** Bibliography **
1. Whitlie, Ryan, _[Sum Types in JavaScript](https://dev.to/moosch/sum-types-in-javascript-15il)_, (2019)
1. Bagdavadze, Giorgi, _[Algebraic Data Types explained in Statically typed Javascript](https://medium.com/@notgiorgi/algebraic-data-types-explained-in-statically-typed-javascript-4ad31c2b12c9)_, (2017)
1. Lebec, Gabriel _[Better JS Cases with Sum Types](https://medium.com/fullstack-academy/better-js-cases-with-sum-types-92876e48fd9f)_, (2018)
1. MathCelebrity.com, _[Calculate the Cartesian Product of {1, 2, 3} and {α,β}](https://www.mathcelebrity.com/cartprod.php?num1=1%2C+2%2C+3&num2=%CE%B1%2C%CE%B2&pl=Cartesian+Product)_, (2007)

#### ** Definition References **

Full definitions can be found in the [glossary](start-here/glossary)

a. The mathematical notion for set is: $∈$ <br />
b. `type refinement`: A way to refine a type in code for type saftey.
c. `record`, `object` are the same thing. I use them interchangeably.<br />
d. Any real number, or any quantity that can be measured using a single real number. `Temperature`, `length`, and `mass` are all scalars. A scalar is said to have magnitude but no direction.

#### ** More information **

<!-- 1. [TITLE](LINK)
  - Why link was used. -->

<!-- tabs:end -->