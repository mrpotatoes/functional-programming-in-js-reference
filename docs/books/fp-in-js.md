# Functional Programming in JavaScript
![](https://images.manning.com/720/960/resize/book/5/c5bd123-f4fd-4a03-9069-9309c782ea7e/Atencio_hires_Fc.png)

[Functional Programming in JavaScript](https://www.manning.com/books/functional-programming-in-javascript) <br />
How to improve your JavaScript programs using functional techniques<br />
by Luis Atencio<br />
June 2016  ISBN 9781617292828  272 pages

> _Functional Programming in JavaScript_ teaches you techniques to improve your web applications: their extensibility, modularity, reusability, and testability, as well as their performance. This easy-to-read book uses concrete examples and clear explanations to show you how to use functional programming in real life. If you're new to functional programming, you'll appreciate this guide's many insightful comparisons to imperative or object-oriented programming that help you understand functional design. By the end, you'll think about application design in a fresh new way, and you may even grow to appreciate monads!

_I'm going through this book on my own. Want to become better at this._

<div class="part-1">

# PART 1: THINK FUNCTIONALLY
## 1. BECOMING FUNCTIONAL
<details>
  <summary>Chapter 1</summary>

- 1.1. Can learning functional programming help?
- 1.2. What is functional programming?
	- 1.2.1. Declarative programming
	- 1.2.2. Pure functions and the problem with side effects
	- 1.2.3. Referential transparency and substitutability
	- 1.2.4. Preserving immutable data
- 1.3. Benefits of functional programming
	- 1.3.1. Encouraging the decomposition of complex tasks
	- 1.3.2. Processing data using fluent chains
	- 1.3.3. Reacting to the complexity of asynchronous applications
- 1.4. Summary

</details>

## 2. HIGH-ORDER JAVASCRIPT
<details>
  <summary>Chapter 2</summary>

- 2.1. Why JavaScript?
- 2.2. Functional versus object-oriented programming
	- 2.2.1. Managing the state through encapsulation
	- 2.2.2. Treating objects as values
	- 2.2.3. Deep-freezing moving parts
	- 2.2.4. Navigating and modifying object graphs with lenses
- 2.3. Functions
	- 2.3.1. Functions as first-class citizens
	- 2.3.2. High-order functions
	- 2.3.3. Types of Function Invocation
	- 2.3.4. Function methods
- 2.4. Closures and scopes
	- 2.4.1. Problems with the global scope
	- 2.4.2. JavaScript's function scope
	- 2.4.3. A pseudo-block scope
	- 2.4.4. Practical applications of closures
- 2.5. Summary

</details>
</div>

<div class="part-2">

# PART 2: GET FUNCTIONAL
## 3. FEW DATA STRUCTURES, MANY OPERATIONS
<details>
  <summary>Chapter 3</summary>

- 3.1. Understanding your application's control flow
- 3.2. Method chaining
- 3.3. Function chaining
	- 3.3.1. Understanding lambda expressions
	- 3.3.2. Transforming data with _.map
	- 3.3.3. Gathering results with _.reduce
	- 3.3.4. Removing unwanted elements with _.filter
- 3.4. Reasoning about your code
	- 3.4.1. Declarative and lazy function chains
	- 3.4.2. SQL-like data: functions as data
- 3.5. Learning to think recursively
	- 3.5.1. What is recursion?
	- 3.5.2. Learning to think recursively
	- 3.5.3. Recursively defined data structures
- 3.6. Summary

</details>

## 4. TOWARDS MODULAR, REUSABLE CODE
<details>
  <summary>Chapter 4</summary>

- 4.1. Method chains versus function pipelines
	- 4.1.1. Chaining methods together
	- 4.1.2. Arranging functions in a pipeline
- 4.2. Requirements for compatible functions
	- 4.2.1. Type-compatible functions
	- 4.2.2. Functions and arity: the case for tuples
- 4.3. Curried function evaluation
	- 4.3.1. Emulating function interfaces
	- 4.3.2. Implementing reusable function templates
- 4.4. Partial application and parameter binding
	- 4.4.1. Extending the core language
	- 4.4.2. Binding into delayed functions
- 4.5. Composing function pipelines
	- 4.5.1. Understanding composition with HTML widgets
	- 4.5.2. Functional composition: separating description from evaluation
	- 4.5.3. Composition with functional libraries
	- 4.5.4. Coping with pure and impure code
	- 4.5.5. Introducing point-free programming
- 4.6. Managing control flow with functional combinators
	- 4.6.1. Identity (I-combinator)
	- 4.6.2. Tap (K-combinator)
	- 4.6.3. Alternation (OR-combinator)
	- 4.6.4. Sequence (S-combinator)
	- 4.6.5. Fork (join) combinator
- 4.7. Summary

</details>

## 5. DESIGN PATTERNS AGAINST COMPLEXITY
<details>
  <summary>Chapter 5</summary>

- 5.1. Shortfalls of imperative error handling
	- 5.1.1. Error handling with try-catch
	- 5.1.2. Reasons not to throw exceptions in functional programs
	- 5.1.3. Problems with null checking
- 5.2. Building a better solution: functors
	- 5.2.1. Wrapping unsafe values
	- 5.2.2. Functors explained
- 5.3. Functional error handling using monads
	- 5.3.1. Monads: from control flow to data flow
	- 5.3.2. Error handling with Maybe and Either monads
	- 5.3.3. Interacting with external resources using the IO monad
- 5.4. Monadic chains and compositions
- 5.5. Summary

</details>
</div>

# PART 3: ENHANCING YOUR FUNCTIONAL SKILLS
## 6. BULLETPROOF YOUR CODE

<details>
  <summary>Chapter 6</summary>

- 6.1. Functional programming's influence on unit tests
- 6.2. Challenges of testing imperative programs
	- 6.2.1. Difficulty identifying and decomposing tasks
	- 6.2.2. Dependency on shared resources leads to inconsistent results
	- 6.2.3. Predefined order of execution
- 6.3. Testing functional code
	- 6.3.1. Treating a function as a black box
	- 6.3.2. Focusing on business logic instead of control flow
	- 6.3.3. Separating the pure from the impure with monadic isolation
	- 6.3.4. Mocking external dependencies
- 6.4. Capturing specifications with property-based testing
- 6.5. Measuring effectiveness through code coverage
	- 6.5.1. Measuring the effectiveness of testing functional code
	- 6.5.2. Measuring the complexity of functional code
- 6.6. Summary

</details>


## 7. FUNCTIONAL OPTIMIZATIONS
<details>
  <summary>Chapter 1</summary>

- 7.1. Under the hood of function execution
	- 7.1.1. Currying and the function context stack
	- 7.1.2. Challenges of recursive code
- 7.2. Deferring execution using lazy evaluation
	- 7.2.1. Avoiding computations with the alternation functional combinator
	- 7.2.2. Taking advantage of shortcut fusion
- 7.3. Implementing a call-when-needed strategy
	- 7.3.1. Understanding memoization
	- 7.3.2. Memoizing computationally intensive functions
	- 7.3.3. Taking advantage of currying and memoization
	- 7.3.4. Decomposing to maximize memoization
	- 7.3.5. Applying memoization to recursive calls
- 7.4. Recursion and tail-call optimization (TCO)
	- 7.4.1. Converting non-tail calls to tail calls
- 7.5. Summary

</details>


## 8. MANAGING ASYNCHRONOUS EVENTS AND DATA
<details>
  <summary>Chapter 1</summary>

- 8.1. Challenges of asynchronous code
	- 8.1.1. Creating temporal dependencies amongst functions
	- 8.1.2. Falling into a callback pyramid
	- 8.1.3. Using continuation-passing style
- 8.2. First-class asynchronous behavior with promises
	- 8.2.1. Future method chains
	- 8.2.2. Composing synchronous and asynchronous behavior
- 8.3. Lazy data generation
	- 8.3.1. Generators and recursion
	- 8.3.2. The Iterator protocol
- 8.4. Functional and reactive programming with RxJS
	- 8.4.1. Data as observable sequences
	- 8.4.2. Functional and reactive programming
	- 8.4.3. RxJS and promises
- 8.5. Summary

</details>

# APPENDIX
<details>
  <summary>Chapter 1</summary>

- A.1 Functional JavaScript libraries
	- A.1.1 Lodash
	- A.1.2 Ramda
	- A.1.3 RxJS
- A.2 Other libraries used
	- A.2.1 Log4JS
	- A.2.2 QUnit
	- A.2.3 Sinon
	- A.2.4 Blanket
	- A.2.5 JSCheck

</details>
