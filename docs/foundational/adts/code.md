# Code
Hey friendos!

This is a special document in here. I want to go over ADTs but we need to talk about Daggy and the code version of Tagged Sums. This post is heavily influenced by [Fantas, Eel, and Specification 1: Daggy](http://www.tomharding.me/2017/03/03/fantas-eel-and-specification/) by Tom Harding (As are most of the stuff in `Foundational`).

This post will accomplish 3 things
1. A few of `tagged sum` type examples
1. Create a `linked list` type
1. Show `daggy` passing the laws in unit tests.

I want to take something verbatim from Tom here because it's kinda perfect for `Tagged Sums`.

Given this code:
```js
const Shape = daggy.taggedSum('Shape', {
  // Square :: (Coord, Coord) -> Shape
  Square: ['topleft', 'bottomright'],

  // Circle :: (Coord, Number) -> Shape
  Circle: ['centre', 'radius']
})
```

> `Shape` isn’t a _constructor_, it’s a _type_: `Shape.Square` and `Shape.Circle` are the constructors.
>
> This means that, when we write a method, we have to write something that will work for _all_ forms of the `Shape` type, and `this.cata` is Daggy’s killer feature. _By the way_, `cata` is short for [catamorphism](http://www.tomharding.me/2017/02/24/reductio-and-abstract-em/)!

This is what makes it interesting. `Shape`'s constructors are essentially the scalars (from the sum types article I wrote in theory) so if doing pattern matching on this objec you can only have one outcome. Either `Square` or `Circle`.

<!-- tabs:start -->

#### ** Bibliography **
1. Last, First, _[Title](Link)_, (YYYY)

#### ** More information **
1. Last, First, _[Title](Link)_, (YYYY)
  - Extra

<!-- tabs:end -->


<!--
https://github.com/devexperts/remote-data-ts
https://datarockets.com/blog/javascript-pattern-matching-library-daggy/
https://medium.com/javascript-inside/slaying-a-ui-antipattern-in-react-64a3b98242c
https://dev.to/davidchase/comment/bh9g
https://datarockets.com/blog/javascript-pattern-matching-library-daggy/
https://hackernoon.com/making-functional-programming-click-836d4715baf2
-->
