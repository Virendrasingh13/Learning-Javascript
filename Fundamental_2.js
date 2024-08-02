//Asyncronious Programming


// 01.Settimeout Function

// function getdata(data){
//     setTimeout( () => {console.log("Data : ",data);
//     } ,2000)
// }

// const fun = setTimeout( () =>{
//     console.log("Data : ",10);
// },2000)
// fun

//02      WAITING FOR DATA
// function getdata(data,nextdata){
//     setTimeout(() => {
//         console.log("Data ",data);
//         if(nextdata){
//            nextdata();
//         }
//     }, 2000);
// }


//03      CALLBACK HELL
// getdata(1,()=>{
//     console.log("Getting Data 2...");
//     getdata(2,()=>{
//         console.log("Getting Data 3...");
//         getdata(3,()=>{
//             console.log("Getting Data 4...");
//             getdata(4)
//         })
//     })
// })