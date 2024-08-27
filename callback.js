// function add(a,b) {
//     console.log(a+b)
// }

// function multi(a,b) {
// console.log(a*b)    
// }

// function axq(a,b) {
//     console.log(a**b)
// }

// function clc(a,b,sandeep) {
//  sandeep(a,b)   
// }

// // clc(3,4,multi)
// clc(3,4,axq)
// // clc(3,4,add)


// function getdata(data,san) {
//     setTimeout(() => {
//         console.log(data)
//         if (san) {
//           san()  
//         }
//     }, 1000);
    
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4)
//         })
//     })
// })



function getdata(data) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(data)
        resolve(200)
    }, 1000);
 })   
}
// getdata(1).then(()=>{getdata(2).then(()=>{getdata(3)})})
// getdata(1).then(()=>{getdata(2).then(()=>{getdata(3)})})

// getdata(1).then(()=>{
//     return getdata(2)
// }).then(()=>{
//     return getdata(3)
// })
// getdata(1).then(()=>{
//     return getdata(2)
// }).then(()=>{
//     return getdata(3)
// // })
// function getdata(data) {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(data)
//         resolve(200)
//     }, 2000);
//  })   
// }

// async function deepak(params) {
//     await getdata(1)
//     await getdata(2)
// }
// deepak()