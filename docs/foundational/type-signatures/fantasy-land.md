# Fantasy Land Spec
This is the formal spec copied from Fantasy Land.

?> Fantasy Land
## Terminology

1. "value" is any JavaScript value, including any which have the
   structures defined below.
2. "equivalent" is an appropriate definition of equivalence for the given value.
    The definition should ensure that the two values can be safely swapped out in a program that respects abstractions. For example:
    - Two lists are equivalent if they are equivalent at all indices.
    - Two plain old JavaScript objects, interpreted as dictionaries, are equivalent when they are equivalent for all keys.
    - Two promises are equivalent when they yield equivalent values.
    - Two functions are equivalent if they yield equivalent outputs for equivalent inputs.

## Type signature notation

The type signature notation used in this document is described below:<sup
id="sanctuary-types-return">[1](#sanctuary-types)</sup>

* `::` _"is a member of"._
    - `e :: t` can be read as: "the expression `e` is a member of type `t`".
    - `true :: Boolean` - "`true` is a member of type `Boolean`".
    - `42 :: Integer, Number` - "`42` is a member of type `Integer and
      Number`".
* _New types can be created via type constructors._
    - Type constructors can take zero or more type arguments.
    - `Array` is a type constructor which takes one type argument.
    - `Array String` is the type of all arrays of strings. Each of the
      following has type `Array String`: `[]`, `['foo', 'bar', 'baz']`.
    - `Array (Array String)` is the type of all arrays of arrays of strings.
      Each of the following has type `Array (Array String)`: `[]`, `[ [], []
      ]`, `[ [], ['foo'], ['bar', 'baz'] ]`.
* _Lowercase letters stand for type variables._
    - Type variables can take any type unless they have been restricted by
      means of type constraints (see fat arrow below).
* `->` (arrow) _Function type constructor._
    - `->` is an _infix_ type constructor that takes two type arguments where
      left argument is the input type and the right argument is the output type.
    - `->`'s input type can be a grouping of types to create the type of a
      function which accepts zero or more arguments. The syntax is:
      `(<input-types>) -> <output-type>`, where `<input-types>` comprises zero
      or more comma–space (`, `)-separated type representations and parens
      may be omitted for unary functions.
    - `String -> Array String` is a type satisfied by functions which take a
      `String` and return an `Array String`.
    - `String -> Array String -> Array String` is a type satisfied by functions
      which take a `String` and return a function which takes an `Array String`
      and returns an `Array String`.
    - `(String, Array String) -> Array String` is a type satisfied by functions
      which take a `String` and an `Array String` as arguments and return an
      `Array String`.
    - `() -> Number` is a type satisfied by functions
      which do not take arguments and return a `Number`.
* `~>` (squiggly arrow) _Method type constructor._
    - When a function is a property of an Object, it is called a method. All
      methods have an implicit parameter type - the type of which they are a
      property.
    - `a ~> a -> a` is a type satisfied by methods on Objects of type `a` which
      take a type `a` as an argument and return a value of type `a`.
* `=>` (fat arrow) _Expresses constraints on type variables._
    - In `a ~> a -> a` (see squiggly arrow above), `a` can be of any type.
      `Semigroup a => a ~> a -> a` adds a constraint such that the type `a`
      must now satisfy the `Semigroup` typeclass. To satisfy a typeclass means
      to lawfully implement all functions/methods specified by that typeclass.

For example (scroll):

```
fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
'-------------------'    '--------------------------'    '-'    '-------------------'    '-----'
 '                        '                               '      '                        '
 '                        ' - type constraints            '      ' - argument types       ' - return type
 '                                                        '
 '- method name                                           ' - method target type
```

- - -
1. <a name="sanctuary-types"></a>See the [Types](https://sanctuary.js.org/#types)
   section in Sanctuary's docs for more info. [↩](#sanctuary-types-return)

## Type representatives

Certain behaviours are defined from the perspective of a member of a type.
Other behaviours do not require a member. Thus certain algebras require a
type to provide a value-level representative (with certain properties). The
Identity type, for example, could provide `Id` as its type representative:
`Id :: TypeRep Identity`.

If a type provides a type representative, each member of the type must have
a `constructor` property which is a reference to the type representative.
