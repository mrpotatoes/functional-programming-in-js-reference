# How to Read

There are many different ways to learn functional programming and therefore there are many different ways to approach the same thing. So I hope to be able to help with it but before you dive in I hope you read this.

There are 7 different main sections: `Algebras`, `Laws`, `Functions`, `Advanced Topics`, `Cookbook`, `Example Projects`, `Evangelism`. 

Every new concept has 4 different aspects to it. Take for instance the first concept in "`Foundational`" "`Tagged Sums`". 

They are<sup>1</sup>:
1. `Theory & Math` which explains the theory behind the concept.
  - This isn't required and you can skip it at first if you'd like but I would suggest that you come back to this at some point to get a deeper understanding of the concept.
1. `Code` which explains how the code works to accomplish the theory.
  - Also, in here, we want to also note that this code also references the code in the `./src` directory. The path to the code is the same as the documentation. Hopefully the code is also linked/embedded.
  - The code written is focused on the laws and proven through unit tests. None of the code written should be used in production.
1. `In use` which explains how and where to use the code for best results.
  - This in everything but the cookbook this wiki will not be using libraries to explain the concepts of functional programming in JavaScript. This is done intentionally so as to remove as much cruft from learning the concept as possible. The intention is to explain everything as a [unit](/start-here/glossary)
1. `Why` you want to use this concept.
  - All the reasons to use this concept in your code. Why you should use this over other FP concepts or even why using it over imperative/oop code is better.

Also, at the bottom of most pages will be a tabset with `Citations`, `Definition References` at the bottom. I would recommend, at the very least, giving these a scan.

---
1. Some concepts may have more or less these 4 primary sub-pages. Things like `Type Signatures` don't need a code sub-page and things like `Tagged Sums` may have more to show off more of a concept or library.