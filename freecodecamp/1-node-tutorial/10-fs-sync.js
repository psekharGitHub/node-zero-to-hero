const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/subfolder/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/subfolder/result-sync.txt', 
              `This result: ${first} and ${second} are writen using writeFileSync`,
              {flag : 'a'})
console.log('done with this task')
console.log('starting with next one')