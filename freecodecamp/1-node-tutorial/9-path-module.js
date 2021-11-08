const path = require('path')

console.log(path.sep) //prints the seperator in a path

const filePath = path.join('/content/', 'subfolder', 'test.txt')

//relative path
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//absolute path from drive
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)