const {readFile, writeFile} = require('fs')
// We run the callbacks when we are done. Like function in addEventListener callback function
console.log('start')
readFile('./content/subfolder/first.txt', 'utf-8',(err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/subfolder/result-sync.txt', 
        `Async Write : ${first} and ${second}`,
          (err, result) => {
              if (err) {
                  console.log(err)
                  return
              }
              //console.log(result)
              console.log('done with this task')
          })
    })
})
console.log('starting with the next task')  //next task starts before completion of first task
                                            //tasks need not wait for completion of the previous task
                                            //so extra delay is not incured