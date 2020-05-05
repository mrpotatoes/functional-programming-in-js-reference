# Preamble
I've been reading Tom Harding's posts going through the fantasyland specification and honestly they are a great primer to get into functional programming in JS. The only issue is I believe them to be less in-depth than I wanted but I'm also highly obsessive and that is my cross to bear. Bear? Bere?

So, I wanted to use Mr. Harding's post [Fantas, Eel, and Specification 2: Type Signatures](http://www.tomharding.me/2017/03/08/fantas-eel-and-specification-2/) with more in-depth discussion and using Fantasy Land's exacting spec with a bunch of examples. That's where I feel it could have gone more in depth.

buuuuuUUUUUuuuuuuut

If you find me to be too verbose, I am, or too long winded, I am, or too redundant, I are, then it might be best to go read that article instead. I feel I hit all the symbols with great clarity here especially with the examples.

## Old World
Okay, so I feel Harding's starting explanation here is excellent. I'll put it into my own words tho.

This is pretty common right? I assume?

```js
const usersWithOutLast = async (users: User[]): Promise<User[]>

const usersWithOutLast = async (users)
```

These are the same two functions (with some poor interfaces/types attached to one of them). This is a function called `usersWithOutLast` that takes and array of `User` objects and eventually returns a `User` array but the user don't have a "`last`". Killer. This is straight forward and powerful and expressive, tho I'd argue difficult to read no matter how much I'm used to it.

## New World
**Please welcome Damas-Hindley-Milner type signatures!**

Damas-Hindley-Milner signatures are just a different, and imo more readable, way to write a type signature. I would even go so far as to say it's the definitive way to write type signatures. Many call this the "arrow notation" and I kind of like it. I definitely do not like having to always say or type "Damas-Hindley-Milner type signatures". Maybe DHMTS. Maybe. "Type signature" is just easier honestly. And if anyone wants to know more about them or "arrow notation" then just point them in my direction 😊!

<div class="breaker">
Bear with me a moment while I go on a [related] tangent.

Consider a function just a mapping of values of one domain to another. Meaning that if you give it a particular set of inputs you ALWAYS get the same outputs from the co-domain. So, for instance, if I were to pass the `add()` function `1` and `2` I would ALWAYS get `3`. If I got anything other than `3` then the function would be broken. You could consider this for all possible combinations of 2 integers.

![asd](https://via.placeholder.com/750x450)

This brings up some interesting ideas too. If you've ever used a `jest` snapshot it'll create a file on the system of the output of that JSX. This wouldn't be possible if you give that function/JSX the same inputs and the output is always different. This is the same exact thing with functions. They are just mapping from one to another. The domain to the co-domain.

So, while a function will "do something" essentially what it "does" will always result in the same output given a particular of inputs. This makes looking at functions as mappers of data easy. Which also makes other things easy (memoization, referential transparency)

But why is this at all important?

Essentially because when people don't look at a function's signature as a definition of that function/type but rather what goes in and hopefully comes out and then look at the doc block header or the contents of the function. There are many ... _side effects_ ... that have lead up to that behavior but one of them is that the function signature doesn't always mean what it says. Some functions throw exceptions (yuck), some functions don't return (yuck), some functions do "extra" (yuck) and therefore you can't _trust_ a function. Typically.

Type signatures on the other hand means that you can and you should.
</div>

### What do type signatures do?
* Describe the type
* The inputs
* The outputs
* Allow for automated testing
* In a perfect JS world we'd have type inferance 😭

### What don't type signatures do?
* Don't explain the inner workings of a function
* Don't describe the exact values you'll get
    * Think strings. You won't know that the `greet` function prepends `"Hello, "` to your input.

### Mapping
!> Note: This should be in one of my glossary pages as well.

Firstly let's do some preliminary mapping. A table. YAY!

| Symbol | Definition | Example | Thoughts |
|:-:|:-|:-|:-|
| `::` | member of, such that or "type of method is such that ..." | `1 :: Integer` | |
| `->` | maps to, returns, yields | The function will return "this" | `inc :: a -> a` |
| `=>` | type constraints | `...` | |
| `~>` | method "maps to" | `...` | |
| `TypeClass`<sup>1</sup> | A named type constructor | `inc :: ComplexNumer n => n -> n -> n` |
| `a` | [type variable or generic variable](https://youtu.be/BtFdmg8uhNY?t=3171) | `...` | |
| `()` | No params, no return| `main :: () -> ()` |  |

A fun little note: <br />
_New types can be created via type constructors._: https://wiki.haskell.org/Constructor#Type_constructor
  - Type constructors can take zero or more type arguments.
  - `Array` is a type constructor which takes one type argument.
  - `Array String` is the type of all arrays of strings. Each of the following has type `Array String`: `[]`, `['foo', 'bar', 'baz']`.
  - `Array (Array String)` is the type of all arrays of arrays of strings. Each of the following has type `Array (Array String)`: `[]`, `[ [], [] ]`, `[ [], ['foo'], ['bar', 'baz'] ]`.

-----

## Terminology

1. "value" is any JavaScript value.
2. "equivalent" is an appropriate definition of equivalence for the given value. The definition should ensure that the two values can be safely swapped out in a program that respects abstractions. For example:
  - Two lists are equivalent if they are equivalent at all indices.
  - Two plain old JavaScript objects, interpreted as dictionaries, are equivalent when they are equivalent for all keys.
  - Two promises are equivalent when they yield equivalent values.
  - Two functions are equivalent if they yield equivalent outputs for equivalent inputs.

## Let's get deeper in to the ...
_Notes:_ Most of this is taken wholesale from the fantasyland specification. They give lots of details and my plan is to simplify it so that it's easier to explain. Plus a ton of examples. Considering making all of these collapsible.

### Symbol `::`
`::` _"is a member of"._
1. `e :: t` can be read as: "the expression `e` is a member of type `t`".
1. `true :: Boolean` - "`true` is a member of type `Boolean`".
1. `42 :: Integer, Number` - "`42` is a member of type `Integer and Number`".

This can also be read as:
* Member of
* Such that
* Type is a method such that ...

### Symbol `->`
`->` (arrow) _Function type constructor._
1. `->` is an _infix_ type constructor that takes two type arguments where left argument is the input type and the right argument is the output type.
1. `->`'s input type can be a grouping of types to create the type of a function which accepts zero or more arguments. The syntax is: `(<input-types>) -> <output-type>`, where `<input-types>` comprises zero or more comma–space (`, `)-separated type representations and parens may be omitted for unary functions.
1. `String -> Array String` is a type satisfied by functions which take a `String` and return an `Array String`.
1. `String -> Array String -> Array String` is a type satisfied by functions which take a `String` and return a function which takes an `Array String` and returns an `Array String`.
1. `(String, Array String) -> Array String` is a type satisfied by functions which take a `String` and an `Array String` as arguments and return an `Array String`.
1. `() -> Number` is a type satisfied by functions which do not take arguments and return a `Number`.

| Description | Example |
|-----|---|
| Zero args | `() -> ...` |
| 1 arg | `a -> ...` |
| 2 args | `a b -> ...` |
| 3 args | `a b c -> ...` |

### Symbol `()`
`void` params or return should be rare and at the highest level of your code. Meaning the closer to the user/interface as possible. By good practice you should always take 1 param and return something. Though this isn't possible to keep to this principal you should at minimum move all this code closer to the user. Or the edges of the program.

nullary, unit, void

### Related symbols
These next symbols are all related in one way or another and it makes most sense if I, under headings, group them together. Honestly it's kind of hard to use any one of these on their own so that's why they'll all be put together.

#### Symbol `a` & `TypeClasses`
_Lowercase letters stand for type variables._
1. Type variables can take any type unless they have been restricted by means of type constraints (see fat arrow below).

?> `TypeClass` unofficial and not part of `FantasyLand` but it makes it easier for me to understand.

Think of `TypeClass` as an identifier of the set that the variable (next section) is required to be. All of this `type`'s methods are required in order to satisfy the type signature.

#### Symbol `=>`
`=>` (fat arrow) _Expresses constraints on type variables._
1. In `a ~> a -> a` (see squiggly arrow above), `a` can be of any type. `Semigroup a => a ~> a -> a` adds a constraint such that the type `a` must now satisfy the `Semigroup` typeclass. To satisfy a typeclass means to lawfully implement all functions/methods specified by that typeclass.

If coming from the OOP world typeclass is an interface. Pretty straight forward.

```js
class Person {
  greet() {}
  handshake() {}
}
```

Given a type of `Person` then ... `greet :: Person a => ...` means that the `a` variable used in the type signature would require to be of `type` person.

This means that this function will only work if `a` is **not** of all possible values in an infiniate set but rather of the set `Person`

| Description | Example |
|-----|---|
| `handshake` | `handshake :: Person p => ...` |
| `greet` | `greet :: Person p => ...` |

#### Symbol `~>`
`~>` (squiggly arrow) _Method type constructor._
1. When a function is a property of an Object, it is called a method. All methods have an implicit parameter type - the type of which they are a property.
1. `a ~> a -> a` is a type satisfied by methods on Objects of type `a` which take a type `a` as an argument and return a value of type `a`.

I think that actually makes sense, honestly, but if it doesn't I want to say it in a different way because it _can_ be confusing.

```js
const what = (s: string) => { return s}

class Huh {
  constructor(s: string) => {}
  saythatagain: () => {},
  what: (s: string) => { return s},
}

const example {
  method: (s) => { return s},
}
```

`saythatagain()` and `what()` are both a property on an object called `Huh`. So, you could write a each type signature like thus:

| Description | Example |
|-----|---|
| `huh.what()` | `what :: Huh a => a ~> a` |
| `huh.saythatagain()` | `saythatagain :: Huh a => a ~> () -> ()` |
| `test.exmaple()` | `example :: a ~> a` |

## Some examples

| Puzzle | Explained |
|-----|---|
| `fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k` | ? |
| `fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b` | ? |
| `fantasy-land/id :: Category c => () -> c a a` | ? |

<!-- tabs:start -->

#### ** Bibliography **

<!-- 1. Avalander, _[Union Types with Javascript](https://dev.to/avalander/union-types-with-javascript-4emo)_, (2018) -->
1. Christopher Okhravi, _[How To Read Function Type Signatures](https://www.youtube.com/watch?v=BtFdmg8uhNY)_, 2018
1. philh, _[A reckless introduction to Hindley-Milner type inference](https://www.lesswrong.com/posts/vTS8K4NBSi9iyCrPo/a-reckless-introduction-to-hindley-milner-type-inference)_, (2019)
1. Rajat Sharma, _[Function Type Signatures in Javascript](https://hackernoon.com/function-type-signatures-in-javascript-5c698c1e9801)_, 2017
1. Jan-Vidar Tandberg Bakke, _[Type Signatures — Functional Programming for JavaScript Developers](https://levelup.gitconnected.com/type-signatures-functional-programming-for-javascript-developers-28ea03dc1192)_, 2020
1. Scott Sauyet, _[Type Signatures](https://github.com/ramda/ramda/wiki/Type-Signatures)_, 2016
1. Tom Harding, _[Fantas, Eel, and Specification 2: Type Signatures](http://www.tomharding.me/2017/03/08/fantas-eel-and-specification-2/)_,
1. Luis Atencio, _[Functional Programming in JavaScript](https://livebook.manning.com/book/functional-programming-in-javascript/chapter-4/58)_, 2016
1. fantasyland, _[fantasyland/fantasy-land](https://github.com/fantasyland/fantasy-land)_

#### ** More information / Notes **

1. [How To Read Function Type Signatures](https://www.youtube.com/watch?v=BtFdmg8uhNY)
  - Skip 1&#58;xx&#58;xx to 1&#58;03&#58;04. He makes a mistake explaining "" and it's important to just skip this part to keep from being confused. Thing is that it's easy to make that mistake as I would have to so I'm happy he caught it.

<!-- tabs:end -->


> yikes my bad dudes - Christopher Okhravi
