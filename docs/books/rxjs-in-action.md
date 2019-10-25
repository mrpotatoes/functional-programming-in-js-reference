# RxJS in Action

![](https://images.manning.com/720/960/resize/book/9/5ff3611-f62f-47cb-a977-2967da49b079/Daniels-RxJS-HI.png)

[RxJS in Action](https://www.manning.com/books/rxjs-in-action) <br />
Paul P. Daniels and Luis Atencio <br />
Foreword by Ben Lesh <br />
July 2017 ISBN 9781617293412 352 pages<br />

> _RxJS in Action_ is your guide to building a reactive web UI using RxJS. You'll begin with an intro to stream-based programming as you explore the power of RxJS through practical examples. With the core concepts in hand, you'll tackle production techniques like error handling, unit testing, and interacting with frameworks like React and Redux. And because RxJS builds on ideas from the world of functional programming, you'll even pick up some key FP concepts along the way.

<details>
  <summary>Part 1</summary>

## 1. THINKING REACTIVELY
* 1.1. Synchronous versus asynchronous computing
	* 1.1.1. Issues with blocking code
	* 1.1.2. Non-blocking code with callback functions
	* 1.1.3. Understanding time and space
	* 1.1.4. Are callbacks out of the picture?
	* 1.1.5. Event Emitters
* 1.2. Better callbacks with promises
* 1.3. The need for a different paradigm
* 1.4. The Reactive Extensions for JavaScript (RxJS)
	* 1.4.1. Thinking in streams: data flows & propagation

##  2. REACTING WITH RXJS
* 2.1. Functional programming as the pillar of reactive programming
	* 2.1.1. Functional programming
	* 2.1.2. The Iterator pattern
* 2.2. Stream's data-driven approach
* 2.3. Wrapping data sources with Rx.Observable
	* 2.3.1. Identifying different sources of data
	* 2.3.2. Creating RxJS Observables
	* 2.3.3. When and where to use RxJS
	* 2.3.4. To push or not to push
* 2.4. Consuming data with observers
	* 2.4.1. The Observer API
	* 2.4.2. Creating bare observables
	* 2.4.3. Observable modules
* 2.5. Summary

##  3. CORE OPERATORS
* 3.1. Evaluating and cancelling streams
	* 3.1.1. Downside of eager allocation
	* 3.1.2. Lazy allocation and subscribing to observables
	* 3.1.3. Disposing of subscriptions: explicit cancellation
	* 3.1.4. Cancellation mismatch between RxJS and other APIs
* 3.2. Popular RxJS observable operators
	* 3.2.1. Introducing the core operators
* 3.3. Sequencing operator pipelines with aggregates
	* 3.3.1. Self-contained pipelines and referential transparency
	* 3.3.2. Performance advantages of sequencing with RxJS
* 3.4. Summary

##  4. IT'S ABOUT TIME YOU USED RXJS
* 4.1. Why worry about time?
* 4.2. Understanding asynchronous timing with JavaScript
	* 4.2.1. Implicit timing
	* 4.2.2. Explicit Timing
	* 4.2.3. The JavaScript timing interfaces
* 4.3. Back to the future with RxJS
	* 4.3.1. Propagation
	* 4.3.2. Sequential time
* 4.4. Handling user input
	* 4.4.1. Debouncing
	* 4.4.2. Throttling
* 4.5. Buffering in RxJS
* 4.6. Summary

</details>

<details>
  <summary>Part 2</summary>

## 5. APPLIED REACTIVE STREAMS
* 5.1. One for all, and all for one!
	* 5.1.1. Interleave events by merging streams
	* 5.1.2. Preserve order of events by concatenating streams
	* 5.1.3. Switch to the latest observable data
* 5.2. Unwinding nested observables: the case of mergeMap
* 5.3. Mastering asynchronous streams
* 5.4. Drag and drop with concatMap
* 5.5. Summary

## 6. COORDINATING BUSINESS PROCESSES
* 6.1. Hooking into the observable lifecycle
	* 6.1.1. Web hooks and the observer pattern
	* 6.1.2. Hooked on observables
* 6.2. Joining parallel streams with combineLatest and forkJoin
	* 6.2.1. Limitations of using promises
	* 6.2.2. Combining parallel streams
	* 6.2.3. More coordination with fork-join
* 6.3. Building a reactive database
	* 6.3.1. Populating a database reactively
	* 6.3.2. Writing bulk data
	* 6.3.3. Joining related database operations
	* 6.3.4. Reactive databases
* 6.4. Summary

## 7. ERROR HANDLING WITH RXJS
* 7.1. Common error-handling techniques
	* 7.1.1. Error-handling with try/catch
	* 7.1.2. Delegating errors to callbacks
	* 7.1.3. Errors and promises
* 7.2. Incompatibilities between imperative error-handling techniques and functional and reactive code bases
* 7.3. Understanding the functional error-handling approach
* 7.4. The RxJS way of dealing with failure
	* 7.4.1. Errors propagated downstream to observers
	* 7.4.2. Catching and reacting to errors
	* 7.4.3. Retrying failed streams for a fixed number of times
	* 7.4.4. Reacting to failed retries
* 7.5. Summary

</details>

<details>
  <summary>Part 3</summary>

## 8. HEATING UP OBSERVABLES
* 8.1. Introducing hot and cold observables
	* 8.1.1. Cold Observables
	* 8.1.2. Hot observables
* 8.2. A new type of data source: WebSockets
	* 8.2.1. A brief look at WebSockets
	* 8.2.2. A simple WebSocket server in Node.js
	* 8.2.3. WebSocket client
* 8.3. The impact of side effects on a re-subscribe or a replay
	* 8.3.1. Replay vs. re-subscribe
	* 8.3.2. Replaying the logic of a stream
	* 8.3.3. Re-subscribing to a stream
* 8.4. Changing the temperature of an Observable
	* 8.4.1. Producers as thermometers
	* 8.4.2. Making a hot observable cold
	* 8.4.3. Making a cold observable hot
* 8.4.4. Creating hot-by-operator streams
* 8.5. Connecting one observable to many observers
	* 8.5.1. Publishing the stream data
	* 8.5.2. Publish with replay
	* 8.5.3. Publish last
* 8.6. Summary

##  9. TOWARD TESTABLE, REACTIVE PROGRAMS
* 9.1. Testing is inherently built into functional programs
* 9.2. Testing asynchronous code and promises
	* 9.2.1. Testing AJAX requests
	* 9.2.2. Working with promises
* 9.3. Testing reactive streams
* 9.4. Making streams testable
* 9.5. Scheduling values in RxJS
* 9.6. Augmenting virtual reality
	* 9.6.1. Playing with marbles
	* 9.6.2. Fake it til' you make it
	* 9.6.3. Refactoring our search stream for testability
* 9.7. Summary

## 10. RXJS IN THE WILD
* 10.1. Building a basic banking application
* 10.2. Introduction to React and Redux
	* 10.2.1. Rendering UI components with React
	* 10.2.2. State management with Redux
* 10.3. Redux-ing application state
	* 10.3.1. Actions and Reducers
	* 10.3.2. Redux Store
* 10.4. Building a hot RxJS and Redux store adapter
* 10.5. Asynchronous middleware with RxJS Subject
	* 10.5.1. RxJS Subjects
	* 10.5.2. Building an epic, reactive middleware
* 10.6. Bringing it all home
* 10.7. Parting words
* 10.8. Summary

</details>

<details>
  <summary>Appendix</summary>

## APPENDIX A: LIBRARIES USED IN THIS BOOK
* A.1. Installing RxJS
* A.2. Installing Ramda.js
* A.3. Installing PouchDB
* A.4. Installing Moment.js
* A.5. Installing Google Client APIs
* A.6. Using the Bitly Web API
* A.7. Installing Mocha
* A.8. Installing Chai.js
* A.9. Installing React.js
* A.10. Installing React-Bootstrap
* A.11. Installing Redux.js

## APPENDIX B: CHOOSING AN OPERATOR

</details>