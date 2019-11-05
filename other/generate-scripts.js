console.clear()
const { readFileSync, readdirSync, statSync, writeFileSync } = require('fs')
const { join } = require('path')

// Copied and reformatted from: https://github.com/keithamus/sort-object-keys
const sortObjectByKeyNameList = (object, sortWith) => {
  let keys;
  let sortFn;

  if (typeof sortWith === 'function') {
    sortFn = sortWith;
  } else {
    keys = sortWith;
  }
  
  return (keys || []).concat(Object.keys(object).sort(sortFn)).reduce(function(total, key) {
    total[key] = object[key];
    return total;
  }, Object.create(null));
}

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())

const script = (dir) => ({
	key: `test:${dir}`,
	value: `mocha --require @babel/register --recursive ./src/${dir} --reporter mocha-clearscreen-reporter --watch`
})

const cata = (acc, dir) => ({
	[script(dir).key]: script(dir).value,
	...acc
})

const scripts = dirs('./src').reduce(cata, {})
const packageConfig = readFileSync('./package.json')
const packageAsJSON = JSON.parse(packageConfig)

const allScripts = {
	...scripts,
	...packageAsJSON.scripts,
}

packageAsJSON.scripts = sortObjectByKeyNameList(allScripts)
writeFileSync('./package.json', JSON.stringify(packageAsJSON, null, '  '))
