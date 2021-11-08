//USING async-await and Promises

const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
const start = async() => {
    try {
        const first = await readFile('./content/subfolder/first.txt', 'utf-8');
        const second = await readFile('./content/subfolder/second.txt', 'utf-8');
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
          )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()

//USING PROMISES

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err,data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/subfolder/test.txt')
//                 .then((result) => console.log(result))
//                 .catch((err) => console.log(err))


