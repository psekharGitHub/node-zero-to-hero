//started the operating system process
console.log('first task')

setTimeout(() => {
    console.log('second task');     //setTimeout is async, so second is registered as                                     
}, 0);                              //callback and printed after third

console.log('third task');
//end operating system process and exit
//output:
//      first
//      third
//      second