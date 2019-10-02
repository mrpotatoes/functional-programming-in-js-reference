## Example use case

    add :: Int -> Int -> Int
    --      ^  arg ^ arg
    --                    ^ return

`Domain` and `Co-Domain`

## Type Signature Components

---

### `::`

Is a member of

What goes in front of the `::` is the name declaration. What goes after is the type. So therefore the `::` is read as either

> is a value of type

> has type of

> is a member of

    inc :: Int -> Int

`inc` is a member of the set all functions that map from `Int` to all of `Int` ([YT Video](https://www.youtube.com/watch?v=BtFdmg8uhNY&t=3746s))

[](https://www.notion.so/6453747e4c8f4a47b925bd80a4f81218#8d9fdf598bee4ce88697ab58e05f57f8)

---

### `->`

---

### `~>`

Method "maps to"

> The `~>` is the new symbol here. What this means is that equals is a ***method*** on the thing to the left of `~>`, and the thing to the right is its signature. Back in the previous article, we saw a `List.prototype.toArray` method. In the Fantasy Land style, we would write the signature for this method like so:

    toArray :: List a ~> [a]

---

### `=>`

Type constraints

    equals :: Setoid a => a -> a -> Bool

    greet :: Person a => a () -> String

The => is new notation. What this means is that the signature to its right is valid if all the conditions to its left are satisfied. In the case of equals, the signature a -> a -> Bool is valid if a is a Setoid. Don’t worry about what a Setoid is just yet, as we’ll be covering exactly what it means in the next article. For now, just think of a Setoid as a type for which we can check whether two of its values are equivalent.

---

### `a`

Type variable

Generic Variable

---

## Type Variables

> *The only rule here is that type variables always start with a lowercase letter, and concrete types always start with an uppercase letter. - [Tom Harding](http://www.tomharding.me/2017/03/08/fantas-eel-and-specification-2/)*

> Constraints are very important. When we have a signature that involves a type variable with *no* constraints, we know that the function **can’t manipulate it in any way**. We know by looking at the signature `id :: a -> a` that all it *could* ever do is return the value it has been given, because we know nothing else about `a` - it could be a number, or a function, or anything! This feeds into an idea called [parametricity](https://en.wikipedia.org/wiki/Parametric_polymorphism) that we’ll come back to several times in this series.

## Example breakdowns

    # ~>
    equals :: Setoid a => a ~> a -> Bool

    // Filter an array by a predicate.
    // filter :: (a -> Bool) -> [a] -> [a]
    const filter = p => xs => xs.filter(p)

Filter is a function that takes a function as a first param `(a -> Bool)` where if it can convert an `a` to a `Bool` and a second param of an array of `[a]`s we'll get an array of `[a]`s (assume `a` are integers).

    fantasy-land/lte :: Ord a => a ~> a -> Boolean
    fantasy-land/compose :: Semigroupoid c => c i j ~> c j k -> c i k
    fantasy-land/id :: Category c => () -> c a a
    fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
    fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
    fantasy-land/filter :: Filterable f => f a ~> (a -> Boolean) -> f a

---

## Bibliography

- [https://hackernoon.com/function-type-signatures-in-javascript-5c698c1e9801](https://hackernoon.com/function-type-signatures-in-javascript-5c698c1e9801)
- [http://www.tomharding.me/2017/03/08/fantas-eel-and-specification-2/](http://www.tomharding.me/2017/03/08/fantas-eel-and-specification-2/)