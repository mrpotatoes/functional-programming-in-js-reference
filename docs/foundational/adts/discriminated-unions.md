# Sum type Code

<!-- <details>
  <summary>Remove me when you're done with this garbage</summary>

?> Examples in here are linked to code in this repo.

If you've completed the [`[Theory] Sub, Products, etc.`](foundational/adts/sums-products) you'll understand some of the math that goes into creating a `Tagged Union`. There are types that a matcher can handle. That's really all it is. There are so many more benefits to it though.<sup>mi-2</sup?

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

</details> -->

<hr />

## Break it down for me

### Code breakdown(s)
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

### Simplish example
This simple example will instead do the same thing (build that object) but instead we focus on function paramater count. This is just as weak of a version (as we end up with a simple type versus a compound por sum type).



### More complicated example

### Benefits
* A switch w/o all the hard coding. Rather it's an abstraction.
* 

### When to use

Let's first discuss what we're trying to do.

<!-- The advantages are accesses are safe versus using program logic to check the currently active field. Elm’s guide describes why the best:

> Many languages have trouble expressing data with weird shapes. They give you a small set of built-in types, and you have to represent everything with them. So you often find yourself using null or booleans or strings to encode details in a way that is quite error prone. -->


<!-- [github-embed](https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/d1462fff545bb7e0c0ae834981a9dddfc444893f/src/foundational/adts/diy.daggy.spec.js ':lang=js') -->

https://dev.to/avalander/union-types-with-javascript-4emo

<!-- tabs:start -->

#### ** Bibliography **

1. Avalander, _[Union Types with Javascript](https://dev.to/avalander/union-types-with-javascript-4emo)_, (2018)
1. Learning Journal, _[Scala Tutoraial - Pattern Matching](https://www.youtube.com/watch?v=ULcpWn23waw)_, (2017)
1. Functional Programming Principles in Scala, _[4.7 Pattern Matching](https://www.youtube.com/watch?v=osd0SZ9he4Q)_, (2017)

#### ** More information / Notes **

1. [[Theory] Sub, Products, etc.](foundational/adts/sums-products)
  - Explains sum types
1. JavaScript makes tagged sums difficult to understand after learning what they are in theory. It basically comes down to the plain JS type system. One of the things that JavaScript makes difficult to understand because when you look at different libraries that handle this they typically use a simple key like the name of the function to determine types. This isn't super powerful. TypeScript, I believe, would make this much more powerful. If you look at languages that have this built in you'll see that they handle it by actual types which is what we should be doing. Short of that it should be known that there are options and figuring out types is one option.
  - Capturing primative type, function/object type, params (recursivly), source file from which the type originates, mashing it together to make a hash as a key is an option
    - Could make code slow so this would be a pre-compile time optimization like most of TypeScript (as I understand it).
  - Use the function name plus argument count
  - Write a babel plugin that saves all this information as metadata associated with every function. The complexity here would really not be worth it.

<!-- tabs:end -->

