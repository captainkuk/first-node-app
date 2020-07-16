const step1 = () => {
    setTimeout(()=>{
        console.log('The First step.');
    },3000);
}

const step2 = function(){
    console.log('The Second step.');
}

step1();
step2();
