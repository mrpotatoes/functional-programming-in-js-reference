/* eslint-disable */
const daggy = {}

daggy.tagged = (typeName, fields) => {
  function constructor() {
    // Build out an object.
    const values = Array.prototype.slice.call(arguments);
    const proto = {
      toString() {
        return `${typeName}(${values.toString()})`
      },
      inspect() {
        return `${typeName}(${values.toString()})`
      }
    }
    proto.__proto__ = constructor.prototype
    const construct = Object.create(proto)

    for (let i = 0; i < fields.length; i++) {
      construct[fields[i]] = values[i]
    }

    return construct
  }

  constructor.toString = () => typeName

  constructor.is = (val) => {
    const vs = val.toString()
    const index = vs.indexOf('(')
    const name = index >= 0 ? vs.slice(0, index) : vs
    return typeName === name
  }

  return constructor
}

daggy.taggedSum = (typeName, constructors) => {
  let typeRep = function () { }
  Object.keys(constructors).forEach(name => {
    typeRep[name] = daggy.tagged(typeName + '.' + name, constructors[name])
    typeRep[name].prototype = typeRep.prototype
  })
  typeRep.is = (val) => {
    const vs = val.toString()
    return typeName === vs.slice(0, vs.indexOf('.'))
  }
  typeRep.prototype.cata = function (fs) {
    const typeRepString = this.toString()
    const dotIndex = typeRepString.indexOf('.')
    const parenIndex = typeRepString.indexOf('(')
    const constructor = dotIndex >= 0 ?
      typeRepString.slice(dotIndex + 1, parenIndex) : typeRepString

    const fields = constructors[constructor].reduce((acc, cur) => (
      this[cur] ? acc.concat([this[cur]]) : acc
    ), [])

    return fs[constructor].apply(fs, fields)
  }
  return typeRep
}

export default daggy