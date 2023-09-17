const checkKar = ()=>{
    return (new Promise((resolve,reject)=>{
        isAccepeted = false;
        if(isAccepeted){
            resolve('he is accepted');
        }else{
            reject('he is rejected');
        }
}))
}

const promise = async() =>{
   
    try{
        const checkPromis = await checkKar();
        console.log('check ho gayi promise');
    }catch(err){
        console.log('kuch toh error aa gaya hai');
    }
}

promise();
 
