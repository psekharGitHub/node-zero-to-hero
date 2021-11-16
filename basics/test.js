const students = [
    {"name":"john", "age":12},
    {"name":"peter", "age":15}
]

console.log('Start of log');

 function enrollStudents(student) {
     console.log('Entered enrollStudent');

     return new Promise((resolve,reject) => {
         setTimeout(() => {
             students.push(student)
            console.log("Student enrolled"); 
         }, 1000);
         const error = false;
         if (!error) {
             console.log('Entered resolve block');
             resolve()
         } else
             reject()
     })
 }

 function getStudents() {
     setTimeout(() => {
         students.map(student => console.log(student.name))        
     }, 1000);
 }

 let newStudent = {"name":"susan", "age":18}

 console.log('Calling promise now');

 enrollStudents(newStudent).then(getStudents).catch(()=>console.log("Error"))
 //getStudents()
 console.log("End of Log");


// const promise = Promise.resolve(' result of a')

// console.log('I am sync job');

// promise.then((result) => console.log('Success of a : ' + result))
//         .catch((error) => console.log(error))
//         .finally(() => console.log('task a is done'))

// console.log('I am also sync job');
// console.log('I am sync job too');