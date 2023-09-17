const getCheese = ()=>{
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const cheese = 'paneer';
            console.log('here is the cheese',cheese);
            resolve(cheese);
        },2000)

    });
}

const getDough = (cheese)=>{
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const dough= 'aata';
            console.log('here is the cheese',dough);
            reject('reject ho gaya bhaiya');
        },2000)

    });
}


const getPizza= (pizza)=>{
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const pizza= 'pizza';
            console.log('here is the cheese',pizza);
            resolve(pizza);
        },2000)

    });
}



const orderPizza = async() => {

    try{
        const cheese = await getCheese();
        console.log('cheese mil gaya');

        const dough = await getDough();
        console.log('dough mil gaya');

        const pizza = await getPizza();
        console.log('pizza mil gaya');
    }catch(err) {
        console.log('error :' , err);
    }
   
}


orderPizza();