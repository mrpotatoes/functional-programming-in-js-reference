# Sum type Code

A sum type is based on the structure of the types.

?> The code examples showing off this information is foind in the [tests](https://github.com/mrpotatoes/functional-programming-in-js-reference/tree/master/src/foundational/adts)


If you've completed the [`[Theory] Sub, Products, etc.`](foundational/adts/sums-products) you'll understand some of the math that goes into creating a `Tagged Union`. There are types that a matcher can handle. That's really all it is. There are so many more benefits to it though<sup>mi-2</sup>.

Anyhow, having gone through the exercise of teaching myself some very basic `set theory` and learning what a sum type (tagged sum) is I've have serious difficulty in how to build or use them. This is what this article is about.

It comes down to 2 different issues in all examples that try to illustrate how they work (or why they are even valuable).

1. They either
	- Use a trivial/abstract example that makes it harder to understand
	- The example illustrates something that you wouldn't normally do
2. They fail to mention how to actually use it in your day-to-day code.

In this article I hope to allivate both those issues. So I will not be using `head`, or `tail`, or talking about points. I'll start with one trvial example to show different "states" and another that will use a more traditional example.

<hr />

> A Sum type is also known as a tagged union, variant, variant record, choice type, discriminated union, disjoint union, or coproduct.

I'll be going through 2 examples from 2 different articles and one repo. Then we're going to build our own super simple one (but use something else like `daggy` or some other `union`/`tagged sum` library.)

* https://dev.to/moosch/sum-types-in-javascript-15il
* https://dev.to/avalander/union-types-with-javascript-4emo
* https://github.com/quadrupleslap/union-js

We'll be writing a couple of matcher functions. They will return a custom built function that can "match" on any of the types that you gave it and will then either run a function on data that you give it or it will run the default which, for us, will throw an error.

Now, you can think of a Tagged Union as a `switch` statement with so much more power than a simple `switch` statement because that contraption simply works on simple predicates. `if` statements are more powerful.

Before we do that let's explore the differences.

A `switch` statement vs an `object` literal. Let's pretend we're handling different states for a user editing content in a comment box that we've built. At every state we'll send off different analytics events (and data). Let's say that the business wants to know what people have typed or haven't typed and sent.

<!-- tabs:start -->

#### ** switch **

```js
switch(event) {
	// For every word send somthing off.
	case 'activeEditing':
	runFN();
	break

	// Keep track how long they've stopped
	case 'stopped':
	runFN();
	break

	// They've cancelled
	case 'cancelled':
	runFN();
	break

	// They've commited to sending it off
	case 'posted':
	runFN();
	break

	// They've decided to edit it again (same as activeEditing but with another event sent)
	case 'reEdting':
	runFN();
	break
}
```

#### ** object literal **
```js
const commentEditorStates = {
	// For every word send somthing off.
	activeEditing: () => {},

	// Keep track how long they've stopped
	stopped: () => {},

	// They've cancelled
	cancelled: () => {},

	// They've commited to sending it off
	posted: () => {},

	// They've decided to edit it again (same as activeEditing but with another event sent)
	reEdting: () => {},

	// No default
}
```
<!-- tabs:end -->

?> Honestly if you're the type of person that thinks the `switch` is better and more readable then you're a nonsense person. I'm sorry you had to hear it from me.

There is, unfortunately, more benefit to using the `switch` instead of the `object` literal in this case because of the default case (which you can handle if you wrote a better mechanism for it like: https://tinyurl.com/qpc6r2c).

The issues here are multitude but I won't get into why you need to stop using `switch` statements right now. Though you should.

The `switch`' is pretty powerful. Different types in each `case` clause, you can do ranges, mix the types (yikes, don't do this), the `default` `case` and even have fall through `case`s. You can't, tho, handle custom types. More importantly you can't handle sum types.

Lastly, it's not functional. It's so, so, so not functional.

We can fix these issues and be functional and have much more attractive syntax all the while making our code Superman levels of bullet proof.

<hr />

## Break it down for me Senpai
### Examples

<!-- tabs:start -->
#### ** tagged-sum-1.js **
`string` as discriminator.

[Avalander](https://github.com/Avalander/)<sup>b-1</sup> takes an approach where you build a union from a `string` type. Meaning that this isn't a `tagged sum` (`disjoint union`) because the type is so simplistic but to illustrate the point it's really simple.

I would be remiss if I didn't mention that a subtype is essentially a more complex type. So instead of just a `string` it's a, say, an object or class.<sup>mi-1</sup>

?> There is a `for loop` version within the article. I advice giving it a read. Check the bibliography.

```js
const union = types =>
  types.reduce((prev, type) => ({
    ...prev,
    [type]: data => ({
        match: fns => fns[type](data),
    }),
  }), {})
```

So what this is doing is building an object with each type as the key and attached is a function.

```js
// Creates an object and each key (foo, bar) is assigned a function.
const foobah = union([ 'foo', 'bar' ])

// For each key give it's function some data (in our case all it does is take a silly string).
const foo = foobah.foo('do the foo thing')
const bar = foobah.bar('now do the bar thing')

// Now let's match.
const t = foo.match({
  foo: (text) => text,
  bar: (text) => text,
})

// Foo is the function that will run, return the text from foo which is
console.log(t) // -> "do the foo thing"
```

This is an incredibly simple example but it's important to know that we've built a better switch already. It's going to be an exact macth (for either foo or bar) and it's dynamic so we can dynamically build all our keys together before building the union. A better one would allow us to build it dynamically tho.

#### ** tagged-sum-2.js **
`arguments.length` as discriminator

This simple example will instead do the same thing (build that object) but instead we focus on function paramater count. This is just as weak of a version (as we end up with a simple type versus a compound or `sum type`).

The following code is the `tagged sum` & wrapping function. Aka the alternate library. We use 2 functions. `defineProducts` is how we will get our `tagged sum` (not not really). This will allow us to make an object of easily comparable types and bind their unique type to a function. This is super important, and powerful, because binding the function/type allows us lots of dynamic flexibility to safely run code w/o worry of conflicts.

The second function `SumType` is essentially the `match` function in the previous example (`Type as String`) but it's better because we've abstracted it into a more managable chunk that is easier to reason about. Now we'll instead call a method instead of defining the `match` every time.

```js
const defineProducts = (fields) =>
  // You can also do this with a for loop but ick. Know what I mean?
  fields.reduce(
    (acc, T, i) => ({
      // fields[i].name is the function name.

      // T is the list of args.
      [T.length]: T,
      ...acc,
    }),

    // The accumulator default.
    {},
  )

const SumType = (types, failure) => {
  // Get the tagged union.
  const products = defineProducts(types)

  // The "match" functionality. We take the args passed in, count them, them run the correct function (or fail).
  return (...args) => {
    const len = String(args.length)

    // Is the length of args in our tagged sum?
    return (products[len])
      // Heck yeah, let's run the underlying function.
      ? products[len](...args)

      // Sorry no, let's collapse the entire application!
      : failure(...args)
  }
}
```

How to actually use them. We define 3 functions here with different argument counts. The importance of this is because of the argument count being the discriminator to determine/match the type we want to actually call.

```js
// These do not matter. This is from an example online.
const threeParams = (int, qty, unit) => ({ value: int * (unit === 'cent' ? 0.01 : 1.0) * qty })
const twoParams = (int, qty) => ({ value: int * qty })
const fourParams = (int, something, qwe, rty) => ({ value: `${int} yo man, do the thing` })

const Money = SumType(
  // All the "types".
  [threeParams, twoParams, fourParams],

  // Our failure/default case.
  (_) => {
    throw new TypeError('Invalid data structure provided')
  }
)

// 3 parameters.
const coins = Money(10, 5, 'cent')
console.log(`Value: $${coins.value}`) // => Value: $0.5

// 2 parameters.
const cash = Money(6, 20)
console.log(`Value: $${cash.value}`) // => Value: $120

// 4 parameters.
const thingy = Money(6, 1, 2, 3)
console.log(`Value: $${thingy.value}`) // => Value: $120
```

#### ** Simple API **
The following code is an example from a simple library I found online for which I think will have one more illustration of the usefulness of using a `tagged sum`. The API is much easier to read, I think, than the others<sup>b-2</sup>.

I think this API is easier to grasp why this abstraction is an invaluable one to use.

```js
// Required import statement.
const Union = require('tagged-union')

// Define the things that a person can be (the types).
const Person = new Union(['Good', 'Bad'])

// Make some people!
const alice = Person.Bad('burnt', 'broccoli')
const bob = Person.Good('lindt')

console.log(alice.toString()) // => Bad(burnt, broccoli)

// Good people go to heaven, bad people go to hell.
const afterlife = (person) => {
  // Note that match clauses can, but don't have to, return a value.
  return person.match({
    // Our matched types.
    Good: (chocolate) => ('heaven'),
    Bad: (toast, vegetable) => ('hell'),

    // This is our default/failure match.
    _() {
      throw new Error('We can\'t get here!')
    }
  })
}

console.log(afterlife(alice)) // => hell
console.log(afterlife(bob)) // => heaven
```

This particular example has `arguments` setup to use but aren't but we've seen how that can work in the second example so it would be an easy fix. I however will not be doing that.

<!-- tabs:end -->

## Final thoughts
Well, there are multiple areas where we can use this. Error handling, building complex types that handle types passed in, and also to handle different states. Heck, different libraries use this to build `Monads` but it should be known, and I will example/show, how it isn't nessessary for that.

The advangages are plentiful. Elm's guide perfectly explains the problematic nature & limitations of plain `if` and `switch` statements:
> Many languages have trouble expressing data with weird shapes. They give you a small set of built-in types, and you have to represent everything with them. So you often find yourself using null or booleans or strings to encode details in a way that is quite error prone.

There are just things that JavaScript (at least currently) cannot handle. One of those things is properly destructuring a type's structure to produce a key. That's okay as we can do a limited version of this but let's end this by talking about some of the advantages of pattern-matching & sum types.

* The match cases are bound to the data provided<sup>mi-3</sup>
* Dynamic, no static typing to handle all cases, just build the `tagged sum` as you need
* Pattern matches can act upon ints, floats, strings and other types as well as objects
* Perfect state pattern matching can operate on many type of values and is recursive
* The compiler can tell if you haven't covered all possibilities in your matches
* You can use a match as an assignment
* If you have a discriminated union, each match can have a different 'type'
* Or-patterns allow subpatterns to be shared. Method dispatch only allows sharing when methods are from classes that happen to share a base class. Otherwise you must manually factor out the commonality into a separate function (giving it a name) and then manually insert calls from all appropriate places to your unnecessary function.<sup>b-6</sup>
* Pattern matching provides redundancy checking which catches errors.<sup>b-6</sup>
* Nested and/or parallel pattern matches are optimized for you by the F# compiler. The OO equivalent must be written by hand and constantly reoptimized by hand during development, which is prohibitively tedious and error prone so production-quality OO code tends to be extremely slow in comparison.<sup>b-6</sup>

<!-- tabs:start -->

#### ** Bibliography **

1. Avalander, _[Union Types with Javascript](https://dev.to/avalander/union-types-with-javascript-4emo)_, (2018)
1. quadrupleslap, _[union-js](https://github.com/quadrupleslap/union-js)_, (2017)
1. Whitlie, Ryan, _[Sum Types in JavaScript](https://dev.to/moosch/sum-types-in-javascript-15il)_, (2019)
1. Learning Journal, _[Scala Tutoraial - Pattern Matching](https://www.youtube.com/watch?v=ULcpWn23waw)_, (2017)
1. Functional Programming Principles in Scala, _[4.7 Pattern Matching](https://www.youtube.com/watch?v=osd0SZ9he4Q)_, (2017)
1. Harrop, Jon, _[Advantages of Pattern Matching](http://fsharpnews.blogspot.com/2009/08/advantages-of-pattern-matching.html)_, (2009)

#### ** More information / Notes **

1. [[Theory] Sub, Products, etc.](foundational/adts/sums-products)
  - Explains sum types
1. JavaScript makes tagged sums difficult to understand after learning what they are in theory. It basically comes down to the plain JS type system. One of the things that JavaScript makes difficult to understand because when you look at different libraries that handle this they typically use a simple key like the name of the function to determine types. This isn't super powerful. TypeScript, I believe, would make this much more powerful. If you look at languages that have this built in you'll see that they handle it by actual types which is what we should be doing. Short of that it should be known that there are options and figuring out types is one option.
  - Capturing primative type, function/object type, params (recursivly), source file from which the type originates, mashing it together to make a hash as a key is an option
    - Could make code slow so this would be a pre-compile time optimization like most of TypeScript (as I understand it).
  - Use the function name plus argument count
  - Write a babel plugin that saves all this information as metadata associated with every function. The complexity here would really not be worth it.
1. Because of this they are significantly more powerful than a `switch` statement or a set of `if` conditions.
<!-- tabs:end -->

