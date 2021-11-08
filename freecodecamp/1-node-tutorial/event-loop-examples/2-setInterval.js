setInterval(() => {
    console.log('hello world');     //This is registered as callback first time(setInterval is async) and keeps on running.
}, 2000);

console.log('I will run first');
//process stays alive untill process is killed
//or terminated due to unexpected error
