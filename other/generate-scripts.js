console.clear()
const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
const script = (dir) => `"test:${dir}": "mocha --require @babel/register --recursive ./src/${dir} --reporter mocha-clearscreen-reporter --watch"`
const scripts = dirs('./src').map((dir) => script(dir)).join(', \n')

console.log(scripts)


