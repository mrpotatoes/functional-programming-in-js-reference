# Testing explained

I find the terminology of the different types of tests to be confusing and oftentimes people are using the terms almost interchangeably. Except for `unit tests` most of these people use as the same type of testing except the extent to which they use them. For instance when I hear people say `smoke testing` they are going into the app and checking the release themselves. When someone says `functional testing` they mean `end to end`. And no one has ever given me a good definition of `Regression Testing`. Except for [@Karthikeyan Margam](https://www.linkedin.com/in/karthikeyanmargam/), of course.

A lot of tests fold over into the same use cases as others but not completely making that distinction harder to distinguish never-mind explaining. So to help with that I put together a quick spectrum of testing for the 6 most common types of testing.

It should be noted that this document attempts to quickly explain the 4 main types of testing you'll encounter but I'm not going to be prescriptive as to how you should develop your test suite(s). Nor will I go into convincing you to do one or the other.

![](https://i.imgur.com/gwodFBV.jpg)

It is helpful to think about the main types of testing as 2 categories on a map as `Mocked` or `Integrated`. Explanation in the table below.

| Map label | Explanation |
|:--|:--|
| `Mocked` | What is or isn't live data such as file reading, DB queries, or API calls |
| `Integration` | How integrated this test is with other parts of the environment, other code, other APIs or other web sources. |

---
## `Unit` testing
> Testing of an individual software component or module is termed as Unit Testing. It is typically done by the programmer and not by testers, as it requires detailed knowledge of the internal program design and code. It may also require developing test driver modules or test harnesses.

You all know when to use this. When writing open source, a library or an API then you shoot for full coverage but if you're writing code for a client then somewhere around 60-80% coverage is most likely best. Typically 100% coverage is for code  without side effects or dependencies as that will make it a lot easier. Or dependencies are injected with mocks.

Unit testing is testing the outputs given a particular set of inputs. Any further than this and you're getting into `Integration testing`.

| Where| When | Suggested coverage | Overlap | Why | 
|:--|:--|:--|:--|:--|
| Code API | Always | 100% | none | You're testing your code directly, you should do as much of this as you can |
| UI/Integrated | Always | 60-80% | none | You're testing interactions between modules at this point. It's harder to get & maintain code coverage |

## `Integration` testing
> Testing of all integrated modules to verify the combined functionality after integration is termed as Integration Testing.
> 
> Modules are typically code modules, individual applications, client and server applications on a network, etc. This type of testing is especially relevant to client/server and distributed systems.

Testing that modules work together. Do a lot of this but don't over do it. This is possibly more important than unit testing because things don't work in isolation they work together. This is also harder to wire up and changes are more likely to cascade.

API Testing falls into this category.

| Where| When | Suggested coverage | Overlap | Why | 
|:--|:--|:--|:--|:--|
| Web API | Always | 90-100% | mocks + live | Why wouldn't you test this? And why wouldn't you go as high as possible? Love to hear thoughts on this |
| UI/Integrated | Always | 50-80% | none | This is where it gets trickey and I have a ton of thoughts on this that I won't expouse here but you still want to test it somehow. An automated testing tool could be useful or testing with a library in-code but that becomes a bear to maintain after awhile. Separate out functionality from UI and you make your life much easier and you might not need to do this here at all.|

## `Regression` & `Functional` testing
> This type of testing ignores the internal parts and focuses only on the output to check if it is as per the requirement or not. It is a Black-box type testing geared to the functional requirements of an application.

Imagine you are testing a full application. Your intention is the same as a unit test. You click `X` under certain conditions you expect `Y` to happen. If `Y` happens then it passes if not then it fails. You are NOT testing downstream systems but they would most likely be included. This is very similar to smoke testing except this is testing only active features, doing A/B testing or partially mocked.

Functionally they should be the same but it's a matter of reference, thinking, that determines wether to label something as `regression` or `functional` testing.

| Testing Type | Difference |
|:--|:--|
| `Regression` | Less active features. Test old code paths that aren't being modified. Essentially make sure existing features don't break. | 
| `Functional` | More active features. New features that are being changed. | 

| Where| When | Suggested coverage | Overlap | Why | 
|:--|:--|:--|:--|:--|
| Web UI | As much as possible | 40% | each other | This is where you catch any issues that you may push to production. This could be new or old features |
| Fat client UI | same | same | same | same |
| Video game | same | same | same | same |

## `Smoke` testing
> Whenever a new build is provided by the development team then the Software Testing team validates the build and ensures that no major issue exists.
> 
> The testing team ensures that the build is stable and a detailed level of testing is carried out further. Smoke Testing checks that no show stopper defect exists in the build which will prevent the testing team to test the application in detail.
> 
> If testers find that the major critical functionality is broken down at the initial stage itself then testing team can reject the build and inform accordingly to the development team. Smoke Testing is carried out to a detailed level of any Functional or Regression Testing.

`Smoke` testing is happy path. Quick, often and can also include regressions (by way of: if the full suite runs you'll find regressions). If automated that is better but can also be done manually as you're only testing a few things and making sure it passes the "PO's eye" test.

**Essentially you are testing core or business critical functionality is not broken**. Catch this quickly in the build pipeline before you deploy, if you can or have it running in the background all day.

| Where| When | Suggested coverage | Overlap | Why | 
|:--|:--|:--|:--|:--|
| Anything | Often | 20-40% | `regression`/`functional`, api | `Smoke` tests confirm that business critical paths are functioning properly but typically these are happy path only tests and should be fast to run. These do not need to be fully live either but they should be automated. |

## `End to End` testing
> End-to-end testing is a technique that tests the entire software product from beginning to end to ensure the application flow behaves as expected. It defines the product’s system dependencies and ensures all integrated pieces work together as expected.
> 
> The main purpose of End-to-end (E2E) testing is to test from the end user’s experience by simulating the real user scenario and validating the system under test and its components for integration and data integrity.

Typically one would use `End to End` testing to make sure all your services are working, in tandem, as expected. Consider this a functional + regression test but there is nothing mocked. It's using all live data & APIs. It should go from top to bottom of your services.

## Others
| Testing type | Explanation |
|:--|:--|
| `Security` | Check to make sure you don't have sql injection or anything of the sort. Tools like `Snyk` or `npm audit` help with this | 
| `Performance` & `Load` | Test to see what the load is. Like DDOSing your app to see what it can handle. Make sure to write it down tho! | 
| `Accessibility` | Testing to make sure those with different abilities aren't left out of your useful app! | 
| `Form factors` | Watches, toasters, phones, tablets and desktop. They should all be useable (if you want that) and tested against. | 

## Notes
Many of the `End to end` tests are solution-wise the same; it's more about methodology/philosophy/process. So for instance the `Smoke` tests and `Functional` tests will eventually catch the same thing but you use them for differing ends. `Smoke` for quick checks to make sure nothing is too different while Functional is more for testing new features.

# Testing Pyramid
<p align="center">
  <img src="https://i.imgur.com/yl33rMQ.jpg" />
  <br />
  A modified version of: https://automationpanda.com/2018/08/01/the-testing-pyramid/
</p>

Pretty straight forward. The higher up the pyramid you go the less you should employ those tests for various reasons. Based on best practices, of course, because your product may fall into an area where it's impossible to actually test (yes, it's actually possible) and you can only do end-to-end functional/regression tests. It'll work and it'll actually catch a lot but it is far from what you'd want to actually do.

## Citations
1. SoftwareTestingHelp.com, _[Types Of Software Testing: Different Testing Types With Details](https://www.softwaretestinghelp.com/types-of-software-testing/)_, (2020)
1. Katalon.com, _[What is End-to-End (E2E) Testing? All You Need to Know
](https://www.katalon.com/resources-center/blog/end-to-end-e2e-testing/)_, (2019)
1. Automation Panda, _[The testing pyramid](https://automationpanda.com/2018/08/01/the-testing-pyramid/)_, (2020)