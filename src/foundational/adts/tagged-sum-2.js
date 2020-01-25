/* eslint-disable */
console.clear()

// This cleans up the syntax a bit.
const failureDef = (_) => {
  throw new TypeError('Invalid data structure provided')
}

export const defineProducts = (fields = []) =>
  fields.reduce(
    (acc, T, i) => ({
      [T.length]: T,
      ...acc,
    }),
    {},
  )

export const sumType = (types, failure = failureDef) => {
  const products = defineProducts(types)

  return (...args) => {
    const len = String(args.length)

    return (products[len])
      ? products[len](...args)
      : failure(...args)
  }
}

// These do not matter. This is from an example online.
const threeParams = (int, qty, unit) => ({ value: int * (unit === 'cent' ? 0.01 : 1.0) * qty })
const twoParams = (int, qty) => ({ value: int * qty })
const fourParams = (int, something, qwe, rty) => ({ value: `${int} yo man, do the thing` })

const Money = sumType(
  [threeParams, twoParams, fourParams]
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
