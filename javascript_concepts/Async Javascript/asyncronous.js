// function getCheese() {
//     setTimeout(()=>{
//         const cheese = 'paneer';
//         return cheese;
//     },2000)
// }


//  this is the creation of promise

const ticket = new Promise((resolve,reject)=>{
        const isBoarded = false;
        if(isBoarded){
            resolve('your flight is arriving');
        }else{
            reject('flight cancelled');
        }
});

ticket.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
}).finally(()=>{
    console.log('i will always be executed');
})
