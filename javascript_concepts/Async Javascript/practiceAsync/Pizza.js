const cheese = () =>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese = 'paneer';
            resolve(cheese);
        },2000);
    })
    }

    const curry = (cheese) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const curry = 'sabji';
                reject('sabji banne me problem hai')
            },2000);
        })
    }
 

    const getSabji = async()=>{
        try{
            const  a = await cheese();
            console.log(a,' mil gayi jai');

           const b = await curry();
           console.log(b,' ban gayi hai');
        }catch(err){
            console.log(err);
        }
    }

    getSabji();