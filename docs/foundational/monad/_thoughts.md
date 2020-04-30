From: https://github.com/grillorafael/option-js (can I do this with self referencing Objects?).
Another lib: https://gitlab.com/niklasenglert/mathset

Their example:
```js
const Option = require('option-js')
const DefaultValue = 50
const value = Option.of(10)
const valueNull = Option.of(null)

console.log(value.getOrElse(DefaultValue)) // 10
console.log(valueNull.getOrElse(DefaultValue)) // 50

const user = (name) => ({
  username: 'username', // Required
  name: Option.of(name)
})

const withName = user(;John)
const withoutName = user()
console.log(withName.name.getOrElse('Anonymous')) // John
console.log(withoutName.name.getOrElse('Anonymous')) // Anonymous
```

Good reddit question + response: https://tinyurl.com/qo3zays

The use case listed on the github page is, imo, not really very convincing. You use monadic structures like `Maybe` when you write code like this:

```js
const res1 = doSomething()
if (res1 == null || res1.isError) return res1

const res2 = doSomethingElse(res1.value)
if (res2 == null || res2.isError) return res2

const res3 = doAnotherThingStill(res2.value)
if (res3 == null || res3.isError) return res3

return res3.value
```

Structures like `Maybe` allow you to simplify and DRY up that code, by using functions like `chain` and `map`, which simply do all of that checking that I did earlier:

```js
Maybe.some()
  .chain(doSomething)
  .chain(doSomethingElse)
  .chain(doAnotherThingStill);
```

Remember the old days of callbacks before promises, where you always had to check and rethrow the error? And how promises moved all of that boilerplate code away into the then function? Same deal there.