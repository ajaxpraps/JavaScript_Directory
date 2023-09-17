
const callbackFunction=()=>{
     console.log('this is callback function');
}

const naamBataoApna = (naam,func) =>{
     func();
     console.log('mera naam ',naam,' hai');
}

naamBataoApna('Ajay',callbackFunction);

