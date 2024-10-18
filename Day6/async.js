// sayhello=()=>{
//     console.log("Hello Function");
//     setTimeout
// };
//     console.log("Start");
//     setTimeout(sayhello,4000);
//     console.log("End");

// console.log("Start");
// setTimeout(()=>{
//     console.log("First done");
//     setTimeout(()=>{
//         console.log("Second done");
//         setTimeout(()=>{
//             console.log("Third done");
//         },3000);
//     },4000);
// },5000);
// console.log("End");

// const myPromise = new Promise((resolve,reject)=>
// {
//     let success = true;
//     if(success){
//         resolve("Data and success");
//     }
//     else{
//         reject("Data failed to send");
//     }
// });

// myPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.log("Error fetching data" + error));

function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=> {
        console.log(message);
    resolve();
        },delay);
    });
}
task("First done",1000).then(()=>task("second done",2000)).then(()=>task("third done",3000)).then